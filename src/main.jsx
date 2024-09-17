import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import Store from './redux/Store.js'
import { ToastContainer, } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
    <StrictMode>
    <ToastContainer/>
    <App />
  </StrictMode>,
   </Provider>
)


