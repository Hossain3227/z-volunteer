import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/root";
import Home from "../pages/home";
import Login from "../pages/login";
import Register from "../pages/register";
import Carddetails from "../pages/carddetails";
import Addvolunteer from "../pages/addvolunteer";
import Errorpage from "../pages/errorpage";
import Allcard from "../pages/allcard";
import Mypost from "../pages/mypost";


const Route = createBrowserRouter([

    {
        path:'/',
        element:<Root></Root>,
        errorElement:<Errorpage></Errorpage>,
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
            {
                path:'/add-volunteer',
                element:<Addvolunteer></Addvolunteer>
            },
            {
                path:'/allcard',
                element:<Allcard></Allcard>,
                loader: () => fetch('http://localhost:5000/volunteer')
            },
            {
                path:'/my-post',
                element:<Mypost></Mypost>
            }

    
    ]
    }
])

export default Route;