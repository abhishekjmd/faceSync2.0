const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Student = require('../models/studentModels');
const auth = require('../middleware/auth');

const router = express.Router();

// Registration endpoint
router.post('/register', async (req, res) => {
  try {
    let student = new Student(req.body);
    await student.save();
    res.status(201).send({ message: 'Student registered successfully' });
  } catch (error) {
    res.status(400).send(error);
  }
});


// Get student details by ID
router.get('/students/:id', async (req, res) => {
  try {
    const studentId = req.params.id;
    const student = await Student.findById(studentId);
    if (!student) {
      return res.status(404).send({ message: 'Student not found' });
    }
    res.send(student);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'An error occurred while fetching the student details' });
  }
});


// Login endpoint
// router.post('/login', async (req, res) => {
//   try {
//     const { username, password } = req.body;
//     const student = await Student.findOne({ username });
//     if (!student) {
//       return res.status(400).send('User not found');
//     }

//     const isMatch = await bcrypt.compare(password, student.password);
//     if (!isMatch) {
//       return res.status(400).send('Invalid credentials');
//     }

//     const token = jwt.sign({ id: student._id, role: student.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
//     res.send({ token });
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });

router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const student = await Student.findOne({ username });
    if (!student) {
      return res.status(400).send('User not found');
    }

    const isMatch = await bcrypt.compare(password, student.password);
    if (!isMatch) {
      return res.status(400).send('Invalid credentials');
    }

    // const token = jwt.sign({ id: student._id, role: student.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.send({ userId: student._id });
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).send('An error occurred during the login process');
  }
});


// Middleware to retrieve student from DB
async function getStudent(req, res, next) {
  let student;
  try {
    student = await Student.findById(req.user.id);
    if (!student) res.status(404).send({ message: 'Student not found' });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
  req.student = student;
  next();
}


// Simplified Change Password
router.post('/change-password', async (req, res) => {
  const { currentPassword, newPassword } = req.body;
  try {
    const student = await Student.findOne({ username });
    if (!student) {
      return res.status(404).send({ message: 'User not found.' });
    }
    const isMatch = await bcrypt.compare(currentPassword, student.password);
    if (!isMatch) {
      return res.status(400).send({ message: 'Invalid current password' });
    }
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    student.password = hashedPassword;
    await student.save();
    res.send({ message: 'Password updated successfully' });
  } catch (error) {
    res.status(500).send({ message: 'An error occurred', error });
  }
});


// Simplified Change Username
router.post('/change-username', async (req, res) => {
  const { currentUsername, newUsername } = req.body;

  try {
    const user = await Student.findOne({ username: currentUsername });
    if (!user) {
      return res.status(404).send({ message: 'User not found.' });
    }

    // Check if the new username is already taken
    const usernameExists = await Student.findOne({ username: newUsername });
    if (usernameExists) {
      return res.status(400).send({ message: 'Username is already taken.' });
    }

    user.username = newUsername;
    await user.save();

    res.send({ message: 'Username updated successfully.' });
  } catch (error) {
    res.status(500).send({ message: 'Server error.', error });
  }
});


// Update student profile
router.patch('/profile/:id', async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['email', 'address', 'pincode', 'hobbies'];
  const isValidOperation = updates.every(update => allowedUpdates.includes(update));

  if (!isValidOperation) {
    return res.status(400).send({ error: 'Invalid updates!' });
  }

  try {
    const student = await Student.findById(req.params.id);
    if (!student) {
      return res.status(404).send({ message: 'Student not found' });
    }

    updates.forEach(update => student[update] = req.body[update]);
    await student.save();
    res.send(student);
  } catch (error) {
    res.status(400).send(error);
  }
});

// router.patch('/profile', [auth, getStudent], async (req, res) => {
//   const updates = Object.keys(req.body);
//   const allowedUpdates = ['email', 'phoneNumber', 'address', 'pincode','hobbies']; // Specify allowed fields
//   const isValidOperation = updates.every(update => allowedUpdates.includes(update));

//   if (!isValidOperation) return res.status(400).send({ error: 'Invalid updates!' });

//   try {
//     updates.forEach(update => (req.student[update] = req.body[update]));
//     await req.student.save();
//     res.send(req.student);
//   } catch (error) {
//     res.status(400).send(error);
//   }
// });

// Delete student profile
router.delete('/profile', [auth, getStudent], async (req, res) => {
  try {
    await req.student.remove();
    res.send({ message: 'Profile deleted successfully' });
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
