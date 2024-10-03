import { useState } from 'react'
// import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Pages/auth/Login/Login';
import Registration from './Pages/auth/Registration/Registration';
import Create from './Pages/cms/Create/Create';
import About from './Pages/cms/About/About';
import Home from './Pages/cms/Home/Home';
import ProductList from './Pages/cms/ProductList/ProductList';
function App() {

  return (
    <>
 <Router>
 
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />          
          <Route path="/create" element={<Create/>} />
          <Route path="/product" element={<ProductList/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/" element={<Home/>} />
        </Routes>
        
      </Router>
    
    </>
  )
}

export default App
