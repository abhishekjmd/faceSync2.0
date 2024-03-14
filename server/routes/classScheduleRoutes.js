const express = require('express');
const ClassSchedule = require('../models/classScheduleModel');

const router = express.Router();

// Create a new class schedule
router.post('/', async (req, res) => {
    try {
        const classSchedule = new ClassSchedule(req.body);
        await classSchedule.save();
        res.status(201).json(classSchedule);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Get all class schedules
router.get('/', async (req, res) => {
    try {
        const schedules = await ClassSchedule.find();
        res.json(schedules);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get a single class schedule by ID
router.get('/:id', async (req, res) => {
    try {
        const schedule = await ClassSchedule.findById(req.params.id);
        if (!schedule) return res.status(404).json({ message: 'Schedule not found' });
        res.json(schedule);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update a class schedule by ID
router.patch('/:id', async (req, res) => {
    try {
        const schedule = await ClassSchedule.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!schedule) return res.status(404).json({ message: 'Schedule not found' });
        res.json(schedule);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete a class schedule by ID
router.delete('/:id', async (req, res) => {
    try {
        const schedule = await ClassSchedule.findByIdAndDelete(req.params.id);
        if (!schedule) return res.status(404).json({ message: 'Schedule not found' });
        res.json({ message: 'Schedule deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;