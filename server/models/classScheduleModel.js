const mongoose = require('mongoose');

const classScheduleSchema = new mongoose.Schema({
    date: { type: Date, required: true },
    subject: { type: String, required: true },
    teacher: { type: String, required: true },
    time: { type: String, required: true }, // Consider using ISO 8601 time format or another standardized format
    division: { type: String, required: true },
    classroom: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('ClassSchedule', classScheduleSchema);
