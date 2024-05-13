import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/root";
import Home from "../pages/home";
import Login from "../pages/login";
import Register from "../pages/register";
import Carddetails from "../pages/carddetails";


const Route = createBrowserRouter([

    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
            index:true,
            element:<Home></Home>,
            loader: () => fetch('http://localhost:5000/volunteer'),
            },
            {
            path:'/login',
            element:<Login></Login>
            },
            {
            path:'/register',
            element:<Register></Register>
            },
            {
            path:'/volunteer/:id',
            element:<Carddetails></Carddetails>,
            loader: ({params}) => fetch(`http://localhost:5000/volunteer/${params.id}`)
            },

    
    ]
    }
])

export default Route;