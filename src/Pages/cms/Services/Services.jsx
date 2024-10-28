import React from 'react';
import './Services.css'; // Custom styling (optional)

const Services = () => {
  const servicesData = [
    {
      title: 'Aerobic',
      subtitle: 'World class coaching',
      description: 'There are many variations of passages of Lorem Ipsum...',
      imgSrc: 'https://img.freepik.com/free-photo/modern-stationary-collection-arrangement_23-2149309643.jpg', // replace with actual image URLs
      aos: 'fade-up'
    },
    {
      title: 'Body Building',
      subtitle: 'Best body building techniques',
      description: 'There are many variations of passages of Lorem Ipsum...',
      imgSrc: 'https://img.freepik.com/free-photo/modern-stationary-collection-arrangement_23-2149309643.jpg',
      aos: 'fade-up'
    },
    {
      title: 'Yoga',
      subtitle: 'In-house expert trainer',
      description: 'There are many variations of passages of Lorem Ipsum...',
      imgSrc: 'https://img.freepik.com/free-photo/modern-stationary-collection-arrangement_23-2149309643.jpg',
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
            <img src={service.imgSrc} alt={service.title} className="service-img" />
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
