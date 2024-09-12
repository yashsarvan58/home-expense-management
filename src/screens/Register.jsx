// import { Formik } from 'formik';
// import React from 'react';
// import { FaUserAlt, FaUserEdit } from "react-icons/fa";
// import { ImCheckboxChecked } from 'react-icons/im';
// import { RiLockPasswordFill } from 'react-icons/ri';
// import { Link, useNavigate } from 'react-router-dom';
// import * as yup from 'yup';


// const RegistrationSchema = yup.object().shape({
//     name: yup.string().min(2).max(20).required(),
//     userName: yup.string().min(5).required(),
//     password: yup.string().min(8).required(),
//     confirmPassword: yup.string().oneOf([yup.ref('password')], 'Passwords must match').required()
// });

// const Registration = () => {
//     const [register] = useRegisterMutation();
//     const navigate = useNavigate();

//     return (
//         <div className="background min-h-screen flex items-center justify-center bg-gray-100 p-6">
//             <Formik
//                 initialValues={{
//                     name: '',
//                     userName: '',
//                     password: '',
//                     confirmPassword: ''
//                 }}
//                 validationSchema={RegistrationSchema}

//                 onSubmit={(values, { setSubmitting }) => {
//                     console.log(values,"kkkk");

//                     register(values)
//                         .then((res) => {
//                         console.log(res)
//                         const authToken = res.data.token
//                         console.log(authToken)
//                         localStorage.setItem("authToken", authToken )
                        
//                             if (authToken){
                            
//                                 navigate("/home")
//                             }
//                         })
//                         .catch((error) => {
                            
//                             console.error('Registration error:', error);
//                         });

//                     setSubmitting(false);
//                 }}
//             >
//                 {({ values, errors, handleChange, handleBlur, isSubmitting, touched, handleSubmit }) => (
//                     <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md">
//                         <h2 className="text-2xl font-bold text-center mb-4">Registration</h2>

//                         <div className="mb-4">
//                             <label className="block text-gray-700 text-sm font-bold mb-2">
//                                 <FaUserAlt className="inline mr-2" />
//                                 Name
//                             </label>
//                             <input
//                                 type="text"
//                                 name="name"
//                                 className="border rounded w-full py-2 px-3 text-gray-700"
//                                 value={values.name}
//                                 onChange={handleChange}
//                                 onBlur={handleBlur}
//                                 placeholder="NAME"
//                             />
//                             <span className="text-red-500 text-xs">{touched.name && errors.name}</span>
//                         </div>

//                         <div className="mb-4">
//                             <label className="block text-gray-700 text-sm font-bold mb-2">
//                                 <FaUserEdit className="inline mr-2" />
//                                 Username
//                             </label>
//                             <input
//                                 type="text"
//                                 name="userName"
//                                 className="border rounded w-full py-2 px-3 text-gray-700"
//                                 value={values.userName}
//                                 onChange={handleChange}
//                                 onBlur={handleBlur}
//                                 placeholder="USERNAME"
//                             />
//                             <span className="text-red-500 text-xs">{touched.userName && errors.userName}</span>
//                         </div>

//                         <div className="mb-4">
//                             <label className="block text-gray-700 text-sm font-bold mb-2">
//                                 <RiLockPasswordFill className="inline mr-2" />
//                                 Password
//                             </label>
//                             <input
//                                 type="password"
//                                 name="password"
//                                 className="border rounded w-full py-2 px-3 text-gray-700"
//                                 value={values.password}
//                                 onChange={handleChange}
//                                 onBlur={handleBlur}
//                                 placeholder="PASSWORD"
//                             />
//                             <span className="text-red-500 text-xs">{touched.password && errors.password}</span>
//                         </div>

//                         <div className="mb-6">
//                             <label className="block text-gray-700 text-sm font-bold mb-2">
//                                 <ImCheckboxChecked className="inline mr-2" />
//                                 Confirm Password
//                             </label>
//                             <input
//                                 type="password"
//                                 name="confirmPassword"
//                                 className="border rounded w-full py-2 px-3 text-gray-700"
//                                 value={values.confirmPassword}
//                                 onChange={handleChange}
//                                 onBlur={handleBlur}
//                                 placeholder="CONFIRM PASSWORD"
//                             />
//                             <span className="text-red-500 text-xs">{touched.confirmPassword && errors.confirmPassword}</span>
//                         </div>

//                         <div className="flex items-center justify-between">
//                             <button
//                                 type="submit"
//                                 disabled={isSubmitting}

//                                 className="bg-blue-500 text-sm hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                             >
//                                 Create Account
//                             </button>
//                         </div>

//                         <p className="mt-4 text-gray-600 text-sm text-center">
//                             Already Have An Account? <Link to="/login" className="text-blue-500 hover:underline">Sign In</Link>
//                         </p>
//                     </form>
//                 )}
//             </Formik>

//             <p className="text-black bg-gray-100 font-mono ml-[50px] font-bold">
              
//             </p>
//         </div>
//     );
// };

// export default Registration;
