import React from 'react';
import {
  Button,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
} from '@mui/material';
import { styled } from '@mui/system';

const StyledButton = styled(Button)({
  backgroundColor: '#FFC107',
  color: '#fff',
  fontSize: '1rem',
  padding: '10px 20px',
  '&:hover': {
    backgroundColor: '#FFA000',
  },
});

const scheduleData = [
  { time: '10:00am - 12:00pm', class: 'Rope Skipping', type: 'Indoor', price: '$25' },
  { time: '12:00pm - 2:00pm', class: 'Intensity', type: 'BW Training', price: '$25' },
  { time: '2:00pm - 5:00pm', class: 'Yoga', type: 'On the Beach', price: '$25' },
];

const ScheduleTable = () => {
  return (
    <Box
      sx={{
        maxWidth: '800px',
        margin: 'auto',
        padding: '30px',
        textAlign: 'center',
        backgroundColor: '#f5f5f5',
        borderRadius: '10px',
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Box sx={{ marginBottom: '30px' }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', fontSize: '2rem', color: '#333' }}>
          Price & Schedule
        </Typography>
        <Typography variant="body1" color="textSecondary" sx={{ fontSize: '1.2rem' }}>
          Find the perfect class for you and join us today!
        </Typography>
      </Box>

      <TableContainer component={Paper} sx={{ borderRadius: '10px' }}>
        <Table sx={{ minWidth: 650 }} aria-label="schedule table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold', fontSize: '1.1rem', color: '#555' }}>Time</TableCell>
              <TableCell sx={{ fontWeight: 'bold', fontSize: '1.1rem', color: '#555' }}>Class</TableCell>
              <TableCell sx={{ fontWeight: 'bold', fontSize: '1.1rem', color: '#555' }}>Price</TableCell>
              <TableCell sx={{ fontWeight: 'bold', fontSize: '1.1rem', color: '#555', textAlign: 'center' }}>Join Now</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {scheduleData.map((row, index) => (
              <TableRow key={index} hover>
                <TableCell sx={{ fontSize: '1rem', color: '#333' }}>{row.time}</TableCell>
                <TableCell>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold', fontSize: '1rem', color: '#333' }}>
                    {row.class}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" sx={{ fontSize: '0.9rem' }}>
                    {row.type}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle1" sx={{ fontSize: '1rem', color: '#333' }}>{row.price}</Typography>
                  <Typography variant="body2" color="textSecondary" sx={{ fontSize: '0.9rem' }}>Monthly</Typography>
                </TableCell>
                <TableCell align="center">
                  <StyledButton variant="contained">Join Now</StyledButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ScheduleTable;
