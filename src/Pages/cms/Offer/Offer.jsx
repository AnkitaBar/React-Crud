import React from 'react';
import  { Box, Grid, Typography,Button,  } from '@mui/material';

function Offer() {
  return (
    <Box
    sx={{
      display: 'flex',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      padding: 2,
      backgroundColor: '#FFD700',
      // width: '100%',
      height: '100px',
    }}
  >
    <Grid container item md={6} lg={6} xs={12} sm={12} sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
      <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#000', fontSize: { xs: '1.2rem', md: '1.5rem' } }}>
        OFFER
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: '20px' }}>
        <Typography variant="body1">
          50% off on Annual subscription.. grab the deal before it go!
        </Typography>
      </Box>
    </Grid>
      <Button variant="outlined" sx={{ marginLeft: 2, color: '#000', borderRadius: '50px', border: '1 px solid #000', backgroundColor: 'transparent', '&:hover': { backgroundColor: '#000', color: '#fff' } }}>
        Subscribe
      </Button>
  </Box>
  );
}

export default Offer;