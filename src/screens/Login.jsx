
// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom';
// import { toast } from "react-toastify";

// const USERNAME = "yashsarvan77"
// const PASSWORD = "17071997"




// const Login = () => {
//   const [username, setUsername] = useState("")
//   const [password, setPassword] = useState("")
//  const navigate=useNavigate()



//   const checkLogin = ()=>{
//     if(username == USERNAME && password == PASSWORD){
//       localStorage.setItem("is logged in","1")
//       toast("sucsessfully logged in ")
//       navigate('/home')
//     }else{
//       toast("invalid user or password ")
//     }

//   }
//   return (
//     <>

//       <div className="container">
//       <img  className="image"  src="src\images\grocery.webp" alt="" />
      
//        <div>
//        <div className="home">
//           <h1> LOGIN HOME </h1>
//         </div>

//         <div className="inputs-details">
//          <input className="username"
//           placeholder="username" 
//           type="username" 
//           value={username}
//           onChange={e=>setUsername(e.target.value)} />

//          <input className="password"
//           placeholder="password"
//           type="password"
//           value={password}
//           onChange={e=>setPassword(e.target.value)}  />

//         </div>
//         <br />
//          <div><button  className="button" onClick={checkLogin} type="submit">Login</button></div>
//        </div>
//       </div>
      
//     </>
//   );
// };

// export default Login;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const USERNAME = "yashsarvan77";
const PASSWORD = "17071997";

// Validation schema using Yup
const validationSchema = Yup.object({
  username: Yup.string()
    .required('Username is required')
    .oneOf([USERNAME], 'Invalid username'),
  password: Yup.string()
    .required('Password is required')
    .oneOf([PASSWORD], 'Invalid password'),
});

const Login = () => {
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = (values) => {
    const { username, password } = values;
    if (username === USERNAME && password === PASSWORD) {
      localStorage.setItem("isLoggedIn", "1");
      toast.success("Successfully logged in");
      navigate('/home');
    } else {
      toast.error("Invalid user or password");
    }
  };

  return (
    <div className="container">
      <img className="image" src="src/images/grocery.webp" alt="Grocery" />

      <div>
        <div className="home">
          <h1>LOGIN HOME</h1>
        </div>

        <Formik
          initialValues={{ username: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="inputs-details">
              <div>
                <Field
                  className="username"
                  placeholder="Username"
                  type="text"
                  name="username"
                />
                <ErrorMessage name="username" component="div" className="error" />
              </div>

              <div>
                <Field
                  className="password"
                  placeholder="Password"
                  type="password"
                  name="password"
                />
                <ErrorMessage name="password" component="div" className="error" />
              </div>

              <br />
              <button
                className="button"
                type="submit"
                disabled={isSubmitting}
              >
                Login
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;

