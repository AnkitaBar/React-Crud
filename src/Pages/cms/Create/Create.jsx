import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Header from '../../layout/Header/Header';
import { Box, TextField, Typography, Avatar, Button, Stack } from '@mui/material';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import axiosInstance from '../../../Helper/Helper';
import { toast } from 'react-toastify';

const Create = () => {
  const { 
    register, 
    handleSubmit, 
    reset, 
    formState: { errors } 
  } = useForm();

  
  const [profilePic, setProfilePic] = useState(null); // Manage profile pic in state

  // Handle form submission
  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('description', data.description);
    formData.append('image', profilePic);
  
    try {
      const response = await axiosInstance.post(`/product/create`, formData);
      console.log('API Response:', response.data);
      console.log('data:', response);
      toast.success(response.data.message); // Display success message
      reset(); // Reset form fields
      setProfilePic(null); // Clear profile pic preview
    } catch (error) {
      console.error('API Error:', error.response ? error.response.data : error.message); // Detailed error logging
      toast.error('Something went wrong!'); // Display error message
    }
  };
  
  return (
    <>
      <Header />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          padding: 2,
        }}
      >
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          sx={{
            width: '100%',
            maxWidth: 400,
            border: '1px solid blue',
            borderRadius: 2,
            padding: 3,
            boxShadow: 3,
          }}
        >
          <Typography variant="h4" component="h1" gutterBottom style={{ textAlign: 'center' }}>
            Create Product
          </Typography>

          <TextField
            {...register('title', { required: 'Title is required' })}
            label="Title"
            fullWidth
            margin="normal"
            variant="outlined"
            error={!!errors.title}
            helperText={errors.title && errors.title.message}
          />
          <TextField
            {...register('description', { required: 'Description is required' })}
            label="Description"
            fullWidth
            margin="normal"
            variant="outlined"
            error={!!errors.description}
            helperText={errors.description && errors.description.message}
          />
          {/* <TextField
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                message: 'Invalid email format',
              },
            })}
            label="Email Address"
            fullWidth
            margin="normal"
            variant="outlined"
            error={!!errors.email}
            helperText={errors.email && errors.email.message}
          />
          <TextField
            {...register('password', { required: 'Password is required' })}
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            variant="outlined"
            error={!!errors.password}
            helperText={errors.password && errors.password.message}
          /> */}

         
          <Stack direction="row" alignItems="center" spacing={2} sx={{ marginTop: 2 }}>
            <Avatar
              alt="Profile Picture"
              src={profilePic ? URL.createObjectURL(profilePic) : ''}
              sx={{ width: 56, height: 56 }}
            />
            <label htmlFor="profile-pic-upload">
              <input
                accept="image/*"
                id="profile-pic-upload"
                type="file"
                style={{ display: 'none' }}
                onChange={(e) => setProfilePic(e.target.files[0])}
              />
              <Button variant="contained" component="span">
                Upload Profile Pic
              </Button>
            </label>
          </Stack>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ marginTop: 3, marginBottom: 2 }}
          >
            Create
          </Button>

          <Link to="/login" style={{ textAlign: 'center', display: 'block', marginTop: '10px' }}>
            Already have an account? Sign in
          </Link>
        </Box>

        
      </Box>
    </>
  );
};

export default Create;
