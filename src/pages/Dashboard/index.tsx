import React from 'react';
import { Grid, Paper, Typography, Box } from '@mui/material';
import { useAuth } from '../../context/AuthContext';

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Welcome back, {user?.name}!
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={4}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Upcoming Assignments</Typography>
            {/* TODO: Add upcoming assignments list */}
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Recent Courses</Typography>
            {/* TODO: Add recent courses list */}
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Announcements</Typography>
            {/* TODO: Add announcements list */}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
