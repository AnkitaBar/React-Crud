import React, { useEffect } from 'react';
import { Grid, Card, CardContent, Typography, Box, Container } from '@mui/material';
import WifiIcon from '@mui/icons-material/Wifi';
import SpaIcon from '@mui/icons-material/Spa';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS styles

const Amenities = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with animation duration of 1 second
  }, []);

  return (
    <Box sx={{ backgroundColor: '#e3a122', padding: '200px 0' }}>
      <Container maxWidth="md">
        <Typography variant="h4" align="center" gutterBottom>
          Amenities
        </Typography>
        <Typography variant="body1" align="center" paragraph>
          There are many variations of passages of Lorem Ipsum available, but the majority
        </Typography>

        <Grid container spacing={3} justifyContent="center">
          {/* Steam Bath Card */}
          <Grid item xs={12} sm={6} md={4}>
            <Card
              data-aos="fade-up" // AOS animation for the card
              sx={{ padding: '20px', textAlign: 'center' }}
            >
              <SpaIcon sx={{ fontSize: 50, color: '#e3a122' }} />
              <CardContent>
                <Typography variant="h6">Steam Bath</Typography>
                <Typography variant="body2" color="textSecondary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Wi-Fi Card */}
          <Grid item xs={12} sm={6} md={4}>
            <Card
              data-aos="fade-up" // AOS animation for the card
              sx={{ padding: '20px', textAlign: 'center' }}
            >
              <WifiIcon sx={{ fontSize: 50, color: '#e3a122' }} />
              <CardContent>
                <Typography variant="h6">Wi-Fi</Typography>
                <Typography variant="body2" color="textSecondary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Air Conditioned Card */}
          <Grid item xs={12} sm={6} md={4}>
            <Card
              data-aos="fade-up" // AOS animation for the card
              sx={{ padding: '20px', textAlign: 'center' }}
            >
              <AcUnitIcon sx={{ fontSize: 50, color: '#e3a122' }} />
              <CardContent>
                <Typography variant="h6">Air Conditioned</Typography>
                <Typography variant="body2" color="textSecondary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Amenities;
