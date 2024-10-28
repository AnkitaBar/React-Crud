import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useForm } from 'react-hook-form';
import Header from '../../layout/Header/Header';
import { toast } from 'react-toastify';
import CircularProgress from '@mui/material/CircularProgress'; // Import CircularProgress
import axiosInstance from '../../../Helper/Helper';
import { Navigate, useNavigate } from 'react-router-dom';

const defaultTheme = createTheme();

export default function SignUp() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false); // Loading state

  const navigate = useNavigate("product")

  const onSubmit = async (data) => {
    setLoading(true); // Set loading to true when submission starts
    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("password", data.password);
    

    try {
      const response = await axiosInstance.post(`/user/signin`, formData);
      console.log('API Response:', response.data);
      if(response.data.status===200){
        localStorage.setItem('token', response.data.token);
        toast(`${response.data.message}`);
        navigate('/product');
        setLoading(false);
      }else{
        setLoading(false);
        toast(`${response.data.message}`);
      }
      
    } catch (error) {
      console.error('API Error:', error.message);
      setLoading(false);
    }
  };
  

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          backgroundColor: '#f5f5f5',
        }}>
          <Container component="main" maxWidth="xs" style={{ border: '1px solid' }}>
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      {...register('email', { required: 'Email is required' })}
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      error={!!errors.email}
                      helperText={errors.email ? errors.email.message : ''}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      {...register('password', { required: 'Password is required' })}
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="new-password"
                      error={!!errors.password}
                      helperText={errors.password ? errors.password.message : ''}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={<Checkbox {...register('remember')} color="primary" />}
                      label="Remember me"
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  disabled={loading} // Disable button while loading
                  startIcon={loading && <CircularProgress size={20} />} // Show loading spinner
                >
                  {loading ? 'Signing In...' : 'Sign IN'} {/* Change button text */}
                </Button>
                <Grid container justifyContent="flex-start">
                  <Grid item>
                    <Link href="#" variant="body2">
                      Forgot Password?
                    </Link>
                  </Grid>
                </Grid>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Link href="/register" variant="body2">
                      No account? Sign up
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Container>
        </div>
      </ThemeProvider>
    </>
  );
}
