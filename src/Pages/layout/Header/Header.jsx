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

// import { Switch } from '@mui/material';
// import React, { useState, useEffect } from 'react';
// import toast from 'react-hot-toast';
// import { Link, useNavigate } from 'react-router-dom';
// import useDarkMode from 'use-dark-mode';

// const Header = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
//   const navigate = useNavigate()
//   let darkMode = useDarkMode();


//   // Check for token on mount
//   useEffect(() => {
//     setIsLoggedIn(!!localStorage.getItem('token'));
//   }, [localStorage.getItem('token')]);

//   const logOutClick = () => {
//     if (isLoggedIn) { // Use isLoggedIn instead of token
//       localStorage.removeItem("token");
//       setIsLoggedIn(false); // Update the isLoggedIn state
//       navigate("/login"); // Use useNavigate to redirect
//       toast.error("Logout Successfully");
//     }
//   };
//   return (
//     <header style={styles.header}>
//       <nav>
//         <ul style={styles.navList}>
//           <li style={styles.navItem}><Link to="/" style={styles.navLink}>Home</Link></li>
//           <li style={styles.navItem}><Link to="/create" style={styles.navLink}>Create</Link></li>
//           <li style={styles.navItem}><Link to="/product" style={styles.navLink}>ProductList</Link></li>
//           <li style={styles.navItem}><Link to="/about" style={styles.navLink}>About Us</Link></li>
//           <li style={styles.navItem}><Link to="/profile" style={styles.navLink}>Profile</Link></li>

        
//           {isLoggedIn ? (
//             <li style={styles.navItem}>
//               <Link to="/login" style={styles.navLink} onClick={logOutClick}>LogOut</Link>
//             </li>
//           ) : (
//             <li style={styles.navItem}>
//               <Link to="/login" style={styles.navLink}>LogIn</Link>
//             </li>
//           )}

//           <Switch
//             // checked={darkMode.value}
//             // onChange={darkMode.toggle}
//             onClick={darkMode.toggle}
//             color="default"
//             inputProps={{ "aria-label": "dark mode toggle" }}
//           />

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
//   },
// };

// export default Header;




import React, { useEffect, useState } from "react";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Switch,
  Tooltip,
  Avatar
} from "@mui/material";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import toast from "react-hot-toast";
import { useTokenStore } from '../../../Store/authStore';
import { profile_pic } from "../../../Helper/Helper";
// import { styled } from '@mui/material/styles';
import useDarkMode from 'use-dark-mode';

