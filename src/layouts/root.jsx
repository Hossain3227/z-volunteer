import { Outlet } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";


const Root = () => {
    return (
        <div className="">
            <div className="max-w-6xl mx-auto">
            <Header></Header>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
        
    );
};

export default Root;