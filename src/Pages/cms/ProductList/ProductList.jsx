import React, { useEffect, useState } from 'react';
import {
  Button,
  Card,
  CardContent,
  Typography,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Pagination,
  IconButton,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import axiosInstance, { product } from '../../../Helper/Helper';
import SweetAlertComponent from '../../../ui/sweetalert/SweetAlert';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import useDarkMode from 'use-dark-mode';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [showTable, setShowTable] = useState(false);
  const [id, setId] = useState();
  const [modal, setModal] = useState(false);
  const [page, setPage] = useState(1);
  const [itemsPerPage] = useState(8); // Adjust this for pagination
  const darkMode = useDarkMode();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axiosInstance.post('/product/list');
        setProducts(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProducts();
  }, []);

  const toggleView = () => {
    setShowTable((prev) => !prev);
  };

  const onDeleteId = async () => {
    const formData = new FormData();
    formData.append("id", id);
    try {
      const deleteResponse = await axiosInstance.post('product/remove', formData);
      if (deleteResponse.status === 200) {
        setModal(false);
        toast.success(deleteResponse.data.message);
      }
      const listResponse = await axiosInstance.post('/product/list');
      setProducts(listResponse.data.data);
    } catch (error) {
      console.error(error);
      setModal(false);
      toast.error("Deletion failed. Please try again.");
    }
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const paginatedProducts = products.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  const cardStyle = {
    backgroundColor: darkMode.value ? '#333' : '#fff',
    color: darkMode.value ? '#e0e0e0' : '#000',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    borderRadius: '12px',
    padding: '16px',
    textAlign: 'center',
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <Button variant="contained" onClick={toggleView} style={{ marginBottom: '20px' }}>
        {showTable ? 'Show Card View' : 'Show Table View'}
      </Button>

      {showTable ? (
        <TableContainer component={Paper} style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell style={{ fontWeight: 'bold' }}>Title</TableCell>
                <TableCell style={{ fontWeight: 'bold' }}>Description</TableCell>
                <TableCell style={{ fontWeight: 'bold' }}>Image</TableCell>
                <TableCell style={{ fontWeight: 'bold' }}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Array.isArray(products) && products.length > 0 ? (
                paginatedProducts.map((item) => (
                  <TableRow key={item.id} hover>
                    <TableCell>{item.title}</TableCell>
                    <TableCell>{item.description}</TableCell>
                    <TableCell>
                      <img src={product(item.image)} alt={item.title} style={{ width: '100px', height: 'auto', borderRadius: '8px' }} />
                    </TableCell>
                    <TableCell>
                      <IconButton
                        color="primary"
                        component={Link}
                        to={`/products/${item._id}`}
                        style={{ marginRight: '8px' }}
                      >
                        <EditIcon />
                      </IconButton>
                      <IconButton
                        color="error"
                        onClick={() => { setId(item._id); setModal(true); }}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={4} style={{ textAlign: 'center' }}>No products available</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Grid container spacing={2} justifyContent="center">
          {Array.isArray(products) && products.length > 0 ? (
            paginatedProducts.map((item) => (
              <Grid item xs={12} sm={6} md={3} key={item.id}>
                <Card style={cardStyle}>
                  <CardContent>
                    <Typography variant="h6">{item.title}</Typography>
                    <Typography variant="body2" style={{ color: darkMode.value ? '#e0e0e0' : '#666' }}>{item.description}</Typography>
                    <img src={product(item.image)} alt={item.title} style={{ width: '100%', height: 'auto', marginTop: '10px', borderRadius: '8px' }} />
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                      <IconButton
                        color="primary"
                        component={Link}
                        to={`/products/${item._id}`}
                        style={{ marginRight: '8px' }}
                      >
                        <EditIcon />
                      </IconButton>
                      <IconButton
                        color="error"
                        onClick={() => { setId(item._id); setModal(true); }}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </div>
                  </CardContent>
                </Card>
              </Grid>
            ))
          ) : (
            <Typography style={{ color: darkMode.value ? '#e0e0e0' : '#000', textAlign: 'center', width: '100%', marginTop: '20px' }}>
              No products available
            </Typography>
          )}
        </Grid>
      )}

      {products.length > itemsPerPage && (
        <Pagination
          count={Math.ceil(products.length / itemsPerPage)}
          page={page}
          onChange={handlePageChange}
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "2rem",
            marginTop: "2rem",
            "& .MuiPaginationItem-root": {
              color: darkMode.value ? '#e0e0e0' : '#3f51b5',
            },
            "& .Mui-selected": {
              backgroundColor: darkMode.value ? '#424242' : '#e3f2fd',
              color: darkMode.value ? '#fff' : '#3f51b5',
            },
          }}
        />
      )}

      {modal && (
        <SweetAlertComponent
          confirm={onDeleteId}
          cancel={() => setModal(false)}
          title={"Are you sure?"}
          subtitle={"You will not be able to recover!"}
        />
      )}
    </div>
  );
};

export default ProductList;
