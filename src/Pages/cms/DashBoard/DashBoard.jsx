import React from 'react';
import './Dashboard.css';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';


const data = [
  { label: 'Trainer', count: 45 },
  { label: 'Equipments', count: 114 },
  { label: 'Customers', count: 245 },
  { label: 'Cafeteria', count: 2 }
];

const Dashboard = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animation happens only once
    threshold: 0.5,    // Trigger animation when 20% of the component is visible
  });

  return (
    <>
    <div className="dashboard" ref={ref}>
      {data.map((item, index) => (
        <div key={index} className="card">
          <h2>    {inView ? <CountUp end={item.count} duration={2} /> : 0}</h2>
          <p>{item.label.toUpperCase()}</p>
        </div>
        
      ))}
    </div>
    <br></br>
    <br></br>
    </>
    
  );
};

export default Dashboard;
