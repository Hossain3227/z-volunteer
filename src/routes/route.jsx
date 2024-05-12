import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/root";
import Home from "../pages/home";
import Login from "../pages/login";
import Register from "../pages/register";


const Route = createBrowserRouter([

    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
            index:true,
            element:<Home></Home>
            },
            {
            path:'/login',
            element:<Login></Login>
            },
            {
            path:'/register',
            element:<Register></Register>
            },

    
    ]
    }
])

export default Route;