// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import {
//   TextField,
//   Button,
//   Box,
//   Typography,
//   Avatar,
//   Stack,
// } from "@mui/material";
// import { styled } from "@mui/system";
// import Header from "../../layout/Header/Header";
// import { Link } from "react-router-dom";
// import axios from "axios";
// const Input = styled("input")({
//   display: "none",
// });

// const Registration = () => {
//   const [profilePic, setProfilePic] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const handleProfilePicChange = (e) => {
//     setProfilePic(e.target.files[0]);
//   };

//   const onSubmit = (data) => {
//     const apiUrl = `https://wtsacademy.dedicateddevelopers.us/api/user/signup`;
//     const formData = new FormData();
//     // const UpData = {
//     //   first_name: data.first_name,
//     //   last_name: data.last_name,
//     //   email: data.email,
//     //   password: data.password,
//     // };
//     formData.append("first_name", data.first_name);
//     formData.append("last_name", data.last_name);
//     formData.append("email", data.email);
//     formData.append("password", data.password);
//     formData.append("profile_pic", profilePic);
//     axios
//       .post(apiUrl, formData)
//       .then((response) => {
//         //   setApiResponse(response.data);
//         console.log(response);
//       })
//       .catch((error) => {
//         //   setApiError(error.message);
//         // console.log(error);
//       });
//   };

//   return (
//     <>
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           justifyContent: "center",
//           height: "100vh",
//           padding: 2,
//         }}
//       >
//         <Typography variant="h4" component="h1" gutterBottom>
//           Register
//         </Typography>

//         <Box
//           component="form"
//           noValidate
//           onSubmit={handleSubmit(onSubmit)}
//           sx={{
//             width: "100%",
//             maxWidth: 400,
//             border: "1px solid black",
//             borderRadius: 2,
//             padding: 3,
//             boxShadow: 3,
//           }}
//         >
//           <TextField
//             {...register("first_name", { required: "First Name is required" })}
//             label="First Name"
//             fullWidth
//             margin="normal"
//             variant="outlined"
//             error={!!errors.first_name}
//             helperText={errors.first_name && errors.first_name.message}
//           />
//           <TextField
//             {...register("last_name", { required: "Last Name is required" })}
//             label="Last Name"
//             fullWidth
//             margin="normal"
//             variant="outlined"
//             error={!!errors.last_name}
//             helperText={errors.last_name && errors.last_name.message}
//           />
//           <TextField
//             {...register("email", {
//               required: "Email is required",
//               pattern: {
//                 value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
//                 message: "Invalid email format",
//               },
//             })}
//             label="Email Address"
//             fullWidth
//             margin="normal"
//             variant="outlined"
//             error={!!errors.email}
//             helperText={errors.email && errors.email.message}
//           />
//           <TextField
//             {...register("password", { required: "Password is required" })}
//             label="Password"
//             type="password"
//             fullWidth
//             margin="normal"
//             variant="outlined"
//             error={!!errors.password}
//             helperText={errors.password && errors.password.message}
//           />

//           <Stack
//             direction="row"
//             alignItems="center"
//             spacing={2}
//             sx={{ marginTop: 2 }}
//           >
//             <Avatar
//               alt="Profile Picture"
//               src={profilePic ? URL.createObjectURL(profilePic) : ""}
//               sx={{ width: 56, height: 56 }}
//             />
//             <label htmlFor="profile-pic-upload">
//               <Input
//                 {...register("profile_pic",{
//                   required:"profile pic is required"
//                 })}
//                 accept="image/*"
//                 id="profile-pic-upload"
//                 type="file"
//                 onChange={handleProfilePicChange}
//               />
//               <Button variant="contained" component="span">
//                 Upload Profile Pic
//               </Button>
//             </label>
//           </Stack>

//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             color="primary"
//             sx={{ marginTop: 3, marginBottom: 2 }}
//             onClick={handleSubmit(onSubmit)}
//           >
//             Register
//           </Button>
//           <Link to="/login" variant="body2">
//             Already Have account ? Sign in
//           </Link>
//         </Box>
//       </Box>
//     </>
//   );
// };

// export default Registration;



import React, { useState } from 'react';
import { TextField, Button, Grid, Typography, Avatar, IconButton, Stack } from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import useDarkMode from 'use-dark-mode';
import axiosInstance from '../../../Helper/Helper';
// import { endPoints } from '../../../axios/endpoints/endpoints';

const Input = styled('input')({
  display: 'none',
});

