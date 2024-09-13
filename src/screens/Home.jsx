
import React, { useState } from "react";
import { IoMdHome } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegBell, FaGasPump } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { MdElectricBolt } from "react-icons/md";
import { TbDeviceMobileMessage } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("expense");
  const [remark, setRemark] = useState("");
  const [date, setDate] = useState("");
  const [transactions, setTransactions] = useState([]);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/transactions');
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!amount || !remark || !date) {
      alert("Please fill all fields.");
      return;
    }

    const newTransaction = {
      amount,
      type,
      remark,
      date,
    };

    setTransactions([...transactions, newTransaction]);

  
    setAmount("");
    setType("expense");
    setRemark("");
    setDate("");
  };

  return (
    <>
      <div className="image2">
        <div className="heading">
          <div className="icon">
            <IoMdHome fontSize={40} />
          </div>

          <div className="navbar">
            <button className="dashboard">Dashboard</button>
            <button className="transaction" onClick={handleClick}>Transaction</button>
            <button className="history">History</button>
          </div>

          <div className="profile">
            <div className="setting">
              <button className="settingicon">
                <IoSettingsOutline className="settingicon" fontSize={25} />
              </button>
              <button className="bellicon">
                <FaRegBell className="bellicon" fontSize={25} />
              </button>
              <button className="profileicon">
                <CgProfile className="profileicon" fontSize={25} />
              </button>
            </div>
          </div>
        </div>

        <div className="main">
          <div className="balance">
            <div className="expense">
              <p className="overview" style={{ color: "#2e2222aa" }}>Balance overview</p>
              <h1 className="rupee"> ₹ 21,847.00 </h1>
            </div>
            <div className="income">
              <p className="Expenses"> Expense & Incomes </p>
              <div className="totel">
                <div className="totelincome">+ ₹ 15,000 <br /> totelincome this month</div>
                <br />
                <div className="toteloutcomes">- ₹ 12,000 <br /> totel expense this month</div>
              </div>
            </div>
          </div>

          <div className="saving">
            <div className="headings">
              <p className="paragraph2"> Saving Plan </p>
            </div>
            <div>
              <h1 className="savingplan">2 saving plans</h1>
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
          <form className="amount" onSubmit={handleSubmit}>
            <h2 className="haed">Amount:</h2>
            <input
              className="type"
              type=""
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter the amount"
            />

            <h2 className="types">Type</h2>
            <select
              className="exbutton"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="expense">Expense</option>
              <option value="income">Income</option>
            </select>

            <h2 className="haed">Remark</h2>
            <input
              className="remark"
              type="text"
              value={remark}
              onChange={(e) => setRemark(e.target.value)}
              placeholder="Enter a remark"
            />

            <h2 className="haed">Date</h2>
            <input
              className="date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />

            <div>
              <button className="addbutton" type="submit">Add Transaction</button>
            </div>
          </form>

          
        </div>
      </div>
    </>
  );
};

export default Home;


