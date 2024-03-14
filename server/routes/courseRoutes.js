const express = require('express');
const router = express.Router();
const Course = require('../models/courseModel')

router.post('/courses', async (req, res) => {
  try {
    const course = new Course(req.body);
    await course.save();
    res.status(201).send(course);
  } catch (error) {
    res.status(400).send(error);
  }
});

// GET endpoint to fetch all courses
router.get('/courses', async (req, res) => {
  try {
    const courses = await Course.find({});
    res.send(courses);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
