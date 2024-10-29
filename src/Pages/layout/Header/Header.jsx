// import React from 'react';
// import { Link } from 'react-router-dom'; // Make sure you have react-router-dom installed

// const Header = () => {
//   return (
//     <header style={styles.header}>
    
//       <nav>
//         <ul style={styles.navList}>
//           <li style={styles.navItem}><Link to="/" style={styles.navLink}>Home</Link></li>
//           <li style={styles.navItem}><Link to="/create" style={styles.navLink}>Create</Link></li>
//           <li style={styles.navItem}><Link to="/product" style={styles.navLink}>ProductList</Link></li>
//           <li style={styles.navItem}><Link to="/about" style={styles.navLink}>About Us</Link></li>
//           {/* <li style={styles.navItem}><Link to="/contact" style={styles.navLink}>Contact Us</Link></li> */}
//           <li style={styles.navItem}><Link to="/login" style={styles.navLink}>Login</Link></li>
//           <li style={styles.navItem}><Link to="/logout" style={styles.navLink}>Logout</Link></li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// const styles = {
//   header: {
//     backgroundColor: '#282c34',
//     padding: '15px',
//     color: 'white',
//     display: 'flex',
//     justifyContent: 'flex-end', // This aligns the nav to the right
//     alignItems: 'center',
//   },
//   navList: {
//     listStyleType: 'none',
//     padding: 0,
//     margin: 0,
//     display: 'flex',
//   },
//   navItem: {
//     margin: '0 15px',
//   },
//   navLink: {
//     color: 'white',
//     textDecoration: 'none',
//     fontSize: '16px',
//   }
// };
// export default Header;

import { Switch } from '@mui/material';
import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import useDarkMode from 'use-dark-mode';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
  const navigate = useNavigate()
  let darkMode = useDarkMode();


  // Check for token on mount
  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem('token'));
  }, [localStorage.getItem('token')]);

  const logOutClick = () => {
    if (isLoggedIn) { // Use isLoggedIn instead of token
      localStorage.removeItem("token");
      setIsLoggedIn(false); // Update the isLoggedIn state
      navigate("/login"); // Use useNavigate to redirect
      toast.error("Logout Successfully");
    }
  };
  return (
    <header style={styles.header}>
      <nav>
        <ul style={styles.navList}>
          <li style={styles.navItem}><Link to="/" style={styles.navLink}>Home</Link></li>
          <li style={styles.navItem}><Link to="/create" style={styles.navLink}>Create</Link></li>
          <li style={styles.navItem}><Link to="/product" style={styles.navLink}>ProductList</Link></li>
          <li style={styles.navItem}><Link to="/about" style={styles.navLink}>About Us</Link></li>
          <li style={styles.navItem}><Link to="/profile" style={styles.navLink}>Profile</Link></li>

        
          {isLoggedIn ? (
            <li style={styles.navItem}>
              <Link to="/login" style={styles.navLink} onClick={logOutClick}>LogOut</Link>
            </li>
          ) : (
            <li style={styles.navItem}>
              <Link to="/login" style={styles.navLink}>LogIn</Link>
            </li>
          )}

          <Switch
            // checked={darkMode.value}
            // onChange={darkMode.toggle}
            onClick={darkMode.toggle}
            color="default"
            inputProps={{ "aria-label": "dark mode toggle" }}
          />

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
  },
};

export default Header;
