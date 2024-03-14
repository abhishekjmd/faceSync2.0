const mongoose = require('mongoose');

const eventAnnouncementSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['event', 'announcement'],
    required: true
  },
  title: String,
  date: Date,
  details: String,
  location: String, // Optional, primarily for events
  imageUrl: String, // Optional, URL to an image for the event/announcement
  relevantUntil: Date, // Optional, more relevant for announcements
}, { timestamps: true });

module.exports = mongoose.model('EventAnnouncement', eventAnnouncementSchema);
