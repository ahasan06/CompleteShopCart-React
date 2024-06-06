import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {RootRouter} from './router/router.jsx'
import { RouterProvider } from "react-router-dom";
import CartProvider from './context/Cart.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(

  <CartProvider>
    <RouterProvider router={RootRouter}/>

  </CartProvider>
)
