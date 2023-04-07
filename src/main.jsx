import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Shop from './components/Shop/Shop';
import Home from './components/Home/Home';
import Order from './components/Order/Order';
import Inventory from './components/Inventory/Inventory';
import CartProductsLoader from './components/Loaders/CartProductsLoader/CartProductLoader';
import Chackout from './components/Chackout/Chackout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Shop></Shop>
      },
      {
        path: "chackout",
        element: <Chackout></Chackout>
      },
      {
        path: "/order",
        element: <Order></Order>,
        loader: CartProductsLoader
      },
      {
        path: "/inventory",
        element: <Inventory></Inventory>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
