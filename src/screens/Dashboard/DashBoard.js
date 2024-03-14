import React, { useState,useEffect } from "react";
import { Box, Typography, TextField, InputAdornment } from "@mui/material";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../utils/Theme";
import logo from "../../assets/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import axios from 'axios';


function DashBoard() {
  // State to handle search input
  const [searchInput, setSearchInput] = useState('');
  const [events, setEvents] = useState([]);
  const [sorted, setSorted] = useState(false);
  
  useEffect(() => {
    const fetchEventsAndAnnouncements = async () => {
      try {
        const response = await axios.get('http://192.168.155.237:3000/api/events-announcements');
        setEvents(response.data);
      } catch (error) {
        console.error("Error fetching events and announcements:", error);
      }
    };
    fetchEventsAndAnnouncements();
  }, []);

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSortByDate = () => {
    const sortedEvents = [...events].sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return sorted ? dateB - dateA : dateA - dateB; // Toggle sorting direction
    });
    setEvents(sortedEvents);
    setSorted(!sorted); // Toggle sorted state
  };

  const filteredEvents = events.filter(event =>
    event.title.toLowerCase().includes(searchInput.toLowerCase())
  );

    
  return (
    <Box
      sx={{
        width: SCREEN_WIDTH,
        // height: SCREEN_HEIGHT,
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
        <Box
          sx={{
            marginLeft: 90,
            width: 50,
            height: 50,
            borderRadius: 30,
            backgroundColor: "#D9D9D9",
          }}
        >
        </Box>
      </Box>
      <Box
        sx={{
          width: SCREEN_WIDTH,
          // height: 500,
        }}
      >
        <Box
          sx={{
            width: SCREEN_WIDTH,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
            marginBottom: 10,
          }}
        >
          <Box
            sx={{
              width: 400,
              height: 60,
              border: "2px solid #FFFFFF",
              backgroundColor: "#D9D9D91A",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 4,
            }}
          >
            <Typography
              sx={{ fontSize: 24, color: "white", textTransform: "uppercase" }}
            >
              Mark Attendence
            </Typography>
          </Box>
          <Box
            sx={{
              width: 400,
              height: 60,
              border: "2px solid #FFFFFF",
              backgroundColor: "#D9D9D91A",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 4,
            }}
            onClick={handleSortByDate}
            >
            <Typography
              sx={{ fontSize: 24, color: "white", textTransform: "uppercase" }}
            >
              train data
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: SCREEN_WIDTH,
            border: "1px solid #FFFFFF66",
            height: 80,
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography sx={{ fontSize: 24, color: "white" }}>
              Events & Announcements
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
              placeholder="Search by activity type or name"
              value={searchInput}
              onChange={handleSearchChange}
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
          <Box
            sx={{
              width: 170,
              height: 60,
              borderRadius: 4,
              backgroundColor: "#D9D9D9",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography sx={{ fontSize: 24, color: "black" }}>
              Sort by dates
            </Typography>
          </Box>

        </Box>
        {filteredEvents.map((item, index) => (
          <Box
            sx={{
              width: SCREEN_WIDTH,
              // height: 90,
              display: "flex",
              backgroundColor: "#D9D9D94D",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              paddingLeft: 13,
              marginTop: 5,
              marginBottom: 1,
            }}
          >
            <Typography sx={{ fontSize: 24, fontWeight: "700", color: "white" }}>
              {new Date(item.date).toLocaleDateString()}
            </Typography>
            <Typography sx={{ fontSize: 24, color: "white" }}>
              {item.title}
            </Typography>
            <Typography sx={{ fontSize: 24, color: "white" }}>
              {item.details}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default DashBoard;
