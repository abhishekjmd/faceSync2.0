import React, { useState } from "react";
import { Box, Typography, TextField, FormControl, InputLabel, Select, MenuItem, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from "@mui/material";
import { SCREEN_WIDTH } from "../utils/Theme";
import logo from "../assets/logo.png";
import  WarningAmberIcon  from '@mui/icons-material/WarningAmber';

function AddStudent() {
  const [fullName, setFullName] = useState('');
  const [defaultUsername, setDefaultUsername] = useState('');
  const [enrollmentNumber, setEnrollmentNumber] = useState('');
  const [department, setDepartment] = useState('');
  const [course, setCourse] = useState('');
  const [rollNumber, setRollNumber] = useState('');
  const [division, setDivision] = useState('');
  const [semester, setSemester] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [defaultPassword, setDefaultPassword] = useState('');
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const handleInsert = () => {
    if (!fullName || !defaultUsername || !enrollmentNumber || !department || !course || !rollNumber || !division || !semester || !email || !phoneNumber || !defaultPassword) {
      setAlertMessage('All fields are required. Please fill out all fields before inserting.');
      setAlertOpen(true);
    } else {
      // Here, you would typically handle the insertion logic
      setAlertMessage('Student successfully added!');
      setAlertOpen(true);
    }
  };

  const handleCloseDialog = () => {
    setAlertOpen(false);
  };

  return (
    <Box
      sx={{
        width: SCREEN_WIDTH,
        height: 1600,
        backgroundColor: "black",
      }}
    >
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
          <img src={logo} style={{ height: 60, width: 40 }} />
          <Typography sx={{ color: "white", fontSize: 24, fontWeight: "400" }}>
            Manage Schedule
          </Typography>
          <Typography sx={{ color: "white", fontSize: 24, fontWeight: "400" }}>
            Manage Students
          </Typography>
          <Typography sx={{ color: "white", fontSize: 24, fontWeight: "400" }}>
            Manage Attendence
          </Typography>
        </Box>
        <Box >
          <Typography sx={{ color: "white", fontSize: 24, fontWeight: "400" }}>Logout</Typography>
        </Box>
      </Box>
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 5, flexDirection: 'column' }}>
        <Box sx={{ width: 1000, height: 1200, display: 'flex', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'column' }}>
          <Box sx={{ width: 400, height: 50, display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid white', marginTop: 5, borderRadius: 2, backgroundColor: '#D9D9D933' }}>
            <Typography sx={{ fontSize: 24, color: '#FFFFFF', }}>Add Student</Typography>
          </Box>
          <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 8 }}>
            <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <Box sx={{ width: 800, backgroundColor: '#D9D9D933', marginTop: 5, border: '1px solid white', }}>
                <FormControl fullWidth>
                  <TextField
                    label='Enter Student Full name'
                    name='rollNumber'
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
                  // value={email}
                  // onChange={(e) => setEmail(e.target.value)}
                  />
                </FormControl>
              </Box>

              <Box sx={{ width: 800, backgroundColor: '#D9D9D933', marginTop: 5, border: '1px solid white', }}>
                <FormControl fullWidth>
                  <TextField
                    label='Enter Student Default Username'
                    name='rollNumber'
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
                  // value={email}
                  // onChange={(e) => setEmail(e.target.value)}
                  />
                </FormControl>
              </Box>

              <Box sx={{ width: 800, backgroundColor: '#D9D9D933', marginTop: 5, border: '1px solid white', }}>
                <FormControl fullWidth>
                  <TextField
                    label='Enter Student Enrollment Number'
                    name='rollNumber'
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
                  // value={email}
                  // onChange={(e) => setEmail(e.target.value)}
                  />
                </FormControl>
              </Box>


              <Box sx={{ width: 800, backgroundColor: '#D9D9D933', marginTop: 5, border: '1px solid white', }}>
                <FormControl fullWidth>
                  <InputLabel>Select Student Department</InputLabel>
                  <Select
                    label='Select Student Department'
                    name='studentDepartment'
                  >
                    <MenuItem value="Computer Science">Computer Science</MenuItem>
                    <MenuItem value="Mathematics">Mathematics</MenuItem>
                    <MenuItem value="Economics">Economics</MenuItem>
                  </Select>
                </FormControl>
              </Box>

              <Box sx={{ width: 800, backgroundColor: '#D9D9D933', marginTop: 5, border: '1px solid white', }}>
                <FormControl fullWidth>
                  <InputLabel>Select Student Course</InputLabel>
                  <Select
                    label='Select Student Department'
                    name='studentDepartment'
                  >
                    <MenuItem value="Computer Science">Computer Science</MenuItem>
                    <MenuItem value="Mathematics">Mathematics</MenuItem>
                    <MenuItem value="Economics">Economics</MenuItem>
                  </Select>
                </FormControl>
              </Box>

              <Box sx={{ width: 800, backgroundColor: '#D9D9D933', marginTop: 5, border: '1px solid white', }}>
                <FormControl fullWidth>
                  <TextField
                    label='Enter Student Roll Number'
                    name='rollNumber'
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
                  value={rollNumber}
                  onChange={(e) => setRollNumber(e.target.value)}
                  />
                </FormControl>
              </Box>

              <Box sx={{ width: 800, backgroundColor: '#D9D9D933', marginTop: 5, border: '1px solid white', }}>
                <FormControl fullWidth>
                  <TextField
                    label='Enter Student Division'
                    name='division'
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
                  value={division}
                  onChange={(e) => setDivision(e.target.value)}
                  />
                </FormControl>
              </Box>

              <Box sx={{ width: 800, backgroundColor: '#D9D9D933', marginTop: 5, border: '1px solid white', }}>
                <FormControl fullWidth>
                  <TextField
                    label='Enter Student Semester'
                    name='semester'
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
                  value={semester}
                  onChange={(e) => setSemester(e.target.value)}
                  />
                </FormControl>
              </Box>

              <Box sx={{ width: 800, backgroundColor: '#D9D9D933', marginTop: 5, border: '1px solid white', }}>
                <FormControl fullWidth>
                  <TextField
                    label='Enter Student Email'
                    name='email'
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  />
                </FormControl>
              </Box>

              <Box sx={{ width: 800, backgroundColor: '#D9D9D933', marginTop: 5, border: '1px solid white', }}>
                <FormControl fullWidth>
                  <TextField
                    label='Enter Student Phone Number'
                    name='phoneNumber'
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
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </FormControl>
              </Box>

              <Box sx={{ width: 800, backgroundColor: '#D9D9D933', marginTop: 5, border: '1px solid white', }}>
                <FormControl fullWidth>
                  <TextField
                    label='Enter Student Default Password'
                    name='rollNumber'
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
                  value={defaultPassword}
                  onChange={(e) => setDefaultPassword(e.target.value)}
                  />
                </FormControl>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box onClick={handleInsert} sx={{ width: 400, height: 80, display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 5, borderRadius: 2, backgroundColor: 'white' }}>
          <Typography sx={{ fontSize: 32, fontWeight: '700', color: 'black', textTransform: 'uppercase' }}>insert</Typography>
        </Box>
      </Box>
      <Dialog open={alertOpen} onClose={handleCloseDialog}>
        <DialogTitle>
          {"Student Submission Status"}
        </DialogTitle>
        <DialogContent>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <WarningAmberIcon color="error" />
            <DialogContentText>
              {alertMessage}
            </DialogContentText>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>OK</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default AddStudent;
