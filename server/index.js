const express = require('express');
const mongoose = require('mongoose');
const studentRoutes = require('./routes/studentsRoutes.js');
const authRoutes = require('./routes/auth.js');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Updated connection setup without the deprecated options
mongoose.connect('mongodb+srv://aspringsoul120:FUJbIIoRyaBFAwGX@cluster0.hqymmtj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { tls: true })
    .then(() => console.log('MongoDB connection successful'))
    .catch(err => console.error('MongoDB connection error:', err));
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to database'));

app.use('/api', studentRoutes);
app.use('/api/auth', authRoutes);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
