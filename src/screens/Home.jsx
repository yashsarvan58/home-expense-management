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
      <div className="image">
        <div className="heading">
          <div className="icon">
            <IoMdHome fontSize={40} />
          </div>

          <div className="navbar">
            <button className="dashboard">Dashboard</button>
            <button className="transaction">Transaction</button>
            <button className="history">history</button>
          </div>

          <div className="profile">
            <div className="setting">
              <button>
                <IoSettingsOutline className="settingicon" fontSize={25} />
              </button>
              <button>
                <FaRegBell className="bellicon" fontSize={25} />
              </button>
              <button>
                <CgProfile className="profileicon" fontSize={25} />
              </button>
            </div>
          </div>
        </div>

        <div className="main">
          <div className="balance">
            <div className="expense">
              <p className="overview" style={{ color: "#2e2222aa" }}>
                Balance overview
              </p>
              <h1 className="rupee"> ₹ 21,847.00 </h1>
            </div>
            <div className="income">
              <p className="Expenses"> Expense & Incomes </p>
              <div className="totel">
                <div className="totelincome">
                  + ₹ 15,000 <br />
                  totelincome this month
                </div>
                <br />
                <div className="toteloutcomes">
                  - ₹ 12,000 <br />
                  totel expense this month
                </div>
              </div>
            </div>
          </div>

          <div className="saving">
            <div className="headings">
              <p className="paragraph2"> saving plan </p>
            </div>
            <div>
              <h1 className="savingplan">2 saving plan</h1>
            </div>

            <div className="heading2">
              <div className="petrol">
                <FaGasPump />
                <p>Petrol</p>1,000
              </div>
              <div className="electicity">
                <MdElectricBolt />
                <p>Electricity bill</p>
              </div>
              <div className="mobilerecharge">
                <TbDeviceMobileMessage />
                Mobile Recharge
              </div>
            </div>
          </div>
        </div>

        <div className="add">
          <h1 className="trasactionheading">Add Transactions</h1>
          <div className="amount">
            <h2 className="haed">amount:</h2>
            <input className="type" type="amount" placeholder="amount" />

            <h2 className="types">type</h2>

            <select className="exbutton">
              <option value=""> expense</option>
              <option value=""> income</option>
            </select>

            <h2 className="haed">Remark</h2>

            <input className="remark" type="text" placeholder="Enter a remark"/>
            <div>
              <button className="addbutton">Add transaction</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
