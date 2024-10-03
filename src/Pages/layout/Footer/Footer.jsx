import React from 'react';
import { Box, Container, Grid, Link, IconButton, Toolbar, Typography } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        background: 'linear-gradient(to right, #3f51b5, #1a237e)',
        color: 'white',
        paddingTop: 2,
        paddingBottom: 2,
      }}
    >
      <Container maxWidth="md">
        <Grid container spacing={4} alignItems="center" justifyContent="space-between">
          {/* Pages Links */}
          <Grid item xs={12} md={3} justifyContent="center" className="footer-links">
            <Link href="/" color="inherit" sx={{ marginRight: 3, textDecoration: 'none', '&:hover': { textDecoration: 'none', color: '#1a237e' } }}>
              Home
            </Link>
            <Link href="/about" color="inherit" sx={{ marginRight: 3, textDecoration: 'none', '&:hover': { textDecoration: 'none', color: '#1a237e' } }}>
              About
            </Link>
            <Link href="/services" color="inherit" sx={{ marginRight: 3, textDecoration: 'none', '&:hover': { textDecoration: 'none', color: '#1a237e' } }}>
              Services
            </Link>
            <Link href="/contact" color="inherit" sx={{ marginRight: 3, textDecoration: 'none', '&:hover': { textDecoration: 'none', color: '#1a237e' } }}>
              Contact
            </Link>
          </Grid>

          {/* Social Media Icons */}
          <Grid item>
            <IconButton href="https://facebook.com" target="_blank" color="inherit" sx={{ '&:hover': { color: '#1877f2' } }}>
              <Facebook />
            </IconButton>
            <IconButton href="https://twitter.com" target="_blank" color="inherit" sx={{ '&:hover': { color: '#1da1f2' } }}>
              <Twitter />
            </IconButton>
            <IconButton href="https://instagram.com" target="_blank" color="inherit" sx={{ '&:hover': { color: '#e1306c' } }}>
              <Instagram />
            </IconButton>
            <IconButton href="https://linkedin.com" target="_blank" color="inherit" sx={{ '&:hover': { color: '#0077b5' } }}>
              <LinkedIn />
            </IconButton>
          </Grid>

          {/* Terms and Conditions */}
          <Grid item>
            <Link href="/terms" color="inherit" sx={{ '&:hover': { textDecoration: 'underline' } }}>
              Terms & Conditions
            </Link>
          </Grid>
        </Grid>

        {/* Copyright Section */}
        <Toolbar sx={{ justifyContent: 'center', borderTop: '1px solid rgba(255, 255, 255, 0.2)', paddingTop: 2 }}>
          <Typography variant="body2" color="inherit">
            © 2024 Your Company. All rights reserved.
          </Typography>
        </Toolbar>
      </Container>
    </Box>
  );
};

export default Footer;
