// import React, { useState } from 'react';
// import {
//   TextField,
//   Button,
//   Paper,
//   Typography,
//   Grid,
//   Container,
//   Avatar,
//   Stack,
// } from '@mui/material';
// import { useForm } from 'react-hook-form';
// import { styled } from '@mui/material/styles'; // Import styled for Input
// import axiosInstance from '../../../Helper/Helper';
// import { toast } from 'react-toastify';
// import { useNavigate, useParams } from 'react-router-dom';

// // Styled component for input
// const Input = styled('input')({
//   display: 'none',
// });

// const ProductDetails = () => {
//   const { id } = useParams()
//   const [productPic, setProductPic] = useState(null);
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const navigate = useNavigate();

//   const onSubmit = async (data) => {
//     const formData = new FormData();
//     formData.append('id', id);
//     formData.append('title', data.title);
//     formData.append('description', data.description);
//     formData.append('image', productPic);

//     try {
//       const response = await axiosInstance.post(`/product/update`, formData);
//       console.log('api response: ',response);
//       console.log('data: ',response.data);
//       toast(`${response.data.message}`)
//       navigate('/product')
//       // Handle the successful response here
//     } catch (error) {
//       console.error('API Error:', error.message);
//       // Handle the error here
//     }
//   };

//   return (
//     <Container maxWidth="sm">
//       <Paper elevation={3} sx={{ padding: 4, marginTop: 4 }}>
//         <Typography variant="h5" gutterBottom>
//           Update Product
//         </Typography>
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <Grid container spacing={2}>
//             <Grid item xs={12}>
//               <TextField
//                 fullWidth
//                 label="Title"
//                 name="title"
//                 required
//                 {...register('title', {
//                   required: 'Title is required',
//                   minLength: {
//                     value: 3,
//                     message: 'Title must be at least 3 characters',
//                   },
//                 })}
//                 error={!!errors.title}
//                 helperText={errors.title ? errors.title.message : ''}
//               />
//             </Grid>

//             <Grid item xs={12}>
//               <TextField
//                 fullWidth
//                 label="Description"
//                 name="description"
//                 type="text"
//                 required
//                 {...register('description', {
//                   required: 'Description is required',
//                   minLength: {
//                     value: 3,
//                     message: 'Description must be at least 3 characters',
//                   },
//                 })}
//                 error={!!errors.description}
//                 helperText={errors.description ? errors.description.message : ''}
//               />
//             </Grid>

//             <Stack direction="row" alignItems="center" spacing={2} sx={{ marginTop: 2 }}>
//               <Avatar
//                 alt="Product Picture"
//                 src={productPic ? URL.createObjectURL(productPic) : ''}
//                 sx={{ width: 56, height: 56 }}
//               />
//               <label htmlFor="product-pic-upload">
//                 <Input
//                   accept="image/*"
//                   id="product-pic-upload"
//                   type="file"
//                   onChange={(e) => setProductPic(e.target.files[0])}
//                 />
//                 <Button variant="contained" component="span">
//                   Upload Product Pic
//                 </Button>
//               </label>
//             </Stack>

//             <Grid item xs={12}>
//               <Button type="submit" variant="contained" color="primary" fullWidth>
//                 Update
//               </Button>
//             </Grid>
//           </Grid>
//         </form>
//       </Paper>
//     </Container>
//   );
// };

// export default ProductDetails;




import React, { useEffect, useState } from 'react';
import {
  TextField,
  Button,
  Container,
  Stack,
  Typography,
  CircularProgress,
} from '@mui/material';
import { Link, useNavigate, useParams } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import axiosInstance from '../../../Helper/Helper';

const ProductDetails = () => {
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();
  
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  // Fetch product details on component mount
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const { data } = await axiosInstance.get(`/product/detail/${id}`);
      setProduct(data.data);
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };

  // Set form default values when product data is fetched
  useEffect(() => {
    if (product) {
      setValue("title", product?.title);
      setValue("description", product?.description);
    }
  }, [product, setValue]);

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("image", image ? image : product.image);
    formData.append("id", id);

    try {
      setIsLoading(true);
      const { data: responseData } = await axiosInstance.post(`/product/update`, formData);
      setIsLoading(false);
      if (responseData.status === 200) {
        toast.success(responseData.message);
        navigate('/product');
      } else {
        toast.error(responseData.message);
      }
    } catch (error) {
      console.error("Error updating product:", error);
      toast.error("Failed to update product");
      setIsLoading(false);
    }
  };

  return (
    <>
      <div style={{ backgroundColor: 'lightgray', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', padding: '3rem' }}>
        <div style={{ backgroundColor: 'white', padding: '1rem', borderRadius: '5px', boxShadow: "-1px 0px 8px 2px rgba(0,0,0,0.36)", display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <Typography variant="h5" mb={1}>Product Details</Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              {...register("title", {
                required: "Product Title is required",
              })}
              fullWidth
              margin="normal"
              variant="outlined"
              error={!!errors.title}
              helperText={errors.title && errors.title.message}
              sx={{ backgroundColor: 'white', borderRadius: '5px', mb: 4 }}
            />

            <TextField
              {...register("description", {
                required: "Description is required",
              })}
              type='text'
              variant='outlined'
              fullWidth
              error={!!errors.description}
              helperText={errors.description && errors.description.message}
              sx={{ backgroundColor: 'white', borderRadius: '5px', mb: 4 }}
            />

            <div className="mb-3">
              <input
                type="file"
                onChange={(e) => setImage(e.target.files ? e.target.files[0] : null)}
                accept="image/*"
                className="form-control"
              />
              {image ? (
                <img
                  height="60px"
                  src={URL.createObjectURL(image)}
                  alt="Preview"
                  className="upload-img"
                />
              ) : (
                product?.image && (
                  <img
                    height="90px"
                    src={`https://wtsacademy.dedicateddevelopers.us/uploads/product/${product.image}`}
                    alt="Existing"
                    className="upload-img"
                  />
                )
              )}
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '1rem' }}>
              <Button variant="contained" type="submit" disabled={isLoading}>
                {isLoading ? <CircularProgress color="inherit" size={30} /> : "Update"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;

