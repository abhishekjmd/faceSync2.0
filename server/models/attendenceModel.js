const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
    date: { type: Date, required: true },
    subject: { type: String, required: true },
    teacher: { type: String, required: true },
    time: { type: String, required: true },
    division: { type: String, required: true },
    classroom: { type: String, required: true },
    students: [{
        studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
        present: Boolean
    }]
}, { timestamps: true });

module.exports = mongoose.model('Attendance', attendanceSchema);
