import React from 'react'
import Routes from './screens/config/Routes'
import { RouterProvider } from 'react-router-dom'
import './app.css'

import { ToastContainer, } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const App = () => {
  return (
    <>
  <ToastContainer/>
  <RouterProvider router={Routes} />
   
   
    </> 
  )
}

export default App
