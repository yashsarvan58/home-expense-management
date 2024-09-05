
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";

const USERNAME = "yashsarvan77"
const PASSWORD = "17071997"




const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
 const navigate=useNavigate()



  const checkLogin = ()=>{
    if(username == USERNAME && password == PASSWORD){
      localStorage.setItem("is logged in","1")
      toast("sucsessfully logged in ")
      navigate('/home')
    }else{
      toast("invalid user or password ")
    }

  }
  return (
    <>

      <div className="container">
      <img  className="image"  src="src\images\grocery.webp" alt="grocery" />
      
       <div>
       <div className="home">
          <h1> LOGIN HOME </h1>
        </div>

        <div className="inputs-details">
         <input className="username"
          placeholder="username" 
          type="username" 
          value={username}
          onChange={e=>setUsername(e.target.value)} />

         <input className="password"
          placeholder="password"
          type="password"
          value={password}
          onChange={e=>setPassword(e.target.value)}  />

        </div>
        <br />
         <div><button  className="button" onClick={checkLogin} type="submit">Login</button></div>
       </div>
      </div>
      
    </>
  );
};

export default Login;











