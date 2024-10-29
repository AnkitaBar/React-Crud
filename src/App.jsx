import { lazy, Suspense } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import Login from './Pages/auth/Login/Login';
// import Registration from './Pages/auth/Registration/Registration';
// import Create from './Pages/cms/Create/Create';
// import About from './Pages/cms/About/About';
// import Home from './Pages/cms/Home/Home';
// import ProductList from './Pages/cms/ProductList/ProductList';
// import ProductDetails from './Pages/cms/ProductDetails/ProductDetails';
import Header from './Pages/layout/Header/Header';
import Footer from './Pages/layout/Footer/Footer';
import toast from 'react-hot-toast';
import Profile from './Pages/auth/Profile/Profile';
import { Box, CircularProgress } from '@mui/material';

const Login = lazy(()=> import(`./Pages/auth/Login/Login`))
const Registration = lazy(()=> import(`./Pages/auth/Registration/Registration`))
  const Create = lazy(()=> import(`./Pages/cms/Create/Create`))
  const About = lazy(()=> import(`./Pages/cms/About/About`))
  const Home = lazy(()=> import(`./Pages/cms/Home/Home`))
  const ProductList = lazy(()=> import(`./Pages/cms/ProductList/ProductList`))
  const ProductDetails = lazy(()=> import(`./Pages/cms/ProductDetails/ProductDetails`))


function App() {
  function Private({ children }) {
    const token =localStorage.getItem("token") || sessionStorage.getItem("token");
    return token != null || token != undefined ? (
      children
    ) : (
      <>
        <Navigate to={"/login"} />
        {toast.error("login First")}
      </>
    );
  }
  
  const publicRouting  = [
    { path: '/login', component: Login },
    { path: '/register', component: Registration },
    { path: '/', component: Home },
  ]

  const privateRouting = [
    { path: '/about', component: About },
    { path: '/create', component: Create },
    { path: '/products/:id', component: ProductDetails },
    { path: '/product', component: ProductList },
    { path: '/profile', component: Profile },
  ]

  return (
    <>
    <Suspense fallback={
       <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      height: '100vh',
                    }}
                  >
                    <CircularProgress />
                  </Box>
    }>
      <Router>
        <Header />
        <Routes>
              {publicRouting.map((route, index) => (
                <Route key={index} path={route.path} element={<route.component />} />
              ))}
              {privateRouting.map((route, index) => (
                <Route key={index} path={route.path} element=
                {
                <Private>
                  <route.component />
                </Private>
                }
                 />
              ))}
        </Routes>
        <Footer />
      </Router>
      </Suspense>
    </>
  )
}

export default App
