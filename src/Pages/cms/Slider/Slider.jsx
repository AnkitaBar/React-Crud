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
        <img src="https://www.boat-lifestyle.com/cdn/shop/files/ION_Banner_WEB_f2f301b9-04e1-41f9-b424-a024680e6acc_1600x.jpg?v=1727264228" alt="Image 1" />
        {/* <div className="carousel-content">
          <h2>STYLE MEETS TECH</h2>
          <p>Tortor dignissim convallis aenean et Viverra justo nec ultrice.</p>
          <button className="shop-now-button">Shop Now</button>
        </div> */}
      </div>

      <div className="carousel-slide">
        <img src="https://www.boat-lifestyle.com/cdn/shop/files/Desktop_Festive_soundbar_abbd5166-8fac-4a19-a2d0-07d414023204_1440x.png?v=1728371174" alt="Image 2" />
        {/* <div className="carousel-content">
          <h2>STYLE MEETS TECH</h2>
          <p>Tortor dignissim convallis aenean et Viverra justo nec ultrice.</p>
          <button className="shop-now-button">Shop Now</button>
        </div> */}
      </div>

      <div className="carousel-slide">
        <img src="https://www.boat-lifestyle.com/cdn/shop/files/combine_9ad3bf6e-d249-49d8-82e6-bef10c39364a_1440x.jpg?v=1727780510" alt="Image 3" />
        {/* <div className="carousel-content">
          <h2>STYLE MEETS TECH</h2>
          <p>Tortor dignissim convallis aenean et Viverra justo nec ultrice.</p>
          <button className="shop-now-button">Shop Now</button>
        </div> */}
      </div>
    </Carousel>
  );
};

export default ImageCarousel;
