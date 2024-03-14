import React, { useState,useEffect } from "react";
import { Box, Typography, TextField, InputAdornment, IconButton, Menu, MenuItem,Button } from "@mui/material";
import { SCREEN_WIDTH } from "../utils/Theme";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import logo from "../assets/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function ClassSchedules() {
  const [searchQuery, setSearchQuery] = useState("");
  const [classSchedules, setClassSchedules] = useState([]);
  const [isSortedAsc, setIsSortedAsc] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  useEffect(() => {
    // Replace 'http://localhost:3000/api/schedules' with your actual API URL
    const fetchClassSchedules = async () => {
      try {
        const response = await axios.get("http://192.168.155.237:3000/api/class-schedules");
        setClassSchedules(response.data);
      } catch (error) {
        console.error("Failed to fetch class schedules", error);
      }
    };

    fetchClassSchedules();
  }, []);


  const handleNavigate = (path) => {
    navigate(path);
  };

  const handleMenuClick = (path) => {
    navigate(path);
    handleClose(); // Close the menu after navigation
  };

  const filteredSchedules = classSchedules.filter(schedule =>
    schedule.subject.toLowerCase().includes(searchQuery.toLowerCase())
  );


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const sortSchedulesByDate = () => {
    const sortedSchedules = [...classSchedules].sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return isSortedAsc ? dateA - dateB : dateB - dateA; // Ascending or descending
    });
    setIsSortedAsc(!isSortedAsc); // Toggle the sort direction for next click
    setClassSchedules(sortedSchedules);
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
          <Button onClick={() => handleNavigate('/')} sx={{ color: "white", fontSize: 24, fontWeight: "400", textTransform: "none" }}>Home</Button>
          <Button onClick={() => handleNavigate('/dashboard')} sx={{ color: "white", fontSize: 24, fontWeight: "400", textTransform: "none" }}>Dashboard</Button>
          <Button onClick={() => handleNavigate('/profileView')} sx={{ color: "white", fontSize: 24, fontWeight: "400", textTransform: "none" }}>Profile</Button>
          <Button onClick={() => handleNavigate('/classSchedules')} sx={{ color: "white", fontSize: 24, fontWeight: "400", textTransform: "none" }}>Class Schedule</Button>
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
            <MenuItem onClick={() => handleMenuClick('/editProfile')}>Edit Profile</MenuItem>
            <MenuItem onClick={() => handleMenuClick('/ManagePassword')}>Manage Password</MenuItem>
            <MenuItem onClick={() => handleMenuClick('/markedAttendence')}>View Marked Attendance</MenuItem>
            <MenuItem onClick={() => handleMenuClick('/welcomePage')}>Logout</MenuItem>
          </Menu>
        </Box>
      </Box>

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
            Class Schedule
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
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
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
          <Button onClick={sortSchedulesByDate} sx={{ width: 190, height: 60, borderRadius: 4, backgroundColor: "#D9D9D9", display: "flex", justifyContent: "center", alignItems: "center", fontSize: 18, color: "black" }}>Sort by dates</Button>
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
        <Typography sx={{ fontSize: 24, color: 'white', width: '20%' }}>Subject Name</Typography>
        <Typography sx={{ fontSize: 24, color: 'white', width: '20%' }}>Teacher Name</Typography>
        <Typography sx={{ fontSize: 24, color: 'white', width: '12%' }}>Division</Typography>
        <Typography sx={{ fontSize: 24, color: 'white', width: '12%' }}>Time</Typography>
        <Typography sx={{ fontSize: 24, color: 'white', width: '12%' }}>Class No.</Typography>
      </Box>
      {filteredSchedules.map((schedule, index) => (
      <Box sx={{
        width: SCREEN_WIDTH,
        borderBottom: "1px solid #FFFFFF21",
        height: 80,
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}>
          <Typography sx={{ fontSize: 24, color: 'white', width: '14%' }}>{new Date(schedule.date).toLocaleDateString('en-US', {
            weekday: 'long', // "Monday"
            year: 'numeric', // "2024"
            month: 'long', // "March"
            day: 'numeric' // "15"
          })}</Typography>
          <Typography sx={{ fontSize: 24, color: 'white', width: '20%' }}>{schedule.subject}</Typography>
          <Typography sx={{ fontSize: 24, color: 'white', width: '20%' }}>{schedule.teacher}</Typography>
          <Typography sx={{ fontSize: 24, color: 'white', width: '12%' }}>{schedule.division}</Typography>
          <Typography sx={{ fontSize: 24, color: 'white', width: '12%' }}>{schedule.time} am</Typography>
          <Typography sx={{ fontSize: 24, color: 'white', width: '12%' }}>{schedule.classroom}</Typography>
      </Box>
      ))}
      <Box sx={{width:'100%',height:100,display:'flex',alignItems:'center',justifyContent:'center',marginTop:5}}>
        <Box sx={{ width: 300, height: 80, borderRadius: 10, backgroundColor: '#D9D9D9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Typography sx={{fontSize:32,color:'black'}}>View Past</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default ClassSchedules;
