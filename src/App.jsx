import React from 'react'
import Routes from './screens/config/Routes'
import { RouterProvider } from 'react-router-dom'
import './app.css'





const App = () => {
  return (
    <>
  <RouterProvider router={Routes} />
   
   
    </> 
  )
}

export default App
