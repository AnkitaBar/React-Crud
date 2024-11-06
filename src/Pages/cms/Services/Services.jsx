import React from 'react';
import './Services.css'; // Custom styling (optional)

const Services = () => {
  const servicesData = [
    {
      title: 'boAt Airdopes Atom 83',
      subtitle: 'World class coaching',
      description: 'There are many variations of passages of Lorem Ipsum...',
      videoSrc: 'https://www.boat-lifestyle.com/cdn/shop/files/quinn_Bejc8URjU1NSXdhabLCmD.mp4',
      aos: 'fade-up'
    },
    {
      title: 'boAt Storm Pro Call',
      subtitle: 'Best body building techniques',
      description: 'There are many variations of passages of Lorem Ipsum...',
      videoSrc: 'https://www.boat-lifestyle.com/cdn/shop/files/quinn_RUxbhR7CvjkNtlFUDxgw9.mp4',
      aos: 'fade-up'
    },
    {
      title: 'boAt Aavante bar 5400D',
      subtitle: 'In-house expert trainer',
      description: 'There are many variations of passages of Lorem Ipsum...',
      videoSrc: 'https://www.boat-lifestyle.com/cdn/shop/files/quinn_j1TwOEeceKYOJc7d7mAim.mp4',
      aos: 'fade-up'
    }
  ];

  return (
    <section className="services-section">
      <h2 className="services-title">Our Services</h2>
      <p className="services-description">
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.
      </p>
      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div className="service-card" data-aos={service.aos} key={index}>
            <video 
              src={service.videoSrc} 
              className="service-video" 
              controls 
              muted 
              loop 
              autoPlay 
            />
            <div className="service-content">
              <h3>{service.title}</h3>
              <h4>{service.subtitle}</h4>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
