// models/Course.js
const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  category: String,
  name: String,
  years: [String], // Array of years
  subjects: [{ year: String, subjects: [String] }], // Array of objects with year and subjects
});

module.exports = mongoose.model('Course', courseSchema);
