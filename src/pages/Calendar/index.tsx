import React from 'react';
import {
  Box,
  Typography,
  Paper,
  Grid,
  List,
  ListItem,
  ListItemText,
  Chip,
} from '@mui/material';

const Calendar: React.FC = () => {
  const events = [
    {
      id: 1,
      title: 'Math Assignment Due',
      date: '2024-03-15',
      type: 'assignment',
    },
    {
      id: 2,
      title: 'Physics Lab',
      date: '2024-03-20',
      type: 'class',
    },
    // Add more events as needed
  ];

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Calendar
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 2, height: '600px' }}>
            {/* Calendar component would go here */}
            <Typography variant="h6" gutterBottom>
              March 2024
            </Typography>
            {/* Add calendar implementation */}
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Upcoming Events
            </Typography>
            <List>
              {events.map((event) => (
                <ListItem key={event.id}>
                  <ListItemText
                    primary={event.title}
                    secondary={event.date}
                  />
                  <Chip
                    label={event.type}
                    color={event.type === 'assignment' ? 'warning' : 'primary'}
                    size="small"
                  />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Calendar;
