import React, { useEffect } from 'react';
import { Grid, Typography, Box } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';  // Import AOS styles

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <Box sx={{ padding: { xs: '2rem', md: '4rem' }, backgroundColor: '#f9f9f9' }} >
      <Grid container spacing={4} alignItems="center">
        {/* About Us Section */}
        <Grid item xs={12} md={6} data-aos="fade-right">
          <Box
            component="img"
            src="https://www.pngitem.com/pimgs/m/553-5532346_grocery-png-clipart-grocery-products-images-png-transparent.png"
            alt="About us"
            sx={{
              width: { xs: '80%', sm: '60%', md: '50%' }, // Responsive sizing
              borderRadius: '10px',
              display: 'block',
              margin: '0 auto', // Centering the image
            }}
          />
        </Grid>
        <Grid item xs={12} md={6} data-aos="fade-left">
          <Typography variant="h4" component="h2" gutterBottom>
            About Us
          </Typography>
          <Typography variant="body1">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius eligendi fugiat!
          </Typography>
        </Grid>

        {/* Professional Team Section */}
        <Grid item xs={12} md={6} data-aos="fade-right">
          <Typography variant="h4" component="h2" gutterBottom>
            Professional Team
          </Typography>
          <Typography variant="body1">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius eligendi fugiat!
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} data-aos="fade-left">
          <Box
            component="img"
            src="https://burst.shopifycdn.com/photos/photography-product-download.jpg?width=1000&format=pjpg&exif=0&iptc=0"
            sx={{
              width: { xs: '80%', sm: '60%', md: '50%' }, // Responsive sizing
              borderRadius: '10px',
              display: 'block',
              margin: '0 auto', // Centering the image
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
