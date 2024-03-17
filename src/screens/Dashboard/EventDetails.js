// EventDetails.js
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';

function EventDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const { event } = location.state; // Assuming event details are passed via state

  return (
    <Box sx={{ width: '100%', minHeight: '100vh', backgroundColor: "black", padding: { xs: 2, sm: 4, md: 6 }, display: 'flex', flexDirection: 'column', }}>
      <Box sx={{ display: "flex", justifyContent: 'space-around', alignItems: "center", marginBottom: 2 }}>
        <img src={logo} alt="Logo" style={{ height: 60, width: 40 }} />
        <Button onClick={() => navigate(-1)} sx={{ color: "white", fontSize: 20 }}>Go Back</Button>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column',marginTop:5 }}>
        <Box sx={{ backgroundColor: "#D9D9D91A", padding: 3, width: '60%', }}>
          <Typography sx={{ fontSize: 24, fontWeight: "700", color: "white", marginBottom: 2 }}>
            {new Date(event.date).toLocaleDateString()}
          </Typography>
          <Typography sx={{ fontSize: 24, color: "white", marginBottom: 1 }}>
            {event.title}
          </Typography>
          <Typography sx={{ fontSize: 20, color: "white" }}>
            {event.details}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default EventDetails;
