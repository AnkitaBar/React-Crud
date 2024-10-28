import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "./Slider.css"

const ImageCarousel = () => {
  return (
    <Carousel
      showThumbs={false}
      infiniteLoop
      autoPlay
      interval={3000}
      showStatus={false}
      showArrows
    >
      <div className="carousel-slide">
        <img src="https://timevo-theme.myshopify.com/cdn/shop/files/Slider2.jpg?v=1710491158&width=2000" alt="Image 1" />
        <div className="carousel-content">
          <h2>STYLE MEETS TECH</h2>
          <p>Tortor dignissim convallis aenean et Viverra justo nec ultrice.</p>
          <button className="shop-now-button">Shop Now</button>
        </div>
      </div>

      <div className="carousel-slide">
        <img src="https://timevo-theme.myshopify.com/cdn/shop/files/Slider_3.jpg?v=1710491714&width=2000" alt="Image 2" />
        <div className="carousel-content">
          <h2>STYLE MEETS TECH</h2>
          <p>Tortor dignissim convallis aenean et Viverra justo nec ultrice.</p>
          <button className="shop-now-button">Shop Now</button>
        </div>
      </div>

      <div className="carousel-slide">
        <img src="https://timevo-theme.myshopify.com/cdn/shop/files/Slider1.jpg?v=1710491539&width=2000" alt="Image 3" />
        <div className="carousel-content">
          <h2>STYLE MEETS TECH</h2>
          <p>Tortor dignissim convallis aenean et Viverra justo nec ultrice.</p>
          <button className="shop-now-button">Shop Now</button>
        </div>
      </div>
    </Carousel>
  );
};

export default ImageCarousel;
