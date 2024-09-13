import { configureStore } from "@reduxjs/toolkit";
import homeExpenseManegerApiSlice from "../redux/service";

const Store = configureStore({
    reducer: {

        [homeExpenseManegerApiSlice.reducerPath]: homeExpenseManegerApiSlice.reducer

},
middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(homeExpenseManegerApiSlice.middleware)
})
export default Store;