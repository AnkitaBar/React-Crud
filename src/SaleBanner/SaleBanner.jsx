import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faUndo, faTruck, faFileInvoice } from '@fortawesome/free-solid-svg-icons';
import "./SaleBanner.css"
const SaleBanner = () => {
  const items = [
    {
      title: "1-Year Warranty",
      description: "Enjoy peace of mind with our comprehensive warranty.",
      icon: faShieldAlt // Shield icon for warranty
    },
    {
      title: "7-Day Replacement",
      description: "If you encounter any issues, we offer a hassle-free replacement within 7 days.",
      icon: faUndo // Undo icon for replacement
    },
    {
      title: "Free Express Delivery",
      description: "Get your products delivered swiftly and free of charge.",
      icon: faTruck // Truck icon for delivery
    },
    {
      title: "GST Billing",
      description: "All purchases come with GST billing for your convenience.",
      icon: faFileInvoice // Invoice icon for billing
    },
  ];

  return (
    <div className="grid-container">
      {items.map((item, index) => (
        <div className="grid-item" key={index}>
          <FontAwesomeIcon icon={item.icon} className="item-icon" />
          <div className="item-content">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
      <a href="https://www.boat-lifestyle.com/" className="read-more">Read more at Boat Lifestyle</a>
    </div>
  );
};

export default SaleBanner;
