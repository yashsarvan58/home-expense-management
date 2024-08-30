import React from "react";
import { IoMdHome } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";


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

       <div className="balance">
       
        <div className="expense"><p className="overview"> Balance overview </p></div>
        <div className="income"> </div>
          
        </div>
    </>
  );
};

export default Home;
