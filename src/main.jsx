import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Toaster } from 'react-hot-toast';

if (typeof global === "undefined") {
  window.global = window;
}

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <>
  <Toaster
      position="top-center"
      reverseOrder={false}
      gutter={8}
      containerClassName=""
      containerStyle={{}}
      toastOptions={{
        className: "",
        duration: 5000,
        style: {
          background: "#363636",
          color: "#fff"
        },
        success: {
          duration: 3000,
          theme: {
            primary: "green",
            secondary: "black"
          }
        }
      }}
    />
    <App />
    
    <ToastContainer />
   {/* </StrictMode>, */}
  </>
)
