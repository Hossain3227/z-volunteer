import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const Carddetails = () => {
    
    const {user} = useContext(AuthContext)
    const volun = useLoaderData()

    const {_id,
        image,
        title,
        Description,
        Category,
        Location,
        volunteer_needed,
        Deadline,
        Organizer_name,
        Organizer_email,
        } = volun || {};

    return (
        <div className="flex md:flex-row flex-col gap-4 my-12">

            <div className="md:w-1/2 w-full p-4">
             <img className="rounded-lg" src={image} alt="" />
            </div>
            <div className="md:w-1/2 w-full p-4">
                <h2 className="text-4xl mb-4"> Volunteer details: </h2>
                <h2 className="text-2xl mb-2">Title: {title}</h2>
                <p className="mb-4">Details: {Description}</p>

                <div className="flex justify-between mb-4">
                <span className="text-blue-800 bg-blue-200 rounded-[15px] px-3 py-1">Place: {Location}</span>
                <span className="text-blue-800 bg-blue-200 rounded-[15px] px-3 py-1">Volunteer required: {volunteer_needed}</span>
                </div>
                
                <div className="flex justify-between text-[18px] mb-4">
            <span className="bg-blue-200 text-blue-800 text-xs px-4 py-2 rounded-lg w-[40%]">Category: {Category}</span>
            <span className= "text-red-800 bg-red-200 px-3 py-1 rounded-lg">Deadline:{Deadline}</span>
        </div>
        <div className="card-actions">

            <button className="btn btn-primary"> Be a volunteer</button>
        </div>
            </div>
            
        </div>
    );
};

export default Carddetails;