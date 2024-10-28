import React, { useState, useEffect } from 'react';
import { Container, Grid, Button, Box, Card, CardMedia, CardActionArea, Modal } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./Portfolio.css";

// Sample project data
const projects = [
  { id: 1, name: "Project Name 1", category: "Web Design", image: "https://webthemez.com/demo/gogym-single-page-bootstrap-4-template/assets/img/portfolio/img1.jpg" },
  { id: 2, name: "Project Name 2", category: "Photography", image: "https://webthemez.com/demo/gogym-single-page-bootstrap-4-template/assets/img/portfolio/img2.jpg" },
  { id: 3, name: "Project Name 3", category: "Print", image: "https://webthemez.com/demo/gogym-single-page-bootstrap-4-template/assets/img/portfolio/img3.jpg" },
  { id: 4, name: "Project Name 4", category: "Web Design", image: "https://webthemez.com/demo/gogym-single-page-bootstrap-4-template/assets/img/portfolio/img4.jpg" },
  { id: 5, name: "Project Name 5", category: "Photography", image: "https://webthemez.com/demo/gogym-single-page-bootstrap-4-template/assets/img/portfolio/img7.jpg" },
  { id: 6, name: "Project Name 6", category: "Print", image: "https://webthemez.com/demo/gogym-single-page-bootstrap-4-template/assets/img/portfolio/img5.jpg" },
  { id: 7, name: "Project Name 7", category: "Web Design", image: "https://webthemez.com/demo/gogym-single-page-bootstrap-4-template/assets/img/portfolio/img6.jpg" },
  { id: 8, name: "Project Name 8", category: "Photography", image: "https://webthemez.com/demo/gogym-single-page-bootstrap-4-template/assets/img/portfolio/img8.jpg" },
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
              variant={selectedCategory === 'All' ? 'contained' : 'outlined'} 
              onClick={() => handleFilterChange('All')} 
              sx={{ margin: 1 }}>
              All
            </Button>
            <Button 
              variant={selectedCategory === 'Web Design' ? 'contained' : 'outlined'} 
              onClick={() => handleFilterChange('Web Design')} 
              sx={{ margin: 1 }}>
              Web Design
            </Button>
            <Button 
              variant={selectedCategory === 'Photography' ? 'contained' : 'outlined'} 
              onClick={() => handleFilterChange('Photography')} 
              sx={{ margin: 1 }}>
              Photography
            </Button>
            <Button 
              variant={selectedCategory === 'Print' ? 'contained' : 'outlined'} 
              onClick={() => handleFilterChange('Print')} 
              sx={{ margin: 1 }}>
              Print
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
