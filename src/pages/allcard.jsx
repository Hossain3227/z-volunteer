
import Singlecard from "../components/singlecard";
import { useEffect, useState } from "react";
import axios from "axios";


const Allcard = () => {
     
    // const volunteer = useLoaderData();

        const [volunteer, setVolunTeers] = useState([])
        useEffect(() => {
        const getData = async () => {
        const { data } = await axios('http://localhost:5000/volunteer')
        setVolunTeers(data)
        }
        getData()
        }, [])




        const pages =  [ 1, 2, 3]

    return (
        <div>
            <h2>All Card items: {volunteer.length} </h2>

            <div>

                <div className="my-10">

                <select
                name='Category'
                id='Category'
                className='border p-2 rounded-md'
              >
                <option value=''>Category wise filter</option>
                <option value='education'>education</option>
                <option value='healthcare'>healthcare</option>
                <option value='social service'>social service</option>
                <option value='animal welfare'>animal welfare</option>
                <option value='environmental conservation'>environmental conservation</option>
                <option value='community development'>Community development</option>
              </select>
                </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-6">
            {
                volunteer.map(volun => (
                    <Singlecard key={volun._id} volun={volun}></Singlecard>
                )

                )
            }
            </div>



            <div className="flex mt-10 gap-6">
                <div className=" ">

                <button className="btn">
                    Previous
                </button>
                </div>
                <div>
                    
                {pages.map(btnNum => (
                <button
                // onClick={() => handlePaginationButton(btnNum)}
                key={btnNum}
                className={`hidden px-4 py-2 mx-1 transition-colors duration-300 transform  rounded-md sm:inline hover:bg-red-400  hover:text-white`}
                >
                {btnNum}
                </button>
          ))}
                </div>

                <div>
                    <button className="btn">
                        next
                    </button>
                </div>



                
            </div>
        </div>
    );
};

export default Allcard;