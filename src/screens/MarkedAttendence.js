import React, { useState, useEffect } from "react";
import { Box, Typography, TextField, InputAdornment, IconButton, Menu, MenuItem, Button } from "@mui/material";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../utils/Theme";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import logo from "../assets/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function MarkedAttendence() {
  const [searchQuery, setSearchQuery] = useState("");
  const [markedAttendanceData, setMarkedAttendanceData] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc"); // New state to track sort order
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAttendanceRecords = async () => {
      try {
        const response = await axios.get('http://192.168.155.237:3000/api/attendance');
        setMarkedAttendanceData(response.data);
      } catch (error) {
        console.error("Failed to fetch attendance records:", error);
      }
    };
    fetchAttendanceRecords();
  }, []);

  const handleNavigate = (path) => {
    navigate(path);
  };

  const handleMenuClick = (path) => {
    navigate(path);
    handleClose(); // Close the menu after navigation
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const sortDataByDate = () => {
    const sortedData = [...markedAttendanceData].sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
    });
    setMarkedAttendanceData(sortedData);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc"); // Toggle the sort order for the next click
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: "black",
        padding: { xs: 2, sm: 4 },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderBottom: "1px solid #FFFFFF21",
          marginBottom: 2,
          flexDirection: { xs: "column", sm: "row" }, // Stack on small screens, row on others
          gap: { xs: 2, sm: 0 },
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 4, }}>
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
          onClick={sortDataByDate}
          >
          <Typography sx={{ fontSize: 24, color: "black" }}>
            Sort by dates
          </Typography>
        </Box>
      </Box>
      {/* Attendance Data Heading */}
      <Box sx={{ width: SCREEN_WIDTH, border: "1px solid #FFFFFF21", marginBottom: 2, display: "flex", justifyContent: "space-around", alignItems: "center",padding:3 }}>
        <Typography sx={{ color: 'white', flexGrow: 1, textAlign: 'center',fontSize:24 }}>Date</Typography>
        <Typography sx={{ color: 'white', flexGrow: 1, textAlign: 'center', fontSize: 24 }}>Enrollment Number</Typography>
        <Typography sx={{ color: 'white', flexGrow: 1, textAlign: 'center', fontSize: 24 }}>Full Name</Typography>
        <Typography sx={{ color: 'white', flexGrow: 1, textAlign: 'center', fontSize: 24 }}>Time</Typography>
      </Box>

      {/* Attendance data listing */}
      {markedAttendanceData.map((session) => (
        session.students.map(({ studentId, present }) => present && (
          <Box key={studentId._id} sx={{ width: SCREEN_WIDTH, borderBottom: "1px solid #FFFFFF21", display: "flex", justifyContent: "space-around", alignItems: "center", padding: "10px 0" }}>
            <Typography sx={{ color: 'white', flexGrow: 1, textAlign: 'center', fontSize: 24 }}>{new Date(session.date).toLocaleDateString()}</Typography>
            <Typography sx={{ color: 'white', flexGrow: 1, textAlign: 'center', fontSize: 24 }}>{studentId.enrollmentNumber}</Typography>
            <Typography sx={{ color: 'white', flexGrow: 1, textAlign: 'center', fontSize: 24 }}>{studentId.name}</Typography>
            <Typography sx={{ color: 'white', flexGrow: 1, textAlign: 'center', fontSize: 24 }}>{session.time}</Typography>
          </Box>
        ))
      ))}
      </Box>
  );
}

export default MarkedAttendence;
