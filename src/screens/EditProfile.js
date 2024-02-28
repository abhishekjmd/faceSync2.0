import React, { useState } from "react";
import { Box, Typography, Menu, MenuItem, IconButton,TextField, FormControl } from "@mui/material";
import { SCREEN_WIDTH } from "../utils/Theme";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import logo from "../assets/logo.png";

function EditProfile() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
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
            <Typography sx={{ color: "white", marginTop: 1 }}>
              Edit image
            </Typography>
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
            width: 420,
            height: 600,
            backgroundColor: "#D9D9D91A",
            marginTop: 6,
            display: "flex",
            alignItems: "flex-start",
						justifyContent:"flex-start",
						
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
            <Typography sx={{ fontSize: 20, color: "white" }}>
              Email Address:
            </Typography>
            <Box sx={{ width: 250 }}>
              <FormControl fullWidth>
                <TextField
                  sx={{
                    backgroundColor: "#D9D9D9",
                  }}
                  label="Enter Your Email Address"
                  name="email"
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
            <Typography sx={{ fontSize: 20, color: "white" }}>
              Address:
            </Typography>
            <Box sx={{ width: 250 }}>
              <FormControl fullWidth>
                <TextField
                  sx={{
                    backgroundColor: "#D9D9D9",
                  }}
                  label="E	nter Your Address"
                  name="address"
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
            <Typography sx={{ fontSize: 20, color: "white" }}>
              Area Pincode:
            </Typography>
            <Box sx={{ width: 250 }}>
              <FormControl fullWidth>
                <TextField
                  sx={{
                    backgroundColor: "#D9D9D9",
                  }}
                  label="Enter Your Area Pincode"
                  name="pincode"
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
            <Typography sx={{ fontSize: 20, color: "white" }}>
              Hobbies & interests:
            </Typography>
            <Box sx={{ width: 250 }}>
              <FormControl fullWidth>
                <TextField
                  sx={{
                    backgroundColor: "#D9D9D9",
                  }}
                  label="Enter Your hobbies"
                  name="hobbies"
                />
              </FormControl>
            </Box>
          </Box>
          <Box
            sx={{
              width: 250,
              marginTop: 5,
              backgroundColor: "#D9D9D9",
              height: 60,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 10,
							marginLeft:10
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
        </Box>
      </Box>
    </Box>
  );
}

export default EditProfile;
