
import {
    createBrowserRouter,
  } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import AddCoffee from "../Components/AddCoffee";
import UpdateCoffee from "../Components/UpdateCoffee";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children:[
        {
            path: "/",
            element: <Home></Home>,   
        },

        {
            path: "/addcoffee",
            element: <AddCoffee></AddCoffee>  
        },

        {
            path: "/updatecoffee",
            element: <UpdateCoffee></UpdateCoffee>   
        },
      ]
    },
  ]);

  export default router