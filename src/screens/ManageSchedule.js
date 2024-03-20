import React, { useState, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import { SCREEN_WIDTH } from "../utils/Theme";
import logo from "../assets/logo.png";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function ManageSchedule() {
  const navigate = useNavigate();
  const [classSchedules, setClassSchedules] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchInput, setSearchInput] = useState('');
  const [events, setEvents] = useState([]);

  const handleNavigate = (path) => {
    navigate(path);
  };

  useEffect(() => {
    // Replace 'http://localhost:3000/api/schedules' with your actual API URL
    const fetchClassSchedules = async () => {
      try {
        const response = await axios.get("http://192.168.155.237:3000/api/class-schedules");
        setClassSchedules(response.data);
      } catch (error) {
        console.error("Failed to fetch class schedules", error);
      }
    };

    fetchClassSchedules();
  }, []);

  const filteredSchedules = classSchedules.filter(schedule =>
    schedule.subject.toLowerCase().includes(searchQuery.toLowerCase())
  );


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

  const filteredEvents = events.filter(event =>
    (event.title?.toLowerCase() || "").includes(searchInput.toLowerCase())
  );

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
          justifyContent: 'space-evenly',
          alignItems: "center",
          borderBottom: "1px solid #FFFFFF21",
          marginBottom: 10,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 5 }}>
          <img src={logo} style={{ height: 60, width: 40 }} />
          <Button onClick={() => handleNavigate('/manageSchedule')} sx={{ color: "white", fontSize: 24, fontWeight: "400", textTransform: "none" }}>Manage Schedule</Button>
          <Button onClick={() => handleNavigate('/manageStudentsProfile')} sx={{ color: "white", fontSize: 24, fontWeight: "400", textTransform: "none" }}>Manage Students</Button>
          <Button onClick={() => handleNavigate('/manageAttendence')} sx={{ color: "white", fontSize: 24, fontWeight: "400", textTransform: "none" }}>Manage Attendence</Button>
        </Box>
        <Box onClick={() => handleNavigate('/adminLogin')}>
          <Typography sx={{ color: "white", fontSize: 24, fontWeight: "400" }}>Logout</Typography>
        </Box>
      </Box>
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 5 }}>
        <Box sx={{ width: 480, backgroundColor: '#D9D9D91A', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'column' }}>
          <Box sx={{ width: 400, height: 40, display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid white', marginTop: 5, borderRadius: 2, backgroundColor: '#D9D9D91A' }}
            onClick={() => handleNavigate('/addSession')}>
            <Typography sx={{ fontSize: 24, color: '#FFFFFF' }}>Add Session</Typography>
          </Box>
          <Box sx={{ width: '100%', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', marginTop: 1 }}>
            <Typography sx={{ fontSize: 20, fontWeight: '700', color: 'white', padding: 4 }}>Recent Sessions</Typography>
          </Box>
          {filteredSchedules.map((schedule, index) => (
            <Box sx={{ width: '100%', height: 70, display: 'flex', justifyContent: 'flex-start', alignItems: 'center', border: '1px solid #FFFFFF21' }}>
              <Typography sx={{ fontSize: 18, fontWeight: '700', color: 'white', padding: 2 }}>
                {(schedule.date)} {"  "}  {schedule.subject}
              </Typography>
            </Box>
          ))}
          <Box sx={{ width: '100%', height: 70, display: 'flex', justifyContent: 'flex-start', alignItems: 'center', border: '1px solid #FFFFFF21' }}>
          </Box>
        </Box>

        <Box sx={{ width: 480, backgroundColor: '#D9D9D91A', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'column' }}
          onClick={() => handleNavigate('/addEventsAndAnnouncements')}
        >
          <Box sx={{ width: 420, height: 40, display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid white', marginTop: 5, borderRadius: 2, backgroundColor: '#D9D9D91A' }}>
            <Typography sx={{ fontSize: 20, color: '#FFFFFF', textTransform: 'uppercase' }} >Add Events and announcements</Typography>
          </Box>
          <Box sx={{ width: '100%', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', marginTop: 1 }}>
            <Typography sx={{ fontSize: 20, fontWeight: '700', color: 'white', padding: 4, textTransform: 'capitalize' }}>Recent Events & announcements</Typography>
          </Box>
          {filteredEvents.map((item, index) => (
            <Box sx={{ width: '100%', height: 120, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', border: '1px solid #FFFFFF21' }}>
              <Typography sx={{ fontSize: 18, fontWeight: '700', color: 'white', padding: 2 }}>{new Date(item.date).toLocaleDateString()}</Typography>
              <Typography sx={{ fontSize: 18, fontWeight: '700', color: 'white', padding: 2 }}>{item.title}</Typography>
            </Box>
          ))}
          <Box sx={{ width: '100%', height: 70, display: 'flex', justifyContent: 'flex-start', alignItems: 'center', border: '1px solid #FFFFFF21' }}>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ManageSchedule;
