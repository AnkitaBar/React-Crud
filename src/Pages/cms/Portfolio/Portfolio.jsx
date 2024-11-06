import React, { useState, useEffect } from 'react';
import { Container, Grid, Button, Box, Card, CardMedia, CardActionArea, Modal } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./Portfolio.css";

// Sample project data
const projects = [
  { id: 1, name: "Project Name 1", category: "Best Sellers", image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/lifestyle-render_7e4ff0fd-6dde-4158-8dcf-ea4f9c5b6e2c.jpg?v=1727319135" },

  { id: 2, name: "Project Name 2", category: "Top Earbuds", image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/131_f04f74fd-45d4-4614-85cf-6ccf69c4cf90.jpg?v=1691395049" },

  { id: 3, name: "Project Name 3", category: "Top Watches", image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Lifestyle_render.jpg?v=1727157307" },

  { id: 4, name: "Project Name 4", category: "Best Sellers", image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AD_141.png?v=1703145765" },

  { id: 5, name: "Project Name 5", category: "Top Earbuds", image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Airdopes_138_Pro.jpg?v=1702618467" },

  { id: 6, name: "Project Name 6", category: "Top Watches", image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Lifestyle_render_154400cd-4bd3-4dd8-9c4a-e56f27910199.jpg?v=1729580370" },

  { id: 7, name: "Project Name 7", category: "Best Sellers", image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/X400.jpg?v=1702526246" },

  { id: 8, name: "Project Name 8", category: "Top Earbuds", image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AD_91.jpg?v=1706776330" },

  { id: 9, name: "Project Name 8", category: "Top Speakers", image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Stone_350.jpg?v=1701847157" },

  { id: 10, name: "Project Name 8", category: "Top Speakers", image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/S190PRO_FI_Blue_04.png?v=1718780392" },

  { id: 11, name: "Project Name 8", category: "Top Speakers", image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Stone_580.jpg?v=1692255219" },

  { id: 12, name: "Project Name 3", category: "Top Watches", image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Storm_Pro_Call.jpg?v=1702361107" },
];

const Portfolio = () => {
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleFilterChange = (category) => {
    setSelectedCategory(category);
    if (category === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === category));
    }
  };

  const handleOpen = (image) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <div className='div'>
      <Container maxWidth="lg" style={{ marginTop: '2rem' }}>
        <div className="portfolio-container">
          <h1>Portfolio</h1>
          <p>
            At lorem Ipsum available, but the majority have suffered alteration in
            some form by injected humour.
          </p>
        </div>

        <div className='filter-buttons'>
          <Box display="flex" justifyContent="center" mb={4}>
            <Button 
              variant={selectedCategory === 'Best Sellers' ? 'contained' : 'outlined'} 
              onClick={() => handleFilterChange('Best Sellers')} 
              sx={{ margin: 1 }}>
             Best Sellers
            </Button>
            <Button 
              variant={selectedCategory === 'Top Earbuds' ? 'contained' : 'outlined'} 
              onClick={() => handleFilterChange('Top Earbuds')} 
              sx={{ margin: 1 }}>
              Top Earbuds
            </Button>
            <Button 
              variant={selectedCategory === 'Top Speakers' ? 'contained' : 'outlined'} 
              onClick={() => handleFilterChange('Top Speakers')} 
              sx={{ margin: 1 }}>
              Top Speakers
            </Button>
            <Button 
              variant={selectedCategory === 'Top Watches' ? 'contained' : 'outlined'} 
              onClick={() => handleFilterChange('Top Watches')} 
              sx={{ margin: 1 }}>
              Top Watches
            </Button>
          </Box>
        </div>

        <Grid container spacing={4}>
          {filteredProjects.map(project => (
            <Grid item xs={12} sm={6} md={3} key={project.id}>
              <Card data-aos="fade-up">
                <CardActionArea 
                  onClick={() => handleOpen(project.image)} 
                  className="hover-effect">
                  <CardMedia
                    sx={{ height: 280, objectFit: "contain" }}
                    image={project.image}
                  />
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Modal to display the selected image */}
        <Modal
          open={open}
          onClose={handleClose}
          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <Box sx={{ outline: 'none' }}>
            <img src={selectedImage} alt="Selected Project" style={{ maxWidth: '90vw', maxHeight: '90vh' }} />
          </Box>
        </Modal>
      </Container>
    </div>
  );
};

export default Portfolio;
