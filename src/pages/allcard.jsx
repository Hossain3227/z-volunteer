
import Singlecard from "../components/singlecard";
import { useEffect, useState } from "react";
import axios from "axios";


const Allcard = () => {
     
    // const volunteer = useLoaderData();

    const [ipages,setipages] = useState(6)
    const[sum,setsum] = useState(0)
    const [current,setcurrent] = useState(1)
    const [filter,setfilter] = useState('')
    const [search,setsearch] = useState([])
    const [sText,setsText] = useState('')
    
    const [volunteer, setVolunTeers] = useState([])
        useEffect(() => {
        const getData = async () => {
        const { data } = await axios(`https://volunteer-server-beta.vercel.app/all-vols?page=${current}&size=${ipages}&filter=${filter}&search=${search}`)
        setVolunTeers(data)
        
        }
        getData()
        }, [current,filter,ipages,search])


        
        useEffect(() => {
        const getSum = async () => {
        const { data } = await axios(`https://volunteer-server-beta.vercel.app/vol-sum?filter=${filter}&search=${search}`)
        
        setsum(data.sum)
        }
        getSum()
        }, [filter,search])


        const pageNum =  Math.ceil(sum/ipages)
        const pages =  [...Array(pageNum).keys()].map(element => element + 1)
 
        const handlePages = (value) =>{
            console.log(value);
            setcurrent(value)
        }

        const handleReset = () =>{
            setfilter('')
            setsearch('')
            setsText('')
        }

        const handleSearch = e =>{
            e.preventDefault()
            // const text = e.target.search.value 
            setsearch(sText)
        }

    return (
        <div>
            <h2>All Card items: {volunteer.length} </h2>

            <div className="flex items-center justify-center gap-4"> 

                <div className="flex my-10 gap-4">

                <select
                onChange={e => {setfilter(e.target.value)
                 setcurrent(1)
                }}
                name='Category'
                id='Category'
                className='border p-2 rounded-md'
                value={filter}
              >
                <option value=''>Category wise filter</option>
                <option value='education'>education</option>
                <option value='healthcare'>healthcare</option>
                <option value='social service'>social service</option>
                <option value='animal welfare'>animal welfare</option>
                <option value='environmental conservation'>environmental conservation</option>
                <option value='community development'>Community development</option>
              </select>
                <form onSubmit={handleSearch}>
                <div>
              <label className="input input-bordered flex items-center gap-2">
              <input type="text" onChange={e => setsText(e.target.value)}
              value={sText}
              className="grow" placeholder="Search" name="search" />
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path        fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
              </label>
              </div>
                </form>
              

                <div>

                <button onClick={handleReset} className="btn btn-primary">reset</button>
                </div>
              
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

                <button disabled={current === 1} onClick={() => handlePages(current - 1)} className="btn bg-red-500 text-white">
                    Previous
                </button>
                </div>
                <div>
                    
                {pages.map(btnNum => (
                <button
                onClick={() => handlePages(btnNum)}
                key={btnNum}
                className={`hidden ${current === btnNum? 'bg-red-400 text-white':''} px-4 py-2 mx-1 transition-colors duration-300 transform  rounded-md sm:inline hover:bg-red-400  hover:text-white`}
                >
                {btnNum}
                </button>
          ))}
                </div>

                <div>
                    <button disabled={current === pageNum} onClick={() => handlePages(current + 1)} className="btn bg-red-500 text-white">
                        next
                    </button>
                </div>



                
            </div>
        </div>
    );
};

export default Allcard;