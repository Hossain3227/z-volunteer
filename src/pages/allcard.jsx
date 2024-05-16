
import Singlecard from "../components/singlecard";
import { useEffect, useState } from "react";
import axios from "axios";


const Allcard = () => {
     
    // const volunteer = useLoaderData();

    const [ipages,setipages] = useState(1)
    const[sum,setsum] = useState(0)
    const [current,setcurrent] = useState(1)
    
    const [volunteer, setVolunTeers] = useState([])
        useEffect(() => {
        const getData = async () => {
        const { data } = await axios(`http://localhost:5000/all-vols?page=${current}&size=${ipages}`)
        setVolunTeers(data)
        
        }
        getData()
        }, [current,ipages])


        
        useEffect(() => {
        const getSum = async () => {
        const { data } = await axios('http://localhost:5000/vol-sum')
        
        setsum(data.sum)
        }
        getSum()
        }, [])


        const pageNum =  Math.ceil(sum/ipages)
        const pages =  [...Array(pageNum).keys()].map(element => element + 1)
 
        const handlePages = (value) =>{
            console.log(value);
            setcurrent(value)
        }
    return (
        <div>
            <h2>All Card items: {volunteer.length} </h2>

            <div className="flex items-center justify-center gap-4"> 

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



            <div className="flex items-center justify-center mt-10 gap-6">
                <div className=" ">

                <button className="btn">
                    Previous
                </button>
                </div>
                <div>
                    
                {pages.map(btnNum => (
                <button
                onClick={() => handlePages(btnNum)}
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