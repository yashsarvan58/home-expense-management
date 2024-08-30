
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
      <img  className="image"  src="src\images\grocery.webp" alt="" />
      
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



// 2

// import React, { useId } from 'react'
// import { Formik } from 'formik'
// import * as yup from 'yup'
// import { useNavigate } from 'react-router-dom'





// const loginFormValidationSchema = yup.object().shape({
//   email: yup.string().required().email().transform(val=>val.toLocaleLowerCase()),
//   password: yup.string().required().min(3)
// })

// const Login = () => {
//   const navigate = useNavigate()

//   return (
//     <div>
//       <h1>Login</h1>
//       <Formik
//         initialValues={{ email: "", password: "" }}
//         validationSchema={loginFormValidationSchema}
//         onSubmit={(values, {setSubmitting}) => {
//           values.email = values.email.toLocaleLowerCase()}}
//       >
//         {({ values, errors, handleBlur, handleChange, touched, handleSubmit, isSubmitting }) => (
//           <form onSubmit={handleSubmit}>

//             <div>
              
//               <input
//                 type="text"
//                 name='email'
//                 value={values.email}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//               /><br />
//               {touched.email && errors.email}

//             </div>

//             <div>
              
//               <input
//                 type="password"
//                 name='password'
//                 value={values.password}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//               /><br />
//               {touched.password && errors.password}

//             </div>

//             <button disabled={isSubmitting}>Login</button>
//           </form>)}

          
//       </Formik>
      
//     </div>
//   )
// }

// export default Login

// 3







