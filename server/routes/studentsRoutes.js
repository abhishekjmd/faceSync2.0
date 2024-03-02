const express = require('express');
const router = express.Router();
const Student = require('../models/studentModels');

// Get all students
router.get('/students', async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get student by enrollment number
router.get('/students/:enrollmentNumber', getStudent, (req, res) => {
  res.json(res.student);
});

// Create a student
router.post('/students', async (req, res) => {
  const student = new Student(req.body); // Use entire req.body object

  try {
    const newStudent = await student.save();
    res.status(201).json(newStudent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update student by enrollment number
router.patch('/students/:enrollmentNumber', getStudent, async (req, res) => {
  // Updated fields based on the student model
  ['username', 'name', 'department', 'course', 'rollNumber', 'division', 'email', 'phoneNumber', 'semester', 'year'].forEach(field => {
    if (req.body[field] != null) {
      res.student[field] = req.body[field];
    }
  });

  try {
    const updatedStudent = await res.student.save();
    res.json(updatedStudent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete student by enrollment number
router.delete('/students/:enrollmentNumber', getStudent, async (req, res) => {
  try {
    await res.student.remove();
    res.json({ message: 'Student deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Middleware function to get student by enrollment number
async function getStudent(req, res, next) {
  let student;
  try {
    student = await Student.findOne({ enrollmentNumber: req.params.enrollmentNumber });
    if (student == null) {
      return res.status(404).json({ message: 'Cannot find student' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.student = student;
  next();
}

module.exports = router;
