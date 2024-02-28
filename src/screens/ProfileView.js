import React, { useState } from "react";
import { Box, Typography, Menu, MenuItem, IconButton } from "@mui/material";
import { SCREEN_WIDTH } from "../utils/Theme";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import logo from "../assets/logo.png";

function ProfileView() {
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
            stundent University Details:
          </Typography>
          <Typography sx={{ fontSize: 24, color: "white", marginTop: 4 }}>
            Full Name:
          </Typography>{" "}
          <Typography sx={{ fontSize: 24, color: "white" }}>
            Suman Kushwaha
          </Typography>{" "}
          <Typography sx={{ fontSize: 24, color: "white", marginTop: 4 }}>
            Department
          </Typography>{" "}
          <Typography sx={{ fontSize: 24, color: "white" }}>
            Faculty of Computer Applications and Information Technology
          </Typography>{" "}
          <Typography sx={{ fontSize: 24, color: "white", marginTop: 4 }}>
            Enrollment Number:
          </Typography>{" "}
          <Typography sx={{ fontSize: 24, color: "white" }}>
            202100319010028
          </Typography>{" "}
          <Typography sx={{ fontSize: 24, color: "white", marginTop: 4 }}>
            Course:
          </Typography>{" "}
          <Typography sx={{ fontSize: 24, color: "white" }}>BCA</Typography>{" "}
          <Typography sx={{ fontSize: 24, color: "white", marginTop: 4 }}>
            Roll Number:
          </Typography>{" "}
          <Typography sx={{ fontSize: 24, color: "white" }}>A30</Typography>{" "}
          <Typography sx={{ fontSize: 24, color: "white", marginTop: 4 }}>
            Email:
          </Typography>{" "}
          <Typography sx={{ fontSize: 24, color: "white" }}>
            Kushwahasuman447@gmail.com
          </Typography>{" "}
          <Typography sx={{ fontSize: 24, color: "white", marginTop: 4 }}>
            Phone Number:
          </Typography>{" "}
          <Typography sx={{ fontSize: 24, color: "white" }}>
            9265128428
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
            Stundent Personal Details:
          </Typography>
          <Typography sx={{ fontSize: 24, color: "white", marginTop: 4 }}>
            Gender:
          </Typography>{" "}
          <Typography sx={{ fontSize: 24, color: "white" }}>Female</Typography>{" "}
          <Typography sx={{ fontSize: 24, color: "white", marginTop: 4 }}>
            Address
          </Typography>{" "}
          <Typography sx={{ fontSize: 24, color: "white" }}>
            kalol,gandhinagar
          </Typography>{" "}
          <Typography sx={{ fontSize: 24, color: "white", marginTop: 4 }}>
            Area Pincode:
          </Typography>{" "}
          <Typography sx={{ fontSize: 24, color: "white" }}>382651</Typography>{" "}
          <Typography sx={{ fontSize: 24, color: "white", marginTop: 4 }}>
            Hobbies and interests:
          </Typography>{" "}
          <Typography sx={{ fontSize: 24, color: "white" }}>
            reading,dancing
          </Typography>{" "}
        </Box>
      </Box>
    </Box>
  );
}

export default ProfileView;
