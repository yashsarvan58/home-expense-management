import {createBrowserRouter} from 'react-router-dom'
import Login from '../login'
import Home from '../Home'

const Routes = createBrowserRouter([
    
      
    
        {
          path:"/",
          element: <Login/>       
        },
        {
          path:"/home",
          element:<Home/>
        }
  
  ])
  
  export default Routes