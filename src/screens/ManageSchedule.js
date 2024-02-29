import React, { useState } from "react";
import { Box, Typography, TextField, InputAdornment, IconButton, Menu, MenuItem } from "@mui/material";
import { SCREEN_WIDTH } from "../utils/Theme";
import logo from "../assets/logo.png";

function ManageSchedule() {

  return (
    <Box
      sx={{
        width: SCREEN_WIDTH,
        height: 1000,
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
          <Typography sx={{ color: "white", fontSize: 24, fontWeight: "400" }}>
            Manage Schedule
          </Typography>
          <Typography sx={{ color: "white", fontSize: 24, fontWeight: "400" }}>
            Manage Students
          </Typography>
          <Typography sx={{ color: "white", fontSize: 24, fontWeight: "400" }}>
            Manage Attendence
          </Typography>
        </Box>
        <Box >
          <Typography sx={{ color: "white", fontSize: 24, fontWeight: "400" }}>Logout</Typography>
        </Box>
      </Box>
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 5 }}>
        <Box sx={{ width: 480, height: 650, backgroundColor: '#D9D9D91A', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'column' }}>
          <Box sx={{ width: 400, height: 40, display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid white', marginTop: 5, borderRadius: 2, backgroundColor: '#D9D9D91A' }}>
            <Typography sx={{ fontSize: 24, color: '#FFFFFF' }}>Add Session</Typography>
          </Box>
          <Box sx={{ width: '100%', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', marginTop: 1 }}>
            <Typography sx={{ fontSize: 20, fontWeight: '700', color: 'white', padding: 4 }}>Recent Sessions</Typography>
          </Box>
          <Box sx={{ width: '100%', height: 70, display: 'flex', justifyContent: 'flex-start', alignItems: 'center', border: '1px solid #FFFFFF21' }}>
            <Typography sx={{ fontSize: 18, fontWeight: '700', color: 'white', padding: 2 }}>12-02-2024 Introduction to Artificial Intelligence Pro</Typography>
          </Box>
          <Box sx={{ width: '100%', height: 70, display: 'flex', justifyContent: 'flex-start', alignItems: 'center', border: '1px solid #FFFFFF21' }}>
          </Box>
        </Box>

        <Box sx={{ width: 480, height: 650, backgroundColor: '#D9D9D91A', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'column' }}>
          <Box sx={{ width: 420, height: 40, display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid white', marginTop: 5, borderRadius: 2, backgroundColor: '#D9D9D91A' }}>
            <Typography sx={{ fontSize: 20, color: '#FFFFFF', textTransform: 'uppercase' }}>Add Events and announcements</Typography>
          </Box>
          <Box sx={{ width: '100%', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', marginTop: 1 }}>
            <Typography sx={{ fontSize: 20, fontWeight: '700', color: 'white', padding: 4, textTransform: 'capitalize' }}>Recent Events & announcements</Typography>
          </Box>
          <Box sx={{ width: '100%', height: 120, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', border: '1px solid #FFFFFF21' }}>
            <Typography sx={{ fontSize: 18, fontWeight: '700', color: 'white', padding: 2 }}>Saturday,17 February 2024</Typography>
            <Typography sx={{ fontSize: 18, fontWeight: '700', color: 'white', padding: 2 }}>CyberShadez event starting from 20-02-2024</Typography>
          </Box>
          <Box sx={{ width: '100%', height: 70, display: 'flex', justifyContent: 'flex-start', alignItems: 'center', border: '1px solid #FFFFFF21' }}>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ManageSchedule;
