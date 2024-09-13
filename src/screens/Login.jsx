import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useLoginMutation } from "../redux/service";

const validationSchema = Yup.object({
  email: Yup.string().required("email is required"),
  password: Yup.string().min(5).required("Password is required"),
});

const submitForm = async (formObj) => {
    formObj.adminCode = "ADMIN1234";
    setErrorMsg("")
    let response = await ApiService.fetchData("login","POST",formObj);
    console.log(response)
    if(response.status != 'err'){
        localStorage.setItem("currentUsers", JSON.stringify(response));
        navigate('/admin');
    }else{
        setErrorMsg(response.message)
    }}

const Login = () => {
  const navigate = useNavigate();
  const [login] = useLoginMutation()

  //   const handleSubmit = (values) => {
  //     const { username, password } = values;
  //     const USERNAME = "yashsarvan77";
  //     const PASSWORD = "78787878";

  //     if (username === USERNAME && password === PASSWORD) {
  //       localStorage.setItem("is logged in", "1");
  //       toast("Successfully logged in");
  //       navigate("/home");
  //     }
  //     else{
  //       toast("Invalid username or password");
  //     }
  //   };

  return (
    <div className="main-container">
      <div className="container">
        <Formik
          initialValues={{ email: "", password: "",adminCode: "ADMIN1234" }}
          validationSchema={validationSchema}
          onSubmit={(values)=>{
            login(values)
            .then((res)=>{
                console.log(res)
                if(res.data.status){
                    navigate('/home')
                    localStorage.setItem("auth",res.data.token)
                }
            })
          }}
        >
          {({ errors, touched }) => (
            <Form >
              <div className="manager">
                <h1> HOME EXPENSE MANAGER </h1>
              </div>
              <div className="inputs-details">
                <div className="form">
                  <Field
                    className="email"
                    name="email"
                    placeholder="Username"
                    type="text"
                  />
                  {errors.username && touched.username && (
                    <span className="red">{errors.username}</span>
                  )}
                </div>

                <div>
                  <Field
                    className="password"
                    placeholder="Password"
                    name="password"
                    type="password"
                  />
                  {errors.password && touched.password && (
                    <span className="red">{errors.password}</span>
                  )}
                </div>
              </div>
              <br />
             <button  className="button" type="submit">
                Login
              </button>
              
                <div className="dont">
                <p >Don't have an Account<a href=""> Registration </a></p>  
              </div>
              
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
