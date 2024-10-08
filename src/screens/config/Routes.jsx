import {createBrowserRouter} from 'react-router-dom'
import Login from '../Login'
import Home from '../Home'
import Transactions from '../../Transactions'
import Register from '../Register'
import Auth from '../../components/Auth'

const Routes = createBrowserRouter([
    
      
    
        {
          path:"/",
          element:<Login/>
      
        },
        {
          path:"/home",
          element:<Home/>
        },
        {
          path:"/register",
          element:<Register/>
        },
        {
          path:"/transactions",
          element:<Transactions/>
        }
  
  ])
  
  export default Routes