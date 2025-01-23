import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root';
import ErrorPage from './components/ErrorPage';
import Home from './components/Home';
import Statistics from './components/Statistics';
import Dashboard from './components/Dashboard';
import Products from './components/Products';
import Productdetails from './components/Productdetails';



const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path:"/",
        element:<Home></Home>,
      },
      {
        path:"products/:productdatils",
        element:<Productdetails></Productdetails>,
        loader:() => fetch("./Alldata.json"),
      },
      {
        path:"Products",
        element:<Products></Products>,
      },
      {
        path:"Statistics",
        element:<Statistics></Statistics>,
        loader:()=> fetch("./Alldata.json"),
      },
      {
        path:"Dashboard",
        element:<Dashboard></Dashboard>,
        loader:() => fetch("./Alldata.json"),
      },
    ]
  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
