import React, { useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  AppBar,
  Toolbar,
  Button,
  Paper,
  Container,
  Collapse,
} from "@mui/material";
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';


function YearSelection() {
  const location = useLocation();
  const course = location.state?.course; // Safely access the course object
  const [openYear, setOpenYear] = useState('');
  const navigate = useNavigate();

  const handleClick = (year) => {
    setOpenYear(openYear === year ? '' : year); // Toggle the open state
  };

  const handleLogin = () => {
    navigate(`/login`);
  };


  if (!course) {
    return (
      <Box sx={{ p: 3, color: "white", backgroundColor: "black" }}>
        <Typography variant="h6">Course not found.</Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: "black",
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <AppBar position="static" sx={{ backgroundColor: 'black' }}>
        <Toolbar>
          <Button color="inherit">Home</Button>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
            Course Details
          </Typography>
          <Button color="inherit" onClick={() => handleLogin()}>Login</Button>
        </Toolbar>
      </AppBar>
      <Container sx={{ py: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'white' }}>
        <Typography variant="h4" gutterBottom sx={{ textTransform: "uppercase", textAlign: 'center' }}>
          {course.name}
        </Typography>
        <Paper elevation={3} sx={{ width: '100%', p: 2, backgroundColor: "white", marginTop: 10 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Available Years
          </Typography>
          <List>
            {course.years.map((year) => (
              <React.Fragment key={year}>
                <ListItem button onClick={() => handleClick(year)} sx={{ pl: 0 }}>
                  <ListItemText primary={year} />
                  {openYear === year ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={openYear === year} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {course.subjects.find(s => s.year === year)?.subjects.map((subject, index) => (
                      <ListItem key={index} sx={{ pl: 4 }}>
                        <ListItemText primary={subject} />
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              </React.Fragment>
            ))}
          </List>
        </Paper>
      </Container>
    </Box>
  );
}

export default YearSelection;
