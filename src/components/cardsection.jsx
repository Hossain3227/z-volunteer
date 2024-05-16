// import { useEffect, useState } from "react";
import Singlecard from "./singlecard";
// import axios from "axios";


const Cardsection = ({volunteer}) => {


//     const [volunteer, setVolunTeers] = useState([])
//   useEffect(() => {
//     const getData = async () => {
//       const { data } = await axios('http://localhost:5000/volunteer')
//       setVolunTeers(data)
//     }
//     getData()
//   }, [])

   const svolunteer = volunteer.slice(0,6);

    return (
        <div className="my-12">

            <div className="flex flex-col items-center justify-center mb-6">
            <h1 className="text-5xl font-bold">Recent Volunteer Events</h1>
            <p className="text-[18px]"> Join the events quickly </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-6">
            {
                svolunteer.map(volun => (
                    <Singlecard key={volun._id} volun={volun}></Singlecard>
                )

                )
            }
            </div>
        </div>
    );
};

export default Cardsection;