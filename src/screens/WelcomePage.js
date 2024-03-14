import React, { useEffect, useState } from 'react';
import {
  Typography,
  AppBar,
  Toolbar,
  Button,
  Container,
  List,
  ListItem,
  ListItemText,
  CssBaseline,
  Box,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';


const WelcomePage = () => {

  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchCourses = async () => {

      try {
        const response = await fetch('http://192.168.155.237:3000/api/courses');
        if (response.ok) {
          const data = await response.json();
          setCourses(data);
        } else {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
  }, []);

  const handleCourseClick = (course) => {
    // Navigate to the year selection page with courseId as a parameter
    navigate(`/yearSelection`, { state: { course } });
  };

  const handleLogin = () => {
    navigate(`/login`);
  };

  return (
    <>
      <CssBaseline />
      <AppBar position="static" sx={{ backgroundColor: 'black' }}>
        <Toolbar>
          <Button color="inherit">Home</Button>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
            {/* This is intentionally left empty to center the title */}
          </Typography>
          <Button color="inherit" onClick={() => handleLogin()}>Login</Button>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: 'calc(100vh - 64px)', // subtract the AppBar height
          backgroundColor: 'black',
          color: 'white'
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="h2" component="h1" gutterBottom>
            GLS University
          </Typography>
          <Typography variant="h4" gutterBottom>
            Courses Categories
          </Typography>
          <List sx={{ marginLeft: 25 }}>
            {courses.map((course) => (
              <ListItem key={course._id} onClick={() => handleCourseClick(course)}>
                <ListItemText primary={course.name} />
              </ListItem>
            ))}
          </List>
        </Container>
      </Box>
    </>
  );
};

export default WelcomePage;
