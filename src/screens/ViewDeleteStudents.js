import React, { useState } from "react";
import { Box, Typography, TextField, InputAdornment, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../utils/Theme";
import SearchIcon from "@mui/icons-material/Search";
import logo from "../assets/logo.png";

function ViewDeleteStudents() {
  const [students, setStudents] = useState([
    { id: 1, enrollmentId: "202100319010028", fullName: "Suman Kushwaha", course: "BCA", semester: "VI" },
    { id: 2, enrollmentId: "202100319010029", fullName: "Amit Singh", course: "BCA", semester: "VI" },
    { id: 3, enrollmentId: "202100319010030", fullName: "Riya Patel", course: "BCA", semester: "VI" },
    { id: 4, enrollmentId: "202100319010031", fullName: "John Doe", course: "BCA", semester: "VI" },
    { id: 5, enrollmentId: "202100319010032", fullName: "Jane Doe", course: "BCA", semester: "VI" },
  ]);
  const [openDialog, setOpenDialog] = useState(false);
  const [deleteStudentId, setDeleteStudentId] = useState(null);

  const handleClickOpenDialog = (id) => {
    setOpenDialog(true);
    setDeleteStudentId(id);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleDeleteStudent = () => {
    setStudents(students.filter(student => student.id !== deleteStudentId));
    handleCloseDialog();
    // Here you would also show a success message or perform other actions as needed
  };

  return (
    <Box
      sx={{
        width: SCREEN_WIDTH,
        height: 1000,
        backgroundColor: "black",
      }}
    >

      {/* Header */}
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
          <img src={logo} style={{ height: 60, width: 40 }} alt="logo" />
          <Typography sx={{ color: "white", fontSize: 24, fontWeight: "400" }}>
            Manage Schedule
          </Typography>
          <Typography sx={{ color: "white", fontSize: 24, fontWeight: "400" }}>
            Manage Students
          </Typography>
          <Typography sx={{ color: "white", fontSize: 24, fontWeight: "400" }}>
            Manage Attendance
          </Typography>
        </Box>
        <Box >
          <Typography sx={{ color: "white", fontSize: 24, fontWeight: "400" }}>Logout</Typography>
        </Box>
      </Box>

      {/* Search bar */}
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
            edit student profile
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
      </Box>

      {/* Header Row */}
      <Box sx={{
        width: SCREEN_WIDTH,
        borderBottom: "1px solid #FFFFFF21",
        height: 80,
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}>
        <Typography sx={{ fontSize: 24, color: 'white', width: '14%' }}>Enrollment ID</Typography>
        <Typography sx={{ fontSize: 24, color: 'white', width: '20%' }}>Full Name</Typography>
        <Typography sx={{ fontSize: 24, color: 'white', width: '20%' }}>Course</Typography>
        <Typography sx={{ fontSize: 24, color: 'white', width: '14%' }}>Semester</Typography>
        <Typography sx={{ fontSize: 24, color: 'white', width: '20%' }}></Typography>
      </Box>

      {/* Data Row */}
      {students.map((student) => (
        <Box sx={{
          width: SCREEN_WIDTH,
          borderBottom: "1px solid #FFFFFF21",
          height: 80,
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}>
          <Typography sx={{ fontSize: 24, color: 'white', width: '14%' }}>{student.enrollmentId}</Typography>
          <Typography sx={{ fontSize: 24, color: 'white', width: '20%' }}>{student.fullName}</Typography>
          <Typography sx={{ fontSize: 24, color: 'white', width: '14%' }}>{student.course}</Typography>
          <Typography sx={{ fontSize: 24, color: 'white', width: '20%' }}>{student.semester}</Typography>
          {/* Delete Button */}
          <Box onClick={() => handleClickOpenDialog(student.id)} sx={{ width: '5.5%', height: 50, backgroundColor: 'white', borderRadius: 4, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Typography sx={{ fontSize: 24, color: 'black' }}>Delete</Typography>
          </Box>
          {/* View Button */}
          <Box sx={{ width: '5.5%', height: 50, backgroundColor: 'white', borderRadius: 4, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Typography sx={{ fontSize: 24, color: 'black' }}>View</Typography>
          </Box>
        </Box>
      ))}
      {/* Delete Confirmation Dialog */}
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Confirm Delete"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this student profile?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={handleDeleteStudent} autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>

    </Box>
  );
}

export default ViewDeleteStudents;
