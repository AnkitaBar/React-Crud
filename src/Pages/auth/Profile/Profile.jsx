import { Avatar, Card, CardContent, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import useDarkMode from 'use-dark-mode';
import axiosInstance from '../../../Helper/Helper';

const Profile = () => {
  const [user, setUser] = useState(null);
  const[Loading, setLoading] = useState(false);
  let darkMode = useDarkMode();



useEffect(() => {
  const fetchUser = async () => {
    try {
      const response = await axiosInstance.get('/user/profile-details');
      setUser(response.data.data);
      console.log(response.data.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching user data:', error);
      setLoading(false);
    }
  };
  fetchUser();
},[]);
  return (
    <Container maxWidth="md" sx={{ height: '100vh' }}>
      <Grid
        container
        justifyContent="center"
        alignItems="center"  // Center the card vertically
        style={{ height: '100%' }}  // Ensure the Grid container takes up the full height
      >
        <Card
          sx={{
            maxWidth: 400,
            padding: 2,
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
            borderRadius: '16px',
            textAlign: 'center',
            backgroundColor: darkMode.value ? '#333' : '#fff',
          }}
        >
          <Avatar
            src={user?.profile_picture || '/default-avatar.png'} // Show default avatar if user data is unavailable
            alt={`${user?.first_name || 'Loading'} ${user?.last_name || ''}`} // Corrected template literal
            sx={{
              width: 100,
              height: 100,
              margin: '0 auto 16px auto',
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            }}
          />
          <CardContent>
            <Typography
              variant="h5"
              component="div"
              gutterBottom
              sx={{ fontWeight: 'bold', color: darkMode.value ? '#fff' : '#333' }}
            >
              {`${user?.first_name} ${user?.last_name}`}
            </Typography>
            <Typography
              variant="body1"
              sx={{ marginBottom: '8px', fontStyle: 'italic', color: darkMode.value ? '#fff' : '#333' }}
            >
              Email: {user?.email}
            </Typography>
            <Typography
              variant="body1"
              sx={{ marginBottom: '16px', fontStyle: 'italic', color: darkMode.value ? '#fff' : '#333' }}
            >
              {`Role: ${user?.role_data?.roleDisplayName || 'N/A'}`}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Container>
  )





}
  




export default Profile
