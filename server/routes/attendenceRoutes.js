const express = require('express');
const Attendance = require('../models/attendenceModel');

const router = express.Router();

// Create a new attendance record
router.post('/record-attendance', async (req, res) => {
  const { date, subject, teacher, time, division, classroom, students } = req.body;

  try {
    const attendanceRecord = new Attendance({
      date,
      subject,
      teacher,
      time,
      division,
      classroom,
      students: students.map(student => ({
        studentId: student.studentId,
        present: student.present
      }))
    });

    await attendanceRecord.save();
    res.status(201).json(attendanceRecord);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});


// Get all attendance records
router.get('/', async (req, res) => {
  try {
    const records = await Attendance.find({})
     .populate({
       path: 'students.studentId',
       model: 'Student'
     })
      .exec();
    res.json(records);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a single attendance record by ID
router.get('/:studentId/attendance-records', async (req, res) => {
  try {
    const { studentId } = req.params;
    const attendanceRecords = await Attendance.find({ 'students.studentId': studentId });
    res.json(attendanceRecords);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// Update an attendance record by ID
router.patch('/:id', async (req, res) => {
  try {
    const record = await Attendance.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!record) return res.status(404).json({ message: 'Attendance record not found' });
    res.json(record);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete an attendance record by ID
router.delete('/:id', async (req, res) => {
  try {
    const record = await Attendance.findByIdAndDelete(req.params.id);
    if (!record) return res.status(404).json({ message: 'Attendance record not found' });
    res.json({ message: 'Attendance record deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
