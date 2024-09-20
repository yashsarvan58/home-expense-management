
// import React, { useState } from "react";
// import { IoMdHome } from "react-icons/io";
// import { IoSettingsOutline } from "react-icons/io5";
// import { FaRegBell, FaGasPump } from "react-icons/fa";
// import { CgProfile } from "react-icons/cg";
// import { MdElectricBolt } from "react-icons/md";
// import { TbDeviceMobileMessage } from "react-icons/tb";
// import { useNavigate } from "react-router-dom";

// const Home = () => {
//   const [amount, setAmount] = useState("");
//   const [type, setType] = useState("expense");
//   const [remark, setRemark] = useState("");
//   const [date, setDate] = useState("");
//   const [transactions, setTransactions] = useState([]);

//   const navigate = useNavigate();

//   const handleClick = () => {
//     navigate('/transactions');
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     if (!amount || !remark || !date) {
//       alert("Please fill all fields.");
//       return;
//     }

//     const newTransaction = {
//       amount,
//       type,
//       remark,
//       date,
//     };

//     setTransactions([...transactions, newTransaction]);

  
//     setAmount("");
//     setType("expense");
//     setRemark("");
//     setDate("");
//   };

//   return (
//     <>
//       <div className="image2">
//         <div className="heading">
//           <div className="icon">
//             <IoMdHome fontSize={40} />
//           </div>

//           <div className="navbar">
//             <button className="dashboard">Dashboard</button>
//             <button className="transaction" onClick={handleClick}>Transaction</button>
//             <button className="history">History</button>
//           </div>

//           <div className="profile">
//             <div className="setting">
//               <button className="settingicon">
//                 <IoSettingsOutline className="settingicon" fontSize={25} />
//               </button>
//               <button className="bellicon">
//                 <FaRegBell className="bellicon" fontSize={25} />
//               </button>
//               <button className="profileicon">
//                 <CgProfile className="profileicon" fontSize={25} />
//               </button>
//             </div>
//           </div>
//         </div>

//         <div className="main">
//           <div className="balance">
//             <div className="expense">
//               <p className="overview" style={{ color: "#2e2222aa" }}>Balance overview</p>
//               <h1 className="rupee"> ₹ 21,847.00 </h1>
//             </div>
//             <div className="income">
//               <p className="Expenses"> Expense & Incomes </p>
//               <div className="totel">
//                 <div className="totelincome">+ ₹ 15,000 <br /> totelincome this month</div>
//                 <br />
//                 <div className="toteloutcomes">- ₹ 12,000 <br /> totel expense this month</div>
//               </div>
//             </div>
//           </div>

//           <div className="saving">
//             <div className="headings">
//               <p className="paragraph2"> Saving Plan </p>
//             </div>
//             <div>
//               <h1 className="savingplan">2 saving plans</h1>
//             </div>

//             <div className="heading2">
//               <div className="petrol">
//                 <FaGasPump />
//                 <p>Petrol</p>1,000
//               </div>
//               <div className="electicity">
//                 <MdElectricBolt />
//                 <p>Electricity bill</p>
//               </div>
//               <div className="mobilerecharge">
//                 <TbDeviceMobileMessage />
//                 Mobile Recharge
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="add">
//           <h1 className="trasactionheading">Add Transactions</h1>
//           <form className="amount" onSubmit={handleSubmit}>
//             <h2 className="haed">Amount:</h2>
//             <input
//               className="type"
//               type=""
//               value={amount}
//               onChange={(e) => setAmount(e.target.value)}
//               placeholder="Enter the amount"
//             />

//             <h2 className="types">Type</h2>
//             <select
//               className="exbutton"
//               value={type}
//               onChange={(e) => setType(e.target.value)}
//             >
//               <option value="expense">Expense</option>
//               <option value="income">Income</option>
//             </select>

//             <h2 className="haed">Remark</h2>
//             <input
//               className="remark"
//               type="text"
//               value={remark}
//               onChange={(e) => setRemark(e.target.value)}
//               placeholder="Enter a remark"
//             />

//             <h2 className="haed">Date</h2>
//             <input
//               className="date"
//               type="date"
//               value={date}
//               onChange={(e) => setDate(e.target.value)}
//             />

//             <div>
//               <button className="addbutton"  type="submit">Add Transaction</button>
//             </div>
//           </form>

          
//         </div>
//       </div>
//     </>
//   );
// };

// export default Home;


// import React, { useState } from "react";
// import { IoMdHome } from "react-icons/io";
// import { IoSettingsOutline } from "react-icons/io5";
// import { FaRegBell, FaGasPump } from "react-icons/fa";
// import { CgProfile } from "react-icons/cg";
// import { MdElectricBolt } from "react-icons/md";
// import { TbDeviceMobileMessage } from "react-icons/tb";
// import { useNavigate } from "react-router-dom";
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import { useLoginMutation, useTransactionAddMutation } from "../redux/service";
// import * as Yup from 'yup';

// const Home = () => {

//   const [transactions, setTransactions] = useState([]);
//   const [ transactionAdd]=useTransactionAddMutation()
//   const navigate = useNavigate();

//   const handleClick = () => {
//     navigate('/transactions');
//   };

//   const validationSchema = Yup.object({
//     amount: Yup.number().required('Amount is required').positive('Amount must be positive'),
//     type: Yup.string().required('Type is required'),
//     remark: Yup.string().required('Remark is required'),
//     date: Yup.date().required('Date is required').nullable(),
//   });

//   const handleSubmit = (values, { resetForm }) => {
//     transactionAdd(values).then((res)=>{
//       console.log(res.data?.data.data)
//     })
//     setTransactions([...transactions, values]);
//     resetForm();
//   };

//   return (
//     <>
//       <div className="image2">
//         <div className="heading">
//           <div className="icon">
//             <IoMdHome fontSize={40} />
//           </div>

//           <div className="navbar">
//             <button className="dashboard">Dashboard</button>
//             <button className="transaction" onClick={handleClick}>Transaction</button>
//             <button className="history">History</button>
//           </div>

//           <div className="profile">
//             <div className="setting">
//               <button className="settingicon">
//                 <IoSettingsOutline className="settingicon" fontSize={25} />
//               </button>
//               <button className="bellicon">
//                 <FaRegBell className="bellicon" fontSize={25} />
//               </button>
//               <button className="profileicon">
//                 <CgProfile className="profileicon" fontSize={25} />
//               </button>
//             </div>
//           </div>
//         </div>

//         <div className="main">
//           <div className="balance">
//             <div className="expense">
//               <p className="overview" style={{ color: "#2e2222aa" }}>Balance overview</p>
//               <h1 className="rupee"> ₹ 21,847.00 </h1>
//             </div>
//             <div className="income">
//               <p className="Expenses"> Expense & Incomes </p>
//               <div className="totel">
//                 <div className="totelincome">+ ₹ 15,000 <br /> totelincome this month</div>
//                 <br />
//                 <div className="toteloutcomes">- ₹ 12,000 <br /> totel expense this month</div>
//               </div>
//             </div>
//           </div>

//           <div className="saving">
//             <div className="headings">
//               <p className="paragraph2"> Saving Plan </p>
//             </div>
//             <div>
//               <h1 className="savingplan">2 saving plans</h1>
//             </div>

//             <div className="heading2">
//               <div className="petrol">
//                 <FaGasPump />
//                 <p>Petrol</p>1,000
//               </div>
//               <div className="electicity">
//                 <MdElectricBolt />
//                 <p>Electricity bill</p>
//               </div>
//               <div className="mobilerecharge">
//                 <TbDeviceMobileMessage />
//                 Mobile Recharge
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="add">
//           <h1 className="trasactionheading">Add Transactions</h1>
//           <Formik
//             initialValues={{ amount: '', type: 'expense', remark: '', date: '' }}
//             validationSchema={validationSchema}
            
//             onSubmit={handleSubmit}
            
            
//           >
//             {() => (
//               <Form className="amount">
//                 <h2 className="haed">Amount:</h2>
//                 <Field
//                   className="type"
//                   name="amount"
//                   placeholder="Enter the amount"
//                 />
//                 <ErrorMessage name="amount"  className="error" />

//                 <h2 className="types">Type</h2>
//                 <Field as="select" className="exbutton" name="type">
//                   <option value="expense">Expense</option>
//                   <option value="income">Income</option>
//                 </Field>
//                 <ErrorMessage name="type"  className="error" />

//                 <h2 className="haed">Remark</h2>
//                 <Field
//                   className="remark"
//                   name="remark"
//                   placeholder="Enter a remark"
//                 />
//                 <ErrorMessage name="remark"  className="error" />

//                 <h2 className="haed">Date</h2>
//                 <Field
//                   className="date"
//                   name="date"
//                   type="date"
//                 />
//                 <ErrorMessage name="date"  className="error" />

//                 <div>
//                   <button className="addbutton" type="submit">Add Transaction</button>
//                 </div>
//               </Form>
//             )}
//           </Formik>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Home;


import React, { useState } from "react";
import { IoMdHome } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegBell, FaGasPump } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { MdElectricBolt } from "react-icons/md";
import { TbDeviceMobileMessage } from "react-icons/tb";
import { useNavigate } from "react-router-dom"; 
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useTransactionAddMutation } from "../redux/service";
import arrow from "../images/arrow.jpg"
import expe from "../images/expe.avif"

