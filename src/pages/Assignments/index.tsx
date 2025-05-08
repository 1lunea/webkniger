import React from 'react';
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Chip,
} from '@mui/material';
import { Download as DownloadIcon, Upload as UploadIcon } from '@mui/icons-material';

const Assignments: React.FC = () => {
  const assignments = [
    {
      id: 1,
      title: 'Math Assignment 1',
      course: 'Mathematics 101',
      dueDate: '2024-03-15',
      status: 'pending',
    },
    {
      id: 2,
      title: 'Physics Lab Report',
      course: 'Physics 201',
      dueDate: '2024-03-20',
      status: 'submitted',
    },
    // Add more assignments as needed
  ];

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Assignments
      </Typography>
      <List>
        {assignments.map((assignment) => (
          <ListItem key={assignment.id} divider>
            <ListItemText
              primary={assignment.title}
              secondary={`${assignment.course} - Due: ${assignment.dueDate}`}
            />
            <ListItemSecondaryAction>
              <Chip
                label={assignment.status}
                color={assignment.status === 'submitted' ? 'success' : 'warning'}
                sx={{ mr: 1 }}
              />
              <IconButton edge="end" aria-label="download">
                <DownloadIcon />
              </IconButton>
              <IconButton edge="end" aria-label="upload">
                <UploadIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Assignments;
