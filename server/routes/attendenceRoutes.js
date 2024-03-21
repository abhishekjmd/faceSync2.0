const express = require('express');
const Attendance = require('../models/attendenceModel'); // Ensure the model file name matches the updated one if changed

const router = express.Router();

// Create a new attendance record
router.post('/record-attendance', async (req, res) => {
  const { date, time, name, present } = req.body;

  try {
    const attendanceRecord = new Attendance({
      date,
      time,
      name,
      present

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
    const records = await Attendance.find({}).exec();
    res.json(records);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Since the original schema was significantly changed, the route for getting a single attendance record by studentId
// may no longer be relevant. If you still need a similar functionality, consider updating the logic based on new schema.
// For now, it's omitted due to the lack of a clear replacement.

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