import * as Yup from 'yup';

const Home = () => {
  const [transactions, setTransactions] = useState([]);
  const [transactionAdd] = useTransactionAddMutation();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/transactions');
  };

  const validationSchema = Yup.object({
    amount: Yup.number().required('Amount is required').positive('Amount must be positive'),
    type: Yup.string().required('Type is required'),
    remark: Yup.string().required('Remark is required'),
    date: Yup.date().required('Date is required').nullable(),
  });

  const handleSubmit = (values, { resetForm }) => {
    transactionAdd(values).then((res) => {
      console.log(res.data?.data.data);
    });
    setTransactions([...transactions, values]);
    resetForm();
  };

  return (
    <div className={`bg-cover bg-center`}    style={{ backgroundImage: `url(${expe})` }}>
    <div className="bg-cover h-screen ">
      <div className="flex flex-col h-full">
        <header className="flex items-center justify-between p-5 bg-opacity-30 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <IoMdHome fontSize={40} />
            <h1 className="text-xl">Dashboard</h1>
          </div>
          <nav className="flex gap-10">
            <button className="hover:text-white">Dashboard</button>
            <button className="hover:text-white" onClick={handleClick}>Transaction</button>
            <button className="hover:text-white">History</button>
          </nav>
          <div className="flex gap-5">
            <button>
              <IoSettingsOutline className="text-xl" />
            </button>
            <button>
              <FaRegBell className="text-xl" />
            </button>
            <button>
              <CgProfile className="text-xl" />
            </button>
          </div>
        </header>

        <main className="flex justify-around flex-grow p-10">
          <div className="flex flex-col gap-5 w-1/3">
            <div className="bg-white p-5 rounded-lg shadow-md backdrop-filter backdrop-blur-sm">
              <p className="text-gray-600">Balance overview</p>
              <h1 className="text-3xl">₹ 21,847.00</h1>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-md backdrop-filter backdrop-blur-sm">
              <p className="text-gray-600">Expense & Incomes</p>
              <div className="flex justify-between">
                <div className="text-green-600">+ ₹ 15,000 <br /> Total income this month</div>
                <div className="text-red-600">- ₹ 12,000 <br /> Total expense this month</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5 w-1/3">
            <h2 className="text-xl">Saving Plan</h2>
            <h1 className="text-2xl">2 saving plans</h1>
            <div className="flex justify-around bg-white rounded-lg p-5 shadow-md">
              <div className="flex items-center">
                <FaGasPump />
                <p>Petrol</p> 1,000
              </div>
              <div className="flex items-center">
                <MdElectricBolt />
                <p>Electricity bill</p>
              </div>
              <div className="flex items-center">
                <TbDeviceMobileMessage />
                Mobile Recharge
              </div>
            </div>
          </div>
        </main>

        <div className="w-1/3 mx-auto my-10  bg-white rounded-lg p-5 shadow-md backdrop-filter backdrop-blur-sm">
          <h1 className="text-2xl text-center">Add Transactions</h1>
          <Formik
            initialValues={{ amount: '', type: 'expense', remark: '', date: '' }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {() => (
              <Form className="flex flex-col gap-5">
                <div>
                  <label className="block">Amount:</label>
                  <Field className="border p-2 rounded" name="amount" placeholder="Enter the amount" />
                  <ErrorMessage name="amount" component="div" className="text-red-500" />
                </div>
                <div>
                  <label className="block">Type:</label>
                  <Field as="select" className="border p-2 rounded" name="type">
                    <option value="expense">Expense</option>
                    <option value="income">Income</option>
                  </Field>
                  <ErrorMessage name="type" component="div" className="text-red-500" />
                </div>
                <div>
                  <label className="block">Remark:</label>
                  <Field className="border p-2 rounded" name="remark" placeholder="Enter a remark" />
                  <ErrorMessage name="remark" component="div" className="text-red-500" />
                </div>
                <div>
                  <label className="block">Date:</label>
                  <Field className="border p-2 rounded" name="date" type="date" />
                  <ErrorMessage name="date" component="div" className="text-red-500" />
                </div>
                <button type="submit" className="bg-blue-500 text-white rounded p-2 hover:bg-blue-700">Add Transaction</button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Home


