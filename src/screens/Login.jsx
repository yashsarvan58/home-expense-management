
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Formik, Form, Field} from 'formik';
import * as Yup from 'yup';


const validationSchema = Yup.object({
  username: Yup.string().required('Username is required'),
  password: Yup.string().min(8).required('Password is required'),
});

const Login = () => {
  const navigate = useNavigate();

  
  const handleSubmit = (values) => {
    const { username, password } = values;
    const USERNAME = "yashsarvan77";
    const PASSWORD = "17071997";

    if (username === USERNAME && password === PASSWORD) {
      localStorage.setItem("is logged in", "1");
      toast("Successfully logged in");
      navigate("/home");
    } 
    else{
      toast("Invalid username or password");
    }
  };

  return (
    <div className="container">
      <img className="image" src="src/images/grocery.webp" alt="grocery" />

      <div>
        <div className="home">
          <h1> LOGIN HOME </h1>
        </div>

        <Formik
          initialValues={{ username: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          
        >
          {({values, errors, touched,}) => (
            <Form >
              <div className="inputs-details">
                <div>
                  <Field
                    className="username"
                    name="username"
                    placeholder="Username"
                    type="text"
 

                  />
                {errors.username && touched.username && <span className='red'>{errors.username}</span>}
                </div>

                <div>
                  <Field
                    className="password"
                    placeholder="Password"
                    name="password"
                    type="password"
                    
                    
                  />
                {errors.password && touched.password && <span className='red'>{errors.password}</span>}
                  
                </div>
              </div>
              <br />
              <button className="button" type="submit">
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






