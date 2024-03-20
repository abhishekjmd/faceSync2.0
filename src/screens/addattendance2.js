import React, { useState, useRef } from 'react';
import { Container, TextField, Button, List, ListItem, ListItemText, Typography, Box } from '@mui/material';

const Attendance = () => {
    const [name, setName] = useState('');
    const [attendanceList, setAttendanceList] = useState([]);
    const videoRef = useRef();

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleSubmit = () => {
        if (name) {
            setAttendanceList([...attendanceList, name]);
            setName('');
        }
    };

    const startCapture = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
            videoRef.current.srcObject = stream;
        } catch (error) {
            console.error('Error accessing media devices: ', error);
        }
    };

    const stopCapture = () => {
        const stream = videoRef.current.srcObject;
        const tracks = stream.getTracks();
        tracks.forEach(track => track.stop());
    };

    return (
        <Container maxWidth="sm">
            <Typography variant="h4" component="h1" gutterBottom>
                Attendance
            </Typography>
            <TextField
                label="Name"
                variant="outlined"
                fullWidth
                value={name}
                onChange={handleNameChange}
                margin="normal"
            />
            <Button variant="contained" color="primary" onClick={handleSubmit}>
                Mark Attendance
            </Button>
            <List>
                {attendanceList.map((attendee, index) => (
                    <ListItem key={index}>
                        <ListItemText primary={attendee} />
                    </ListItem>
                ))}
            </List>

            <Container>
                <Box sx={{ width: "500px", height: "500px", border: "2px solid black" }}>
                    <video autoPlay ref={videoRef} id="videoElement" style={{ width: "400px", height: "400px", border: "2px solid red" }}>
                        <source src="http://localhost:8000/video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <Button variant="contained" color="primary" onClick={startCapture}>Start Capture</Button>
                    <Button variant="contained" color="secondary" onClick={stopCapture}>Stop Capture</Button>
                </Box>
            </Container>
        </Container>
    );
};

export default Attendance;
