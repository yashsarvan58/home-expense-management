import React from "react";
import { IoMdHome } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaGasPump } from "react-icons/fa";
import { MdElectricBolt } from "react-icons/md";
import { TbDeviceMobileMessage } from "react-icons/tb";





const Home = () => {
  return (
    <>
      <div className="heading">
        <div className="icon">
          <IoMdHome fontSize={40} />
          <h2>home</h2>
        </div>

        <div className="navbar">
          <button className="dashboard">Dashboard</button>
          <button className="transaction">Transaction</button>
          <button className="history">history</button>
        </div>

        <div className="profile">
        
        <div className="setting">
        <button ><IoSettingsOutline className="settingicon" fontSize={25} /></button>
        <button ><FaRegBell className="bellicon" fontSize={25} /></button>
        <button ><CgProfile className="profileicon" fontSize={25}/></button>
        </div>
        </div>
        </div>

       <div className="main">

       <div className="balance"> 
        <div className="expense">
        <p className="overview" style={{color:"#979797"}} > Balance overview </p>
        <h1 className="rupee" > ₹ 21,847.00 </h1>  
        </div>
        <div className="income"> <p className="Expenses"> Expense & Incomes  </p> 

        <div className="totel"> 
        <div className="totelincome">+ ₹ 15,000 <br /> 
         totelincome this month
        </div><br />
        <div className="toteloutcomes">- ₹ 12,000 <br />
         totel expense this month 
        </div>
        
        </div> 
        </div>
        </div> 

        <div className="saving"> 
          
          <div className="headings">
          <p className="paragraph2"> saving plan </p> 
          <h6>icon</h6> 
          </div>
          <div>
          <h1 className="savingplan">2 saving plan</h1>
          </div>

         

          <div className="heading2">
             
          <div className="petrol"><FaGasPump /><p>petrol</p>1,000
          </div>
          <div className="electicity"><MdElectricBolt /><p>electicity</p>
          </div>
          <div className="mobilerecharge"><TbDeviceMobileMessage />
          mobile recharge</div>
          </div>
          
          </div>
          </div>
        
          
         
    </>
  );
};

export default Home;
