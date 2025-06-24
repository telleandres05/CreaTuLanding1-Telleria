import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from "react-router"
import { CartProv } from './context/cartProvider.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProv>
    <App />
    </CartProv>
  </StrictMode>,
)
