const express = require('express');
const EventAnnouncement = require('../models/eventsAndAnnouncementsModel');
const router = express.Router();

router.post('/events-announcements', async (req, res) => {
  try {
    const eventAnnouncement = new EventAnnouncement(req.body);
    await eventAnnouncement.save();
    res.status(201).send(eventAnnouncement);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Endpoint to get all events and announcements
router.get('/events-announcements', async (req, res) => {
  try {
    const eventsAnnouncements = await EventAnnouncement.find({});
    res.send(eventsAnnouncements);
  } catch (error) {
    res.status(500).send(error);
  }
});


module.exports = router;