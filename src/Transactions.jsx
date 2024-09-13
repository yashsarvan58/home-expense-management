import React from 'react'
import { Navigate } from 'react-router-dom'


const Transactions = () => {
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("expense");
  const [remark, setRemark] = useState("");
  const [date, setDate] = useState("");
  const [transactions, setTransactions] = useState([]);
  return (
    <>
    
    
    <table className='transaction-table' width={"100%"} border={"1px"} >
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Type</th>
                  <th>Amount</th>
                  <th>Remark</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction, index) => (
                  <tr key={index}>
                    <td>{transaction.amount}</td>
                    <td>{transaction.type}</td>
                    <td>{transaction.remark}</td>
                    <td>{transaction.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
    </>
  )
  
}

export default Transactions
