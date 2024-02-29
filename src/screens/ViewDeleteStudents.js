import React, { useState } from "react";
import { Box, Typography, TextField, InputAdornment } from "@mui/material";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../utils/Theme";
import SearchIcon from "@mui/icons-material/Search";
import logo from "../assets/logo.png";

function ViewDeleteStudents() {
  return (
    <Box
      sx={{
        width: SCREEN_WIDTH,
        height: 1000,
        backgroundColor: "black",
      }}
    >

      {/* Header */}
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
          <img src={logo} style={{ height: 60, width: 40 }} alt="logo" />
          <Typography sx={{ color: "white", fontSize: 24, fontWeight: "400" }}>
            Manage Schedule
          </Typography>
          <Typography sx={{ color: "white", fontSize: 24, fontWeight: "400" }}>
            Manage Students
          </Typography>
          <Typography sx={{ color: "white", fontSize: 24, fontWeight: "400" }}>
            Manage Attendance
          </Typography>
        </Box>
        <Box >
          <Typography sx={{ color: "white", fontSize: 24, fontWeight: "400" }}>Logout</Typography>
        </Box>
      </Box>

      {/* Search bar */}
      <Box
        sx={{
          width: SCREEN_WIDTH,
          border: "1px solid #FFFFFF21",
          height: 80,
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography sx={{ fontSize: 24, color: "white", textTransform: 'uppercase' }}>
            edit student profile
          </Typography>
        </Box>
        <Box
          sx={{
            backgroundColor: "#D9D9D9",
            width: 480,
            height: 50,
            display: "flex",
            alignItems: "center",
            borderRadius: 4,
          }}
        >
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search by subject name"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: "black" }} />
                </InputAdornment>
              ),
              style: { color: "black", height: "100%" }, // Adjust text color and height to match your design
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                height: "100%",
                borderRadius: 4,
                "& fieldset": { border: "none" }, // Hide the border
                "&:hover fieldset": {
                  border: "none", // Hide the border on hover
                },
                "&.Mui-focused fieldset": {
                  border: "none", // Hide the border when focused
                },
              },
              backgroundColor: "#D9D9D9", // Match the background color
              borderRadius: 4, // Ensure consistency in border radius
            }}
          />
        </Box>
      </Box>

      {/* Header Row */}
      <Box sx={{
        width: SCREEN_WIDTH,
        borderBottom: "1px solid #FFFFFF21",
        height: 80,
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}>
        <Typography sx={{ fontSize: 24, color: 'white', width: '14%' }}>Enrollment ID</Typography>
        <Typography sx={{ fontSize: 24, color: 'white', width: '20%' }}>Full Name</Typography>
        <Typography sx={{ fontSize: 24, color: 'white', width: '20%' }}>Course</Typography>
        <Typography sx={{ fontSize: 24, color: 'white', width: '14%' }}>Semester</Typography>
        <Typography sx={{ fontSize: 24, color: 'white', width: '20%' }}></Typography>
      </Box>

      {/* Data Row */}
      <Box sx={{
        width: SCREEN_WIDTH,
        borderBottom: "1px solid #FFFFFF21",
        height: 80,
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}>
        <Typography sx={{ fontSize: 24, color: 'white', width: '14%' }}>202100319010028</Typography>
        <Typography sx={{ fontSize: 24, color: 'white', width: '20%' }}>Suman Kushwaha</Typography>
        <Typography sx={{ fontSize: 24, color: 'white', width: '14%' }}>BCA</Typography>
        <Typography sx={{ fontSize: 24, color: 'white', width: '20%' }}>VI</Typography>
        {/* Delete Button */}
        <Box sx={{ width: '5.5%', height: 50, backgroundColor: 'white', borderRadius: 4, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Typography sx={{ fontSize: 24, color: 'black' }}>Delete</Typography>
        </Box>
        {/* View Button */}
        <Box sx={{ width: '5.5%', height: 50, backgroundColor: 'white', borderRadius: 4, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Typography sx={{ fontSize: 24, color: 'black' }}>View</Typography>
        </Box>
      </Box>

    </Box>
  );
}

export default ViewDeleteStudents;
