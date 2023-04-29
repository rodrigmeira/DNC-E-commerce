import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Login from './views/Login/Login';
import Home from './views/Home/Home';
import AddToCart from './views/AddToCart/AddToCart';
import Cart from './views/Cart/Cart';
import Checkout from './views/Checkout/Checkout';
import {PRODUCTS_MOCK} from "./mock/mock";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home data={PRODUCTS_MOCK} />,
  },
  {
    path: "/addToCart/:productId",
    element: <AddToCart data={PRODUCTS_MOCK}/>,
  },
  {
    path: "/cart/:productId",
    element: <Cart data={PRODUCTS_MOCK}/>,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)