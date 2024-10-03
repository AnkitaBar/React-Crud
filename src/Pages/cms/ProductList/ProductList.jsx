import React, { useEffect, useState } from 'react';
import { Button, Card, CardContent, Typography, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import axiosInstance, { product } from '../../../Helper/Helper';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [showTable, setShowTable] = useState(false); // To toggle between card and table view

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axiosInstance.post('/product/list');
        setProducts(res.data.data);
        console.log(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProducts();
  }, []);

  // Toggle between card view and table view
  const toggleView = () => {
    setShowTable((prev) => !prev);
  };

  return (
    <div>
  <Button variant="contained" onClick={toggleView} style={{ marginBottom: '20px' }}>
    {showTable ? 'Show Card View' : 'Show Table View'}
  </Button>

  {showTable ? (
    // Table view
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Image</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Array.isArray(products) && products.length > 0 ? (
            products.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.title}</TableCell>
                <TableCell>{item.description}</TableCell>
                <TableCell>
                  <img src={product(item.image)} alt={item.title} style={{ width: '100px', height: '100px' }} />
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={3}>No products available</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  ) : (
    // Card view
    <Grid container spacing={2}>
      {Array.isArray(products) && products.length > 0 ? (
        products.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{item.title}</Typography>
                <Typography variant="body2">{item.description}</Typography>
                <img src={product(item.image)} alt={item.title} style={{ width: '100%', height: 'auto', marginTop: '10px' }} />
              </CardContent>
            </Card>
          </Grid>
        ))
      ) : (
        <Typography>No products available</Typography>
      )}
    </Grid>
  )}
    </div>

  );
};

export default ProductList;
