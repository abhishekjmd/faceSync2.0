import { Box, FormControl, Link, TextField, Typography, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, } from "@mui/material";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../utils/Theme";
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const StudentsLogin = () => {
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
      navigate('/profileView', { state: { studentId: userId } });
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
          width: SCREEN_WIDTH * 0.4,
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
            login page
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
              label="Enter Password"
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputLabelProps={{ style: { color: 'white' } }}
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
            marginTop: 2,
            fontWeight: 700,
            fontSize: 20,
            display: "flex",
            justifyContent: "flex-start",
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
        <Button
          variant="contained"
          sx={{
            mt: 5, bgcolor: 'white', color: 'black', ':hover': { bgcolor: '#cccccc' }, width: 350,
            height: 70, fontWeight: 700,
            fontSize: 36,
            textTransform: "uppercase",
            color: "black",
          }}
          onClick={handleLogin}
        >
          Login
        </Button>
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

export default StudentsLogin;
