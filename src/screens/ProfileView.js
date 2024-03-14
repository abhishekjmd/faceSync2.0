import React, { useState,useEffect } from "react";
import { Box, Typography, Menu, MenuItem, IconButton,Button } from "@mui/material";
import { SCREEN_WIDTH } from "../utils/Theme";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import logo from "../assets/logo.png";
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function ProfileView() {
  const [anchorEl, setAnchorEl] = useState(null);
  const location = useLocation();
  const studentId = location.state?.studentId;
  const navigate = useNavigate();
  const [studentDetails, setStudentDetails] = useState({

    name: '',
    department: '',
    enrollmentNumber: '',
    course: '',
    rollNumber: '',
    email: '',
    phoneNumber: '',
    gender: '',
    address: '',
    pincode: '',
    hobbies: [],
  });
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleNavigateDashboard = () => {
    navigate('/dashboard');
  };

  const handleNavigate = (path) => {
    navigate(path);
  };

  const handleMenuClick = (path) => {
    navigate(path);
    handleClose(); // Close the menu after navigation
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    // Replace 'studentId' with the actual ID or a method to retrieve it
    // const studentId = "REPLACE_WITH_ACTUAL_STUDENT_ID";
    const fetchStudentDetails = async () => {
    
      const userId = localStorage.getItem('userId');
      try {
        const response = await axios.get(`http://192.168.155.237:3000/api/students/${userId}`);
        console.log(response.data);
        setStudentDetails(response.data);
      } catch (error) {
        console.error("Failed to fetch student details", error);
      }
    };

    fetchStudentDetails();
  }, []);


  return (
    <Box
      sx={{
        width: SCREEN_WIDTH,
        height: 1500,
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
        <Box sx={{ display: "flex", alignItems: "center", gap: 5 }} >
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
          height: 90,
          display: "flex",
          flexDirection: "row",
          marginLeft: 20,
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            gap: 4,
            justifyContent: "flex-start",
          }}
        >
          <Box
            sx={{
              width: 70,
              height: 70,
              borderRadius: 30,
              backgroundColor: "#D9D9D9",
            }}
          ></Box>
          <Box
            sx={{
              // paddingRight: 80,
              display: "flex",
              justifyItems: "flex-start",
              alignItems: "flex-start",
              flexDirection: "column",
            }}
          >
            <Typography
              sx={{ fontSize: 28, color: "white", textTransform: "uppercase" }}
            >
              Welcome {studentDetails.enrollmentNumber}
            </Typography>
            <Typography
              sx={{ fontSize: 28, color: "white", textTransform: "uppercase" }}
            >
              {studentDetails.rollNumber}  {studentDetails.name}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          marginTop: 10,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 4,
        }}
      >
        <Box
          sx={{
            width: 450,
            height: 800,
            backgroundColor: "#D9D9D91A",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: 6,
          }}
        >
          <Typography sx={{ fontSize: 32, fontWeight: "700", color: "white" }}>
            Student University Details:
          </Typography>
          <Typography sx={{ fontSize: 24, color: "white", marginTop: 4 }}>
            Full Name:
          </Typography>{" "}
          <Typography sx={{ fontSize: 24, color: "white" }}>
            {studentDetails.name}
          </Typography>{" "}
          <Typography sx={{ fontSize: 24, color: "white", marginTop: 4 }}>
            Department
          </Typography>{" "}
          <Typography sx={{ fontSize: 24, color: "white" }}>
            {studentDetails.department}
          </Typography>{" "}
          <Typography sx={{ fontSize: 24, color: "white", marginTop: 4 }}>
            Enrollment Number:
          </Typography>{" "}
          <Typography sx={{ fontSize: 24, color: "white" }}>
            {studentDetails.enrollmentNumber}
          </Typography>{" "}
          <Typography sx={{ fontSize: 24, color: "white", marginTop: 4 }}>
            Course:
          </Typography>{" "}
          <Typography sx={{ fontSize: 24, color: "white" }}>{studentDetails.
            course}</Typography>{" "}
          <Typography sx={{ fontSize: 24, color: "white", marginTop: 4 }}>
            Roll Number:
          </Typography>{" "}
          <Typography sx={{ fontSize: 24, color: "white" }}>{studentDetails.rollNumber}</Typography>{" "}
          <Typography sx={{ fontSize: 24, color: "white", marginTop: 4 }}>
            Email:
          </Typography>{" "}
          <Typography sx={{ fontSize: 24, color: "white" }}>
            {studentDetails.email}
          </Typography>{" "}
          <Typography sx={{ fontSize: 24, color: "white", marginTop: 4 }}>
            Phone Number:
          </Typography>{" "}
          <Typography sx={{ fontSize: 24, color: "white" }}>
            {studentDetails.phoneNumber}
          </Typography>
        </Box>
        <Box
          sx={{
            width: 450,
            height: 800,
            backgroundColor: "#D9D9D91A",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: 6,
          }}
        >
          <Typography sx={{ fontSize: 32, fontWeight: "700", color: "white" }}>
            Student Personal Details:
          </Typography>
          <Typography sx={{ fontSize: 24, color: "white", marginTop: 4 }}>
            Gender:
          </Typography>{" "}
          <Typography sx={{ fontSize: 24, color: "white" }}>{studentDetails.gender}</Typography>{" "}
          <Typography sx={{ fontSize: 24, color: "white", marginTop: 4 }}>
            Address
          </Typography>{" "}
          <Typography sx={{ fontSize: 24, color: "white" }}>
            {studentDetails.address}
          </Typography>{" "}
          <Typography sx={{ fontSize: 24, color: "white", marginTop: 4 }}>
            Area Pincode:
          </Typography>{" "}
          <Typography sx={{ fontSize: 24, color: "white" }}>{studentDetails.
            pincode}</Typography>{" "}
          <Typography sx={{ fontSize: 24, color: "white", marginTop: 4 }}>
            Hobbies and interests:
          </Typography>{" "}
          <Typography sx={{ fontSize: 24, color: "white", }}>
            {studentDetails.hobbies}
          </Typography>{" "}
        </Box>
      </Box>
    </Box>
  );
}

export default ProfileView;
