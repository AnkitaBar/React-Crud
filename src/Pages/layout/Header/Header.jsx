import React from 'react';
import { Link } from 'react-router-dom'; // Make sure you have react-router-dom installed

const Header = () => {
  return (
    <header style={styles.header}>
    
      <nav>
        <ul style={styles.navList}>
          <li style={styles.navItem}><Link to="/" style={styles.navLink}>Home</Link></li>
          <li style={styles.navItem}><Link to="/create" style={styles.navLink}>Create</Link></li>
          <li style={styles.navItem}><Link to="/product" style={styles.navLink}>ProductList</Link></li>
          <li style={styles.navItem}><Link to="/about" style={styles.navLink}>About Us</Link></li>
          {/* <li style={styles.navItem}><Link to="/contact" style={styles.navLink}>Contact Us</Link></li> */}
          <li style={styles.navItem}><Link to="/login" style={styles.navLink}>Login</Link></li>
        </ul>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#282c34',
    padding: '15px',
    color: 'white',
    display: 'flex',
    justifyContent: 'flex-end', // This aligns the nav to the right
    alignItems: 'center',
  },
  navList: {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
  },
  navItem: {
    margin: '0 15px',
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '16px',
  }
};
export default Header;
