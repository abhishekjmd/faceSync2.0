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

function ManagePassword() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleUpdatePassword = () => {
    // Validate and process the password update here
    setAlertMessage("Password update successful.");
    setAlertOpen(true);
  };

  const handleUpdateUsername = () => {
    // Validate and process the username update here
    setAlertMessage("Username update successful.");
    setAlertOpen(true);
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
                sx={{
                  backgroundColor: "#D9D9D9",
                }}
                label="Enter Your Current Password"
                name="password"
              />
            </FormControl>
          </Box>
          <Box sx={{ width: 400, marginTop: 4 }}>
            <FormControl fullWidth>
              <TextField
                sx={{
                  backgroundColor: "#D9D9D9",
                }}
                label="Enter Your Current Password"
                name="password"
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
            color:'black',
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
                sx={{
                  backgroundColor: "#D9D9D9",
                }}
                label="Enter Your Current Username"
                name="password"
              />
            </FormControl>
          </Box>
          <Box sx={{ width: 400, marginTop: 4 }}>
            <FormControl fullWidth>
              <TextField
                sx={{
                  backgroundColor: "#D9D9D9",
                }}
                label="Enter Your New Username"
                name="password"
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
