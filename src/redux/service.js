
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
    
    
  })
})

export default homeExpenseManegerApiSlice
export const { useLoginMutation} = homeExpenseManegerApiSlice