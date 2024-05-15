import { useLoaderData } from "react-router-dom";
import Singlecard from "../components/singlecard";


const Allcard = () => {
     
    const volunteer = useLoaderData();

    return (
        <div>
            <h2>All Card items: {volunteer.length} </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-6">
            {
                volunteer.map(volun => (
                    <Singlecard key={volun._id} volun={volun}></Singlecard>
                )

                )
            }
            </div>
        </div>
    );
};

export default Allcard;