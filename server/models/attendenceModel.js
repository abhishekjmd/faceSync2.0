const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
    date: { type: Date, required: true }, // Stores full date and time, handle formatting in application logic
    time: { type: String, required: true }, // If you want to store time separately, but consider removing if date will include time
    name: { type: String, required: true }, // Assuming you wanted a name field for each record
    present: { type: Boolean, required: true } // Attendance status
}, { timestamps: true });

module.exports = mongoose.model('Attendance', attendanceSchema);