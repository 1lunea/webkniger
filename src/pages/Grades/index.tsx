import React from 'react';
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  LinearProgress,
} from '@mui/material';

const Grades: React.FC = () => {
  const courses = [
    {
      id: 1,
      name: 'Mathematics 101',
      assignments: [
        { name: 'Assignment 1', grade: 85, maxGrade: 100 },
        { name: 'Midterm', grade: 90, maxGrade: 100 },
      ],
    },
    {
      id: 2,
      name: 'Physics 201',
      assignments: [
        { name: 'Lab Report 1', grade: 95, maxGrade: 100 },
        { name: 'Quiz 1', grade: 88, maxGrade: 100 },
      ],
    },
    // Add more courses as needed
  ];

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Grades
      </Typography>
      {courses.map((course) => (
        <Paper key={course.id} sx={{ p: 2, mb: 2 }}>
          <Typography variant="h6" gutterBottom>
            {course.name}
          </Typography>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Assignment</TableCell>
                  <TableCell>Grade</TableCell>
                  <TableCell>Progress</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {course.assignments.map((assignment, index) => (
                  <TableRow key={index}>
                    <TableCell>{assignment.name}</TableCell>
                    <TableCell>
                      {assignment.grade}/{assignment.maxGrade}
                    </TableCell>
                    <TableCell>
                      <LinearProgress
                        variant="determinate"
                        value={(assignment.grade / assignment.maxGrade) * 100}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      ))}
    </Box>
  );
};

export default Grades;
