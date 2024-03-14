import { Box, FormControl, TextField, Typography, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { useState } from 'react';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const [alertOpen, setAlertOpen] = useState(false);
  const handleSendVerificationLink = () => {
    if (!email.trim()) {
      // Ideally, you should also validate the email format here
      alert("Please enter a valid email address.");
    } else {
      // Here, you would typically handle sending a verification link logic
      setAlertOpen(true);
    }
  };

  const handleCloseAlert = () => {
    setAlertOpen(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
        height: "100vh", // Use the full viewport height
        width: "100vw", // Use the full viewport width
      }}
    >
      <Box
        sx={{
          backgroundColor: "#0F0F0F",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          p: 4, // Add some padding around the box
        }}
      >
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: "1.5rem", // Adjust font size to be responsive
            color: "white",
          }}
        >
          Please Enter Your Email Address
        </Typography>
        <FormControl fullWidth sx={{ mt: 2, width: "100%" }}>
          <TextField
            label="Email Address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            InputLabelProps={{
              style: { color: "white" },
            }}
            sx={{
              input: { color: "white" },
              "& .MuiInputLabel-root": { color: "white" },
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "white" },
                "&:hover fieldset": { borderColor: "white" },
                "&.Mui-focused fieldset": { borderColor: "white" },
              },
            }}
          />
        </FormControl>
        <Button
          variant="contained"
          sx={{
            mt: 3, bgcolor: 'white', color: 'black', ':hover': { bgcolor: '#cccccc' },
            fontWeight: 700,
            textTransform: "none", // Keep the text as is
          }}
          onClick={handleSendVerificationLink}
        >
          Send Verification Link
        </Button>
        <Dialog
          open={alertOpen}
          onClose={handleCloseAlert}
        >
          <DialogTitle>{"Verification Link Sent"}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              A verification link has been sent to your email address. Please check your inbox to proceed.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseAlert}>OK</Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Box>
  );
};

export default ForgetPassword;
