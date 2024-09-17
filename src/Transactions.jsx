// import React from 'react'

// const Transactions = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Transactions


import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';


const sampleTransactions = [
  { amount: '500', type: 'expense', remark: 'Groceries', date: '2024-09-01' },
  { amount: '1500', type: 'income', remark: 'Salary', date: '2024-09-02' },
];

const validationSchema = Yup.object({
  amount: Yup.number().required('Amount is required').positive('Amount must be positive'),
  type: Yup.string().required('Type is required'),
  remark: Yup.string().required('Remark is required'),
  date: Yup.date().required('Date is required').nullable(),
});

const Transactions = () => {
  const handleSubmit = (values, { resetForm }) => {
    
    console.log(values);
    resetForm();
  };

  return (
    <div>
      <h2>Transaction Table</h2>
      
      <Formik
        initialValues={{ amount: '', type: 'expense', remark: '', date: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className="transaction-form">
            <h3>Add Transaction</h3>

            <label htmlFor="amount">Amount:</label>
            <Field
              id="amount"
              name="amount"
              type="text"
              placeholder="Enter amount"
            />
            {errors.amount && touched.amount ? <div>{errors.amount}</div> : null}

            <label htmlFor="type">Type:</label>
            <Field as="select" id="type" name="type">
              <option value="expense">Expense</option>
              <option value="income">Income</option>
            </Field>
            {errors.type && touched.type ? <div>{errors.type}</div> : null}

            <label htmlFor="remark">Remark:</label>
            <Field
              id="remark"
              name="remark"
              type="text"
              placeholder="Enter remark"
            />
            {errors.remark && touched.remark ? <div>{errors.remark}</div> : null}

            <label htmlFor="date">Date:</label>
            <Field
              id="date"
              name="date"
              type="date"
            />
            {errors.date && touched.date ? <div>{errors.date}</div> : null}

            <button type="submit">Add Transaction</button>
          </Form>
        )}
      </Formik>

      <table className='tb'>
        <thead>
          <tr>
            <th>Amount</th>
            <th>Type</th>
            <th>Remark</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {sampleTransactions.length > 0 ? (
            sampleTransactions.map((transaction, index) => (
              <tr key={index}>
                <td>{transaction.amount}</td>
                <td>{transaction.type}</td>
                <td>{transaction.remark}</td>
                <td>{transaction.date}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No transactions found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;


