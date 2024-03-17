const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const studentSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  role: {
    type: String,
    // required: true // Consider validating against specific roles, e.g., ["student", "admin"]
  },
  year: {
    type: Number,
    // required: false // Make sure to handle this based on the role
  },
  semester: {
    type: String,
    // required: false // Adjusted to be optional
  },
  enrollmentNumber: {
    type: String,
    unique: true,
    required: true
  },
  department: {
    type: String,
    required: true
  },
  course: {
    type: String,
    required: true
  },
  rollNumber: {
    type: String,
    required: true
  },
  division: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true // Assuming email should also be unique
  },
  phoneNumber: {
    type: String,
    required: true
    // Consider adding regex validation
  },
  password: { // Assuming you intend to store a hashed password
    type: String,
    required: true
  },
  gender: {
    type: String,
    // required: true
  },
  address: {
    type: String,
    // required: true
  },
  area: {
    type: String,
    // required: true
  },
  pincode: {
    type: String,
    // required: true
  },
  hobbies: [String], // Array of strings to allow multiple hobbies
  interests: [String]
});

// Example of pre-save hook for hashing passwords
studentSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

module.exports = mongoose.model('Student', studentSchema);
