import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';

const Courses: React.FC = () => {
  const courses = [
    {
      id: 1,
      title: 'Mathematics 101',
      description: 'Introduction to basic mathematics',
      image: 'https://source.unsplash.com/random/300x200?math',
      instructor: 'Dr. Smith',
    },
    {
      id: 2,
      title: 'Physics 201',
      description: 'Advanced physics concepts',
      image: 'https://source.unsplash.com/random/300x200?physics',
      instructor: 'Prof. Johnson',
    },
    // Add more courses as needed
  ];

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        My Courses
      </Typography>
      <Grid container spacing={3}>
        {courses.map((course) => (
          <Grid item xs={12} sm={6} md={4} key={course.id}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={course.image}
                alt={course.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {course.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {course.description}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  Instructor: {course.instructor}
                </Typography>
                <Button variant="contained" sx={{ mt: 2 }}>
                  Enter Course
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Courses;
