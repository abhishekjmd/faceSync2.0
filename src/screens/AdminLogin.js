import {useState} from 'react';
import { Box, FormControl, Link, TextField, Typography, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,Button } from "@mui/material";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../utils/Theme";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const navigate = useNavigate()

  const handleLogin = async () => {
    if (!username.trim() || !password.trim()) {
      setAlertMessage('Username and password are required.');
      setAlertOpen(true);
      return;
    }
    try {
      const response = await axios.post('http://192.168.155.237:3000/api/login', { username, password });
      setAlertMessage('Login successful!');
      const userId = response.data.userId
      localStorage.setItem('userId', userId);
      setAlertOpen(true);
      navigate('/manageSchedule');
    } catch (error) {
      setAlertMessage('Login failed. Please check your credentials.');
      setAlertOpen(true);
      console.error('Login error:', error);
    }
  };
  const handleCloseAlert = () => {
    setAlertOpen(false);
  };

  return (
    <Box
      sx={{
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
      }}
    >
      <Box
        sx={{
          width: SCREEN_WIDTH * 0.35,
          height: SCREEN_HEIGHT * 0.8,
          backgroundColor: "#0F0F0F",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{}}>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: 48,
              textTransform: "uppercase",
              color: "white",
            }}
          >
            Admin Login
          </Typography>
        </Box>
        <Box
          sx={{
            width: 500,
            backgroundColor: "#0000001A",
            marginTop: 8,
          }}
        >
          <FormControl fullWidth>
            <TextField
              label="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              InputLabelProps={{
                style: { color: "white" }, // Directly style the label
              }}
              sx={{
                backgroundColor: "#D9D9D91A",
                color: "white",
                "& .MuiInputBase-input": {
                  color: "white",
                },
                "& .MuiInputLabel-root": {
                  // This targets the label
                  color: "white", // Ensure the label is white
                },
                "& .Mui-focused": {
                  color: "white", // Ensure label remains white when focused
                },
              }}
            />
          </FormControl>
        </Box>
        <Box
          sx={{
            width: 500,
            backgroundColor: "#0000001A",
            marginTop: 5,
            boxShadow: "0px 4px 4px 0px #00000040",
          }}
        >
          <FormControl fullWidth>
            <TextField
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputLabelProps={{
                style: { color: "white" }, // Directly style the label
              }}
              sx={{
                backgroundColor: "#D9D9D91A",
                color: "white",
                "& .MuiInputBase-input": {
                  color: "white",
                },
                "& .MuiInputLabel-root": {
                  // This targets the label
                  color: "white", // Ensure the label is white
                },
                "& .Mui-focused": {
                  color: "white", // Ensure label remains white when focused
                },
              }}
            />
          </FormControl>
        </Box>
        <Box
          sx={{
            width: 350,
            height: 70,
            backgroundColor: "#FFFFFFCC",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 10,
            borderRadius: 4,
          }}
        >
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: 36,
              textTransform: "uppercase",
              color: "black",
            }}
            onClick={handleLogin}
            >
            Login
          </Typography>
        </Box>
        <Dialog
          open={alertOpen}
          onClose={handleCloseAlert}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Login Alert"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {alertMessage}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseAlert} color="primary" autoFocus>
              Ok
            </Button>
          </DialogActions>
        </Dialog>
        </Box>
    </Box>
  );
};

export default AdminLogin;
