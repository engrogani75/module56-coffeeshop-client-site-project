
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
            loader: () => fetch('http://localhost:5000/coffee')
        },

        {
            path: "/addcoffee",
            element: <AddCoffee></AddCoffee>  
        },

        {
            path: "/updatecoffee/:id",
            element: <UpdateCoffee></UpdateCoffee>,
            loader: ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)   
        },
      ]
    },
  ]);

  export default router