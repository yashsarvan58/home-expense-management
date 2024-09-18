import React from 'react'
import { useNavigate } from 'react-router-dom'

const Auth = ({children}) => {
    
  const navigate=useNavigate()
const token = localStorage.getItem("auth")
if(!token){
  navigate('/')
}else{
  navigate('/home')
}
  return (

    <div>
      {children}
    </div>
  )
}

export default Auth
