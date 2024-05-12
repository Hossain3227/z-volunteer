import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/root";


const Route = createBrowserRouter([

    {
        path:'/',
        element:<Root></Root>
    }
])

export default Route;