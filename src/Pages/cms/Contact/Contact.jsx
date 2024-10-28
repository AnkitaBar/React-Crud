import React from 'react';
import { Container, Box, Grid, Typography, TextField, Button } from '@mui/material';
import GoogleMap from '../Map/Map';
// import { useForm } from 'react-hook-form'; // Uncomment if using React Hook Form
// import AOS from 'aos'; // Uncomment if using AOS
// import 'aos/dist/aos.css';

const Contact = () => {
  // const { register, handleSubmit } = useForm(); // Uncomment if using React Hook Form

  // React.useEffect(() => {
  //   AOS.init(); // Initialize AOS
  // }, []);

  // const onSubmit = (data) => {
  //   console.log(data);
  // };

  return (
    <div>
      <Container style={{ marginTop: '70px', marginBottom: '50px' }}>
        <Box
          sx={{
            p: 4,
            backgroundColor: '#f5f5f5',
            borderRadius: '10px',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
          }}
        >
          <Grid style={{ marginBottom: '30px', textAlign: 'center' }}>
            <Typography variant="h4" gutterBottom>
              Let us know
            </Typography>
            <Typography variant="body1" gutterBottom>
              There are many variations of passages of Lorem Ipsum available, but the majority
            </Typography>
          </Grid>
          <Grid
            style={{
              marginBottom: '30px',
              textAlign: 'center',
              width: '80%',
              display: 'flex',
              justifyContent: 'center',
              margin: 'auto',
            }}
            data-aos="fade-up"
            data-aos-easing="ease-in-out-sine"
            data-aos-duration="800"
            data-aos-delay="400"
            data-aos-offset="100"
            data-aos-anchor-placement="center-bottom"
          >
            <form /* onSubmit={handleSubmit(onSubmit)} */>
              <TextField
                label="Full Name"
                // {...register('name')} // Uncomment if using React Hook Form
                fullWidth
                margin="normal"
              />
              <TextField
                label="Email"
                // {...register('email')} // Uncomment if using React Hook Form
                fullWidth
                margin="normal"
              />
              <TextField
                label="Message"
                // {...register('message')} // Uncomment if using React Hook Form
                multiline
                rows={10}
                fullWidth
                margin="normal"
              />
              <Button
                variant="outlined"
                style={{
                  backgroundColor: '#F6A623',
                  color: '#fff',
                  borderRadius: '50px',
                  border: 'none',
                  padding: '10px 20px',
                  fontSize: '16px',
                }}
              >
                Send Your Message
              </Button>
            </form>
          </Grid>
        </Box>
      </Container>

      <Container style={{ marginTop: '70px', marginBottom: '50px' }}>
        {/* Add your Map component here */}
        <GoogleMap />
      </Container>
    </div>
  );
};

export default Contact;
