import React from "react";
import {
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import logo from "../assets/logo.png";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../utils/Theme";

function YearSelection() {
  return (
    <Box
      sx={{
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
        backgroundColor: "black",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: 80,
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          borderBottom: "1px solid #FFFFFF21",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 15 }}>
          <img src={logo} style={{ height: 60, width: 40 }} />
          <Typography sx={{ color: "white", fontSize: 24, fontWeight: "400" }}>
            Home
          </Typography>
        </Box>
        <Box sx={{ marginLeft: 90 }}>
          <Typography sx={{ color: "white", fontSize: 24, fontWeight: "400" }}>
            Login
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: 500,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box>
          <Typography
            sx={{ fontSize: 25, color: "white", textTransform: "uppercase" }}
          >
            Courses/bca
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{ fontSize: 40, color: "white", textTransform: "uppercase" }}
          >
            bca
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          width: SCREEN_WIDTH,
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <List style={{ color: "white" }}>
          <ListItem
            sx={{
              color: "white",
              textDecorationStyle: "dashed",
              textTransform: "uppercase",
            }}
          >
            <ListItemText primary="• fybca" />
          </ListItem>
          <ListItem
            sx={{
              color: "white",
              textDecorationStyle: "dashed",
              textTransform: "uppercase",
            }}
          >
            <ListItemText primary=" • sybca" />
          </ListItem>
          <ListItem
            sx={{
              color: "white",
              textDecorationStyle: "dashed",
              textTransform: "uppercase",
            }}
          >
            <ListItemText primary="• tybca" />
          </ListItem>
          {/* Add more items as needed */}
        </List>
      </Box>
    </Box>
  );
}

export default YearSelection;
