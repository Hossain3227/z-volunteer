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
import Updatevolunter from "../pages/updatevolunter";
import Privateroute from "./privateroute";
import Myvolunterreq from "../pages/myvolunterreq";


const Route = createBrowserRouter([

    {
        path:'/',
        element:<Root></Root>,
        errorElement:<Errorpage></Errorpage>,
        children:[
            {
            index:true,
            element:<Home></Home>,
            loader: () => fetch('https://volunteer-server-beta.vercel.app/volunteer'),
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
            element:<Privateroute><Carddetails></Carddetails></Privateroute>,
            loader: ({params}) => fetch(`https://volunteer-server-beta.vercel.app/volunteer/${params.id}`)
            },
            {
            path:'/update/:id',
            element:<Privateroute><Updatevolunter></Updatevolunter></Privateroute>,
            loader: ({params}) => fetch(`https://volunteer-server-beta.vercel.app/volunteer/${params.id}`)
            },
            
            {
                path:'/add-volunteer',
                element:<Privateroute><Addvolunteer></Addvolunteer></Privateroute>
            },
            {
                path:'/allcard',
                element:<Privateroute><Allcard></Allcard></Privateroute>,
                loader: () => fetch('https://volunteer-server-beta.vercel.app/volunteer')
            },
            {
                path:'/my-post',
                element:<Mypost></Mypost>
            },
            {
                path:'/my-req',
                element:<Myvolunterreq></Myvolunterreq>,
            },

    
    ]
    }
])

export default Route;