const Registration = () => {
    const [profilePic, setProfilePic] = useState(null);
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    let darkMode = useDarkMode();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

//   const onSubmit = (data) => {
//     const apiUrl = `https://wtsacademy.dedicateddevelopers.us/api/user/signup`;
//     const formData = new FormData();
//     formData.append("first_name", data.first_name);
//     formData.append("last_name", data.last_name);
//     formData.append("email", data.email);
//     formData.append("password", data.password);
//     axios
//       .post(apiUrl, formData)
//       .then((response) => {
//       })
//       .catch((error) => {
//       });
//   };

const onSubmit = async (data) => {
    // const apiUrl = `https://wtsacademy.dedicateddevelopers.us/api/user/signup`;
    setLoading(true);
    const formData = new FormData();
    formData.append("first_name", data.first_name);
    formData.append("last_name", data.last_name);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("profile_pic", profilePic);
    try {
      const response = await axiosInstance.post(`/user/signup`, formData);
      // console.log('API Response:', response.data);
      if(response.data.status === 200) {
        setLoading(false);
        navigate('/login')
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
      // Handle the successful response here
    } catch (error) {
        console.error('API Error:', error.message);
        // Handle the error here
    }
}

  return (
    <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh' }} mb={3} mt={3}>
      <Grid 
        item 
        xs={12} 
        sm={6} 
        md={4} 
        style={{
          borderRadius: '10px',
          border: darkMode.value ? '2px solid #90caf9' : '2px solid #1976d2',
          padding: '20px',
          backgroundColor: darkMode.value ? '#424242' : '#fff',
          color: darkMode.value ? '#e0e0e0' : '#000',
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Typography variant="h4" gutterBottom style={{ color: darkMode.value ? '#90caf9' : '#1976d2' }}>
            Registration
          </Typography>

          <TextField
            fullWidth
            label="First Name"
            name="first_name"
            margin="normal"
            {...register('first_name', {
              required: 'First Name is required',
              minLength: { value: 3, message: 'First Name must be at least 3 characters' },
            })}
            error={!!errors.first_name}
            helperText={errors.first_name ? errors.first_name.message : ''}
            InputLabelProps={{ style: { color: darkMode.value ? '#bdbdbd' : '#000' } }}
            InputProps={{
              style: {
                color: darkMode.value ? '#e0e0e0' : '#000',
                backgroundColor: darkMode.value ? '#616161' : '#fff',
              },
            }}
          />
          <TextField
            fullWidth
            label="Last Name"
            name="last_name"
            margin="normal"
            {...register('last_name', {
              required: 'Last Name is required',
              minLength: { value: 3, message: 'Last Name must be at least 3 characters' },
            })}
            error={!!errors.last_name}
            helperText={errors.last_name ? errors.last_name.message : ''}
            InputLabelProps={{ style: { color: darkMode.value ? '#bdbdbd' : '#000' } }}
            InputProps={{
              style: {
                color: darkMode.value ? '#e0e0e0' : '#000',
                backgroundColor: darkMode.value ? '#616161' : '#fff',
              },
            }}
          />
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            margin="normal"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                message: 'Invalid email format',
              },
            })}
            error={!!errors.email}
            helperText={errors.email ? errors.email.message : ''}
            InputLabelProps={{ style: { color: darkMode.value ? '#bdbdbd' : '#000' } }}
            InputProps={{
              style: {
                color: darkMode.value ? '#e0e0e0' : '#000',
                backgroundColor: darkMode.value ? '#616161' : '#fff',
              },
            }}
          />
          <TextField
            fullWidth
            label="Password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            margin="normal"
            InputProps={{
              endAdornment: (
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShowPassword(!showPassword)} // Toggle password visibility
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              ),
              style: {
                color: darkMode.value ? '#e0e0e0' : '#000',
                backgroundColor: darkMode.value ? '#616161' : '#fff',
              }
            }}
            {...register('password', {
              required: 'Password is required',
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                message: 'Password must be at least 8 characters long and contain at least one letter and one number',
              },
            })}
            error={!!errors.password}
            helperText={errors.password ? errors.password.message : ''}
          />

        <Stack direction="row" alignItems="center" spacing={2} sx={{ marginTop: 2 }}>
            <Avatar
                alt="Profile Picture"
                src={profilePic ? URL.createObjectURL(profilePic) : ''}
                sx={{ width: 56, height: 56 }}
            />
            <label htmlFor="profile-pic-upload">
                <Input
                accept="image/*"
                id="profile-pic-upload"
                type="file"
                onChange={(e)=> setProfilePic(e.target.files[0])}
                />
                <Button variant="contained" component="span">
                Upload Profile Pic
                </Button>
            </label>
        </Stack>

          <Button type="submit" disabled={loading} fullWidth variant="contained" color="primary" style={{ marginTop: '20px', backgroundColor: darkMode.value ? '#90caf9' : '#1976d2' }}>
            {loading ? '...Creating Account' : 'Register'} 
          </Button>

          <Grid>
            <Typography variant="body2" style={{ marginTop: '20px' }}>
              Already have an account?
            </Typography>
            <Link to="/login" style={{ color: darkMode.value ? '#90caf9' : '#1976d2' }}>Sign In</Link>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};

export default Registration;

