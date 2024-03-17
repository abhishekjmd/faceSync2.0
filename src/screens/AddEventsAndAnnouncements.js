import React, { useState } from "react";
import { Box, Typography, TextField, FormControl, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton } from "@mui/material";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../utils/Theme";
import EventNoteIcon from '@mui/icons-material/EventNote';
import logo from "../assets/logo.png";
import { useNavigate } from 'react-router-dom';


function AddEventsAndAnnouncements() {
  const [date, setDate] = useState('');
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [type, setType] = useState('event'); // Assuming you want to hardcode or set this through some UI interaction
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const navigate = useNavigate();

  // Function to handle submission
  const handleSubmit = async () => {
    if (!date.trim() || !details.trim() || !title.trim()) {
      setAlertMessage('Please fill in all fields before submitting.');
      setAlertOpen(true);
    } else {
      try {
        // Format the date to ensure compatibility with your database
        const formattedDate = new Date(date).toISOString();
        const payload = {
          type, // This could be 'event' or 'announcement', depending on your form/UI
          date: formattedDate,
          details,
          title:title
          // Include additional fields as per your model requirements
        };
        const response = await fetch('http://192.168.155.237:3000/api/events-announcements', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          const error = await response.text();
          throw new Error(error || 'Failed to add event or announcement');
        }

        // Optionally handle response data
        const responseData = await response.json();
        navigate('/manageSchedule')
        setAlertMessage('Event successfully added!');
        setDate('');
        setDetails('');
        // Reset other fields as necessary
      } catch (error) {
        setAlertMessage(`Error: ${error.message}`);
      } finally {
        setAlertOpen(true);
      }
    }
  };

  const handleNavigate = (path) => {
    navigate(path);
  };

  // Function to close the dialog
  const handleCloseDialog = () => {
    setAlertOpen(false);
  };

  return (
    <Box
      sx={{
        width: SCREEN_WIDTH,
        height: 1600,
        backgroundColor: "black",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: 80,
          display: "flex",
          justifyContent: 'space-evenly',
          alignItems: "center",
          borderBottom: "1px solid #FFFFFF21",
          marginBottom: 10,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 5 }}>
          <img src={logo} style={{ height: 60, width: 40 }} />
          <Button onClick={() => handleNavigate('/manageSchedule')} sx={{ color: "white", fontSize: 24, fontWeight: "400", textTransform: "none" }}>Manage Schedule</Button>
          <Button onClick={() => handleNavigate('/manageStudentsProfile')} sx={{ color: "white", fontSize: 24, fontWeight: "400", textTransform: "none" }}>Manage Students</Button>
          <Button onClick={() => handleNavigate('/manageAttendence')} sx={{ color: "white", fontSize: 24, fontWeight: "400", textTransform: "none" }}>Manage Attendence</Button>
        </Box>
        <Box >
          <Typography sx={{ color: "white", fontSize: 24, fontWeight: "400" }}>Logout</Typography>
        </Box>
      </Box>
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 5 }}>
        <Box sx={{ width: 1000, height: 1000, backgroundColor: '#D9D9D91A', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'column' }}>
          <Box
            sx={{
              display: "flex",
              marginTop: 8,
              alignItems: "center",
              justifyContent: "center",
              gap: 3,
            }}
          >
            <Typography sx={{ fontSize: 24, color: "white", width: 200 }}>
              Date:
            </Typography>
            <Box sx={{ width: 650 }}>
              <FormControl fullWidth>
                <TextField
                  sx={{
                    backgroundColor: "#D9D9D933",
                  }}
                  name="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  type='date'
                />
              </FormControl>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              marginTop: 8,
              alignItems: "center",
              justifyContent: "center",
              gap: 3,
            }}
          >
            <Typography sx={{ fontSize: 24, color: "white", width: 200 }}>
              Title:
            </Typography>
            <Box sx={{ width: 650 }}>
              <FormControl fullWidth>
                <TextField
                  sx={{
                    backgroundColor: "#D9D9D933",
                  }}
                  name="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </FormControl>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              marginTop: 8,
              alignItems: "center",
              justifyContent: "center",
              gap: 3,
            }}
          >
            <Typography sx={{ fontSize: 24, color: "white", width: 200 }}>
              Details:
            </Typography>
            <Box sx={{ width: 650, }}>
              <FormControl fullWidth>
                <TextField
                  sx={{
                    backgroundColor: "#D9D9D933",
                    // height: 300,
                  }}
                  name="Details"
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                />
              </FormControl>
            </Box>
          </Box>
          <Box sx={{ width: 600, height: 70, display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid white', marginTop: 10, borderRadius: 2, backgroundColor: '#D9D9D933', marginLeft: 10 }}
            onClick={() => handleSubmit()}
          >
            <Typography sx={{ fontSize: 24, color: '#FFFFFF', textTransform: 'uppercase' }}>Add Events and announcements</Typography>
          </Box>
        </Box>
      </Box>
      <Dialog open={alertOpen} onClose={handleCloseDialog}>
        <DialogTitle>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <EventNoteIcon color="primary" />
            <Typography variant="h6" component="div">
              Submission Status
            </Typography>
          </Box>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {alertMessage}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>OK</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default AddEventsAndAnnouncements;