const Header = () => {
  const token2 = useTokenStore((state) => state.token);
  const setToken = useTokenStore((state) => state.setToken);
  let darkMode = useDarkMode()
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
  // const [userName, setUserName] = useState(""); // New state for user name
  // const [profilePic, setProfilePic] = useState(""); // New state for profile picture
  const navigate = useNavigate(); // Initialize useNavigate hook

  const userName = localStorage.getItem("name");
  const profilePic = localStorage.getItem("profile_pic");

  useEffect(() => {
    setToken();
    // console.log(token2, "token");
    // setUserName(localStorage.getItem("name"));
    // setProfilePic(localStorage.getItem("profile_pic"));
  }, []);
  
  

  // Check for token on mount
  // useEffect(() => {
  //   setIsLoggedIn(!!localStorage.getItem('token'));
  // }, [localStorage.getItem('token')]);

  const toggleDrawer = open => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setIsDrawerOpen(open);
  };

  const logOutClick = () => {
    if (token2) { // Use isLoggedIn instead of token
      localStorage.removeItem("token");
      setToken();
      // setIsLoggedIn(false); // Update the isLoggedIn state
      navigate("/login"); // Use useNavigate to redirect
      toast.success("Logout Successfully");
    }
  };

  // const DarkModeSwitch = styled(Switch)(({ theme }) => ({
  //   width: 60,
  //   height: 34,
  //   padding: 7,
  //   '& .MuiSwitch-switchBase': {
  //     margin: 1,
  //     padding: 0,
  //     transform: 'translateX(6px)',
  //     '&.Mui-checked': {
  //       color: '#fff',
  //       transform: 'translateX(22px)',
  //       '& + .MuiSwitch-track': {
  //         backgroundColor: theme.palette.mode === 'dark' ? '#aab4be' : '#37474f',
  //         opacity: 1,
  //         border: 0,
  //       },
  //       '& .MuiSwitch-thumb:before': {
  //         content: "'🌙'", // Moon icon for dark mode
  //       },
  //     },
  //   },
  //   '& .MuiSwitch-thumb': {
  //     backgroundColor: theme.palette.mode === 'dark' ? '#90caf9' : '#fbc02d',
  //     width: 28,
  //     height: 28,
  //     borderRadius: 50,
  //     '&:before': {
  //       content: "'☀️'", // Sun icon for light mode
  //       position: 'absolute',
  //       width: '100%',
  //       height: '100%',
  //       display: 'flex',
  //       alignItems: 'center',
  //       justifyContent: 'center',
  //       fontSize: 18,
  //     },
  //   },
  //   '& .MuiSwitch-track': {
  //     borderRadius: 20 / 2,
  //     opacity: 1,
  //     backgroundColor: theme.palette.mode === 'dark' ? '#aab4be' : '#37474f',
  //   },
  // }));

  const drawerList = (
    <Box
      sx={{
        width: "100vw",
        maxWidth: "100vw",
        paddingTop: "10px",
        paddingBottom: "10px",
        boxSizing: "border-box",
        overflowX: "hidden"
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <ListItemText primary="Home" />
          </Link>
        </ListItem>
        <ListItem>
          <Link
            to="/about"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ListItemText primary="About" />
          </Link>
        </ListItem>
        <ListItem>
          <Link
            to="/productlist"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ListItemText primary="Products" />
          </Link>
        </ListItem>
        <ListItem>
          <Link
            to="/create"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ListItemText primary="Create" />
          </Link>
        </ListItem>
        {token2 && (
          <ListItem>
            <Link to="/profile" style={{ textDecoration: "none", color: "inherit" }}>
              <ListItemText primary="Profile" />
            </Link>
          </ListItem>
        )}
         {/* for profile pic and name  */}
        {
          token2 && (
            <ListItem>
              <Box display="flex" alignItems="center" ml={2}>
                  {profilePic && (
                    <Avatar src={profile_pic(profilePic)} alt={userName} sx={{ width: 32, height: 32, mr: 1 }} />
                  )}
                  <Typography variant="body1" color="inherit">Hello {userName}</Typography>
              </Box>
            </ListItem>
          )
        }
        <ListItem>
          {token2 ? (
            <Link to="/login" style={{ textDecoration: "none", color: "inherit" }}>
              <LogoutIcon primary="LogOut" onClick={logOutClick} />
            </Link>
          ) : (
            <Link to="/login" style={{ textDecoration: "none", color: "inherit" }}>
              <ListItemText primary="LogIn" />
            </Link>
          )}
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <AppBar position="fixed" style={{ backgroundColor: "#5b636a" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            <LocalLibraryIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
          >
            FrontEnd PathSala
          </Typography>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Link
              to="/"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Button color="inherit">Home</Button>
            </Link>
            <Link
              to="/about"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Button color="inherit">About</Button>
            </Link>
            <Link
              to="/create"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Button color="inherit">Create</Button>
            </Link>
            <Link
              to="/product"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Button color="inherit">Product List</Button>
            </Link>
            {token2 && (
              <Link to="/profile" style={{ textDecoration: "none", color: "inherit" }}>
                <Button color="inherit">Profile</Button>
              </Link>
            )}

             {/* for profile pic and name  */}

            {
              token2 && (
                <Box display="flex" alignItems="center" ml={2}>
                  {profilePic && (
                    <Avatar src={profile_pic(profilePic)} alt={userName} sx={{ width: 32, height: 32, mr: 1 }} />
                  )}
                  <Typography variant="body1" color="inherit">Hello {userName}</Typography>
                </Box>
              )
            }

            {token2 ? (
              <Button color="inherit" onClick={logOutClick}>
                 {/* LogOut  */}
                <Tooltip title="Log Out">
                  <LogoutIcon />
                </Tooltip>
              </Button>
            ) : (
              <Link to="/login" style={{ textDecoration: "none", color: "inherit" }}>
                <Button color="inherit">LogIn</Button>
              </Link>
            )}
          </Box>
          <li style={{ listStyleType: "none" }}>
            <Switch
              checked={darkMode.value}
              onChange={darkMode.toggle}
              color="default"
              inputProps={{ "aria-label": "dark mode toggle" }}
            />
          </li>

           {/* Dark mode switch  */}

          {/* <Box display="flex" alignItems="center">
            <Typography variant="body1" color={darkMode.value ? '#f5f5f5' : '#37474f'}>
              {darkMode.value ? 'Dark Mode' : 'Light Mode'}
            </Typography>
            <DarkModeSwitch
              checked={darkMode.value}
              onChange={darkMode.toggle}
              inputProps={{ 'aria-label': 'dark mode toggle' }}
            />
          </Box> */}
          
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="top"
              open={isDrawerOpen}
              onClose={toggleDrawer(false)}
              PaperProps={{
                sx: {
                  width: "100vw",
                  margin: 0,
                  padding: 0,
                  overflowX: "hidden"
                }
              }}
            >
              {drawerList}
            </Drawer>
          </Box>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
            sx={{ display: { xs: "flex", md: "none" } }}
          >
            <LocalLibraryIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            FrontEnd PathSala
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;


