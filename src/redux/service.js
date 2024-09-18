
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const homeExpenseManegerApiSlice = createApi({
  reducerPath:"shopApi",
  baseQuery:fetchBaseQuery({baseUrl:import.meta.env.VITE_APP_BASE_URL}),
  endpoints:(builder)=>({
    login:builder.mutation({
      query:(loginData)=>({
        url:"/admin/login",
        method:"POST",
        body:loginData
      })
    }),
    transactionAdd:builder.mutation({
      query:(body)=>({
        url:"/transaction/add-transaction",
        method:"POST",
        body
      })
    }),
    transactionGet:builder.query({
      query:(transactiondata)=>({
        url:"/transaction/get-transaction",
        method:"GET",
        body:transactiondata
      })
    }),
    
    
  })
})

export default homeExpenseManegerApiSlice
export const { useLoginMutation,useTransactionAddMutation,useTransactionGetQuery} = homeExpenseManegerApiSlice