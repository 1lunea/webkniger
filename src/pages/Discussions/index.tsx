import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Avatar,
  Stack,
} from '@mui/material';

const Discussions: React.FC = () => {
  const discussions = [
    {
      id: 1,
      title: 'Question about Assignment 1',
      course: 'Mathematics 101',
      author: 'John Doe',
      lastActivity: '2 hours ago',
      replies: 5,
    },
    {
      id: 2,
      title: 'Lab Report Discussion',
      course: 'Physics 201',
      author: 'Jane Smith',
      lastActivity: '1 day ago',
      replies: 3,
    },
    // Add more discussions as needed
  ];

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Discussions
      </Typography>
      <Stack spacing={2}>
        {discussions.map((discussion) => (
          <Card key={discussion.id}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <Avatar sx={{ mr: 2 }}>{discussion.author[0]}</Avatar>
                <Box>
                  <Typography variant="h6">{discussion.title}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {discussion.course} • Posted by {discussion.author}
                  </Typography>
                </Box>
              </Box>
              <Typography variant="body2" color="text.secondary">
                Last activity: {discussion.lastActivity} • {discussion.replies} replies
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">View Discussion</Button>
              <Button size="small">Reply</Button>
            </CardActions>
          </Card>
        ))}
      </Stack>
    </Box>
  );
};

export default Discussions;
