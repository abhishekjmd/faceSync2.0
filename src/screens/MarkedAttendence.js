import React, { useState } from "react";
import { Box, Typography, TextField, InputAdornment, IconButton, Menu, MenuItem } from "@mui/material";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../utils/Theme";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import logo from "../assets/logo.png";
import SearchIcon from "@mui/icons-material/Search";

function MarkedAttendence() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
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
          justifyContent: "center",
          alignItems: "center",
          borderBottom: "1px solid #FFFFFF21",
          marginBottom: 10,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 5 }}>
          <img src={logo} style={{ height: 60, width: 40 }} />
          <Typography sx={{ color: "white", fontSize: 24, fontWeight: "400" }}>
            Home
          </Typography>
          <Typography sx={{ color: "white", fontSize: 24, fontWeight: "400" }}>
            DashBoard
          </Typography>
          <Typography sx={{ color: "white", fontSize: 24, fontWeight: "400" }}>
            Profile
          </Typography>
          <Typography sx={{ color: "white", fontSize: 24, fontWeight: "400" }}>
            Class Schedule
          </Typography>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Box
            sx={{
              marginLeft: 90,
              width: 50,
              height: 50,
              borderRadius: 30,
              backgroundColor: "#D9D9D9",
            }}
          />
          <IconButton onClick={handleClick}>
            <ArrowDropDownIcon sx={{ color: "white", fontSize: 30 }} />
          </IconButton>
          <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
            <MenuItem onClick={handleClose}>Edit Profile</MenuItem>
            <MenuItem onClick={handleClose}>Manage Password</MenuItem>
            <MenuItem onClick={handleClose}>View Marked Attendance</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </Box>
      </Box>

      <Box
        sx={{
          width: SCREEN_WIDTH,
          border: "1px solid #FFFFFF21",
          height: 100,
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography sx={{ fontSize: 32, color: "white", textTransform: 'uppercase', fontWeight: '700' }}>
            Marked Attendence data
          </Typography>
        </Box>
        <Box
          sx={{
            width: 170,
            height: 60,
            borderRadius: 4,
            backgroundColor: "#D9D9D9",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontSize: 24, color: "black" }}>
            Sort by dates
          </Typography>
        </Box>
      </Box>
      <Box sx={{
        width: SCREEN_WIDTH,
        borderBottom: "1px solid #FFFFFF21",
        height: 80,
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}>
        <Typography sx={{ fontSize: 24, color: 'white', width: '14%' }}>Date</Typography>
        <Typography sx={{ fontSize: 24, color: 'white', width: '20%' }}>Enrollment Number</Typography>
        <Typography sx={{ fontSize: 24, color: 'white', width: '20%' }}>Full name</Typography>
        <Typography sx={{ fontSize: 24, color: 'white', width: '12%' }}>Time</Typography>
      </Box>
      <Box sx={{
        width: SCREEN_WIDTH,
        borderBottom: "1px solid #FFFFFF21",
        height: 80,
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}>
        <Typography sx={{ fontSize: 24, color: 'white', width: '14%' }}>12-02-2024</Typography>
        <Typography sx={{ fontSize: 24, color: 'white', width: '20%' }}>20210031901008</Typography>
        <Typography sx={{ fontSize: 24, color: 'white', width: '20%' }}>Suman Kushwaha</Typography>
        <Typography sx={{ fontSize: 24, color: 'white', width: '12%' }}>12:30</Typography>
      </Box>
    </Box>
  );
}

export default MarkedAttendence;
