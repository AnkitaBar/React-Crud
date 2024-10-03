import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  TextField,
  Button,
  Box,
  Typography,
  Avatar,
  Stack,
} from "@mui/material";
import { styled } from "@mui/system";
import Header from "../../layout/Header/Header";
import { Link } from "react-router-dom";
import axios from "axios";
const Input = styled("input")({
  display: "none",
});

const Registration = () => {
  const [profilePic, setProfilePic] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleProfilePicChange = (e) => {
    setProfilePic(e.target.files[0]);
  };

  const onSubmit = (data) => {
    const apiUrl = `https://wtsacademy.dedicateddevelopers.us/api/user/signup`;
    const formData = new FormData();
    // const UpData = {
    //   first_name: data.first_name,
    //   last_name: data.last_name,
    //   email: data.email,
    //   password: data.password,
    // };
    formData.append("first_name", data.first_name);
    formData.append("last_name", data.last_name);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("profile_pic", profilePic);
    axios
      .post(apiUrl, formData)
      .then((response) => {
        //   setApiResponse(response.data);
        console.log(response);
      })
      .catch((error) => {
        //   setApiError(error.message);
        // console.log(error);
      });
  };

  return (
    <>
      <Header />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          padding: 2,
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Register
        </Typography>

        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          sx={{
            width: "100%",
            maxWidth: 400,
            border: "1px solid black",
            borderRadius: 2,
            padding: 3,
            boxShadow: 3,
          }}
        >
          <TextField
            {...register("first_name", { required: "First Name is required" })}
            label="First Name"
            fullWidth
            margin="normal"
            variant="outlined"
            error={!!errors.first_name}
            helperText={errors.first_name && errors.first_name.message}
          />
          <TextField
            {...register("last_name", { required: "Last Name is required" })}
            label="Last Name"
            fullWidth
            margin="normal"
            variant="outlined"
            error={!!errors.last_name}
            helperText={errors.last_name && errors.last_name.message}
          />
          <TextField
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                message: "Invalid email format",
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
            {...register("password", { required: "Password is required" })}
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            variant="outlined"
            error={!!errors.password}
            helperText={errors.password && errors.password.message}
          />

          <Stack
            direction="row"
            alignItems="center"
            spacing={2}
            sx={{ marginTop: 2 }}
          >
            <Avatar
              alt="Profile Picture"
              src={profilePic ? URL.createObjectURL(profilePic) : ""}
              sx={{ width: 56, height: 56 }}
            />
            <label htmlFor="profile-pic-upload">
              <Input
                {...register("profile_pic",{
                  required:"profile pic is required"
                })}
                accept="image/*"
                id="profile-pic-upload"
                type="file"
                onChange={handleProfilePicChange}
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
            onClick={handleSubmit(onSubmit)}
          >
            Register
          </Button>
          <Link to="/login" variant="body2">
            Already Have account ? Sign in
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default Registration;
