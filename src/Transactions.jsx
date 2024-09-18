
import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { useTransactionGetQuery } from './redux/service';



const validationSchema = Yup.object({
  amount: Yup.number().required('Amount is required').positive('Amount must be positive'),
  type: Yup.string().required('Type is required'),
  remark: Yup.string().required('Remark is required'),
  date: Yup.date().required('Date is required').nullable(),
});

const Transactions = () => {
  
  const {data}=useTransactionGetQuery()
  console.log(data)


  return (
    <div>

    </div>
  );
};

export default Transactions;





