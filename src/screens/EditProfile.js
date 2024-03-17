import React, { useState } from "react";
import { Box, Typography, Menu, MenuItem, IconButton, TextField, FormControl, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from "@mui/material";
import { SCREEN_WIDTH } from "../utils/Theme";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import logo from "../assets/logo.png";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function EditProfile() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [pincode, setPincode] = useState('');
  const [hobbies, setHobbies] = useState('');
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleUpdateClick = async () => {
    // Retrieve the userId from localStorage
    const userId = localStorage.getItem('userId');
    console.log(userId);
    // Ensure userId is not null
    if (!userId) {
      setAlertMessage('User ID not found. Please log in again.');
      setAlertOpen(true);
      return;
    }
    if (!email.trim() || !address.trim() || !pincode.trim() || !hobbies.trim()) {
      setAlertMessage('Please fill in all fields.');
      setAlertOpen(true);
    } else {
      try {
        const response = await axios.patch(`http://192.168.155.237:3000/api/profile/${userId}`, {
          email, address, pincode, hobbies
        });
          setAlertMessage('Profile updated successfully.');
          setAlertOpen(true);
          navigate('/profileView')
        } catch (error) {
        setAlertMessage('Failed to update profile. Please try again.');
        setAlertOpen(true);
        console.error('Error updating profile:', error);
      }
    }
  };

  const handleMenuClick = (path) => {
    navigate(path);
    handleClose(); // Close the menu after navigation
  };

  const handleNavigate = (path) => {
    navigate(path);
  };

  const handleAlertClose = () => {
    setAlertOpen(false);
  };

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
          <Box>
            <Box
              sx={{
                width: 70,
                height: 70,
                borderRadius: 30,
                backgroundColor: "#D9D9D9",
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyItems: "flex-start",
              alignItems: "flex-start",
              flexDirection: "column",
            }}
          >
            <Typography
              sx={{ fontSize: 28, color: "white", textTransform: "uppercase" }}
            >
              Welcome 202100319010028
            </Typography>
            <Typography
              sx={{ fontSize: 28, color: "white", textTransform: "uppercase" }}
            >
              A30 Suman Kushwaha
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Box
          sx={{
            width: 800,
            height: 650,
            backgroundColor: "#D9D9D91A",
            marginTop: 6,
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            flexDirection: "column",
            padding: 6,
          }}
        >
          <Typography sx={{ fontWeight: "700", fontSize: 30, color: "white" }}>
            Edit Details:
          </Typography>
          <Box
            sx={{
              display: "flex",
              marginTop: 8,
              alignItems: "center",
              justifyContent: "center",
              gap: 3,
            }}
          >
            <Typography sx={{ fontSize: 20, color: "white", width: 200 }}>
              Email Address:
            </Typography>
            <Box sx={{ width: 500 }}>
              <FormControl fullWidth>
                <TextField
                  sx={{
                    backgroundColor: "#D9D9D9",
                  }}
                  label="Enter Your Email Address"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
            <Typography sx={{ fontSize: 20, color: "white", width: 200 }}>
              Address:
            </Typography>
            <Box sx={{ width: 500 }}>
              <FormControl fullWidth>
                <TextField
                  sx={{
                    backgroundColor: "#D9D9D9",
                  }}
                  label="E	nter Your Address"
                  name="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
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
            <Typography sx={{ fontSize: 20, color: "white", width: 200 }}>
              Area Pincode:
            </Typography>
            <Box sx={{ width: 500 }}>
              <FormControl fullWidth>
                <TextField
                  sx={{
                    backgroundColor: "#D9D9D9",
                  }}
                  label="Enter Your Area Pincode"
                  name="pincode"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
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
            <Typography sx={{ fontSize: 20, color: "white", width: 200 }}>
              Hobbies & interests:
            </Typography>
            <Box sx={{ width: 500 }}>
              <FormControl fullWidth>
                <TextField
                  sx={{
                    backgroundColor: "#D9D9D9",
                  }}
                  label="Enter Your hobbies"
                  name="hobbies"
                  value={hobbies}
                  onChange={(e) => setHobbies(e.target.value)}
                />
              </FormControl>
            </Box>
          </Box>
          <Box
            onClick={handleUpdateClick}
            sx={{
              width: 280,
              marginTop: 5,
              height: 70,
              backgroundColor: "#D9D9D9",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 10,
              marginLeft: 35
            }}
          >
            <Typography
              sx={{
                fontSize: 30,
                textTransform: "uppercase",
                fontWeight: "700",
              }}
            >
              Update
            </Typography>
          </Box>
          <Dialog
            open={alertOpen}
            onClose={handleAlertClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{"Update Status"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                {alertMessage}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleAlertClose}>OK</Button>
            </DialogActions>
          </Dialog>
        </Box>
      </Box>
    </Box>
  );
}

export default EditProfile;
