import {createBrowserRouter} from 'react-router-dom'
import Login from '../Login'
import Home from '../Home'
import Transactions from '../../Transactions'

const Routes = createBrowserRouter([
    
      
    
        {
          path:"/",
          element: <Login/>       
        },
        {
          path:"/home",
          element:<Home/>
        },
        {
          path:"/transactions",
          element:<Transactions/>
        }
  
  ])
  
  export default Routes