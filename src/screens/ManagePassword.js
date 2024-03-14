import React, { useState } from "react";
import {
  Box,
  Typography,
  Menu,
  MenuItem,
  IconButton,
  FormControl,
  TextField,
  Link,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { SCREEN_WIDTH } from "../utils/Theme";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import logo from "../assets/logo.png";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function ManagePassword() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [currentUsername, setCurrentUsername] = useState('');
  const [newUsername, setNewUsername] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = (path) => {
    navigate(path);
    handleClose(); // Close the menu after navigation
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNavigate = (path) => {
    navigate(path);
  };

  const API_BASE_URL = "http://192.168.155.237:3000/api";

  const handleUpdatePassword = async () => {
    setPasswordError("");
    if (!currentPassword || !newPassword) {
      setPasswordError("Both current and new password are required.");
      return;
    }
    try {
      const response = await axios.post(`${API_BASE_URL}/change-password`, {
        currentPassword,
        newPassword,
      });
      console.log('response', response);
      setAlertMessage(response.data.message || "Password successfully updated.");
      setAlertOpen(true);
    } catch (error) {
      setPasswordError(error.response?.data?.message || "An error occurred during the password update.");
    }
  };

  const handleUpdateUsername = async () => {
    setUsernameError("");
    if (!currentUsername || !newUsername) {
      setUsernameError("Both current and new username are required.");
      return;
    }
    try {
      const response = await axios.post(`${API_BASE_URL}/change-username`, {
        currentUsername,
        newUsername,
      });
      setAlertMessage(response.data.message || "Username successfully updated.");
      setAlertOpen(true);
    } catch (error) {
      setUsernameError(error.response?.data?.message || "An error occurred during the username update.");
    }
  };

  const handleCloseAlert = () => {
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
          width: SCREEN_WIDTH,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 5,
        }}
      >
        <Box
          sx={{
            width: 450,
            height: 550,
            backgroundColor: "#D9D9D91A",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            // marginBottom: 5,
          }}
        >
          <Typography
            sx={{
              fontSize: 30,
              fontWeight: "700",
              color: "white",
              textTransform: "uppercase",
              marginBottom: 5,
            }}
          >
            Change password
          </Typography>
          <Box sx={{ width: 400 }}>
            <FormControl fullWidth>
              <TextField
                error={Boolean(passwordError)}
                helperText={passwordError}
                label="Enter Your Current Password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                sx={{ backgroundColor: "#D9D9D9", margin: "10px 0" }}
              />
            </FormControl>
          </Box>
          <Box sx={{ width: 400, marginTop: 4 }}>
            <FormControl fullWidth>
              <TextField
                label="Enter Your New Username"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                sx={{ backgroundColor: "#D9D9D9", margin: "10px 0" }}
              />
            </FormControl>
          </Box>
          <Button variant="contained" onClick={handleUpdatePassword} sx={{
            mt: 2, width: 350,
            marginTop: 5,
            backgroundColor: "#D9D9D9",
            height: 60,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
            fontSize: 30,
            textTransform: "uppercase",
            fontWeight: "700",
            color: 'black',
            ':hover': { bgcolor: '#cccccc' }
          }}>
            Update
          </Button>
          <Box sx={{ marginTop: 5 }}>
            <Typography
              sx={{
                fontSize: 30,
                textTransform: "uppercase",
                fontWeight: "700",
                color: "white",
              }}
            >
              OR
            </Typography>
          </Box>
          <Box
            sx={{
              width: 500,
              marginTop: 2,
              fontWeight: 700,
              fontSize: 20,
            }}
          >
            <Typography sx={{ color: "white" }}>
              Forget your Password?&nbsp;
              <Link
                component="button"
                sx={{ color: "white", fontWeight: 700, fontSize: 18 }}
                underline="always"
              >
                Click here
              </Link>
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            width: 450,
            height: 550,
            backgroundColor: "#D9D9D91A",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            // marginBottom: 5,
          }}
        >
          <Typography
            sx={{
              fontSize: 30,
              fontWeight: "700",
              color: "white",
              textTransform: "uppercase",
              marginBottom: 5,
            }}
          >
            Change username
          </Typography>
          <Box sx={{ width: 400 }}>
            <FormControl fullWidth>
              <TextField
                error={Boolean(usernameError)}
                helperText={usernameError}
                label="Enter Your Current Username"
                value={currentUsername}
                onChange={(e) => setCurrentUsername(e.target.value)}
                sx={{ backgroundColor: "#D9D9D9", margin: "10px 0" }}
              />
            </FormControl>
          </Box>
          <Box sx={{ width: 400, marginTop: 4 }}>
            <FormControl fullWidth>
              <TextField
                label="Enter Your New Username"
                value={newUsername}
                onChange={(e) => setNewUsername(e.target.value)}
                sx={{ backgroundColor: "#D9D9D9", margin: "10px 0" }}
              />
            </FormControl>
          </Box>
          <Button variant="contained" onClick={handleUpdateUsername} sx={{
            mt: 2, width: 350,
            marginTop: 5,
            backgroundColor: "#D9D9D9",
            height: 60,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
            fontSize: 30,
            textTransform: "uppercase",
            fontWeight: "700",
            color: 'black',
            ':hover': { bgcolor: '#cccccc' }
          }}>
            Update
          </Button>
        </Box>
        <Dialog
          open={alertOpen}
          onClose={handleCloseAlert}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Update Notification"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {alertMessage}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseAlert}>OK</Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Box>
  );
}

export default ManagePassword;
