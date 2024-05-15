import { Link } from "react-router-dom";


const Gotoall = () => {
    return (
        <div className="flex justify-center items-center my-10">
            <Link to={'/allcard'}>
            <button className="btn btn-primary"> Check More  </button>
            </Link>
            
        </div>
    );
};

export default Gotoall;