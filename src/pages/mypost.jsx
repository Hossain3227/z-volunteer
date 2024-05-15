import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";


const Mypost = () => {
    
    const {user} = useContext(AuthContext)
    const [volunter, setvolunteer] = useState([])

    useEffect( () =>{
        
        getData()

    },[user])

    // if(user?.email){
    
    //   }

    const getData = async () => {
      console.log(user?.email);
      const {data} = await axios(`http://localhost:5000/volunteers/${user?.email}`)
      setvolunteer(data)

  }

    console.log(volunter);


    const handleDelete = async id => {
      try {
        const { data } = await axios.delete(`http://localhost:5000/volunteer/${id}`)
        console.log(data)
        toast.success('Deleted')
  
        
        getData()
      } catch (err) {
        console.log(err.message)
        toast.error(err.message)
      }
    }
    
    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>title</th>
        <th>deadline</th>
        <th>category</th>
        <th>edit</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     
        { volunter.map(vol => (
          <tr key={vol._id}>
          <th>
            <label>
              <input type="checkbox" className="checkbox" />
            </label>
          </th>
          <td>
            <div className="flex items-center gap-3">
              <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                  <img src={vol.Organizer?.photo} alt="Avatar Tailwind CSS Component" />
                </div>
              </div>
              <div>
                <div className="font-bold">{vol.Organizer?.name}</div>
                <div className="text-sm opacity-50">{vol.Location}</div>
              </div>
            </div>
          </td>
          <td>
            {vol.title}
            <br/>
            
          </td>
          <td>{new Date(vol.Deadline).toLocaleDateString()}</td> 
          <td>{vol.Category}</td>

          <th>
            <Link to={`/update/${vol._id}`} className="btn btn-ghost btn-xs">update</Link>
            <button onClick={() => handleDelete(vol._id)} className="btn">Delete</button>
          </th>
        </tr>
        )

        )}
        
    
     
      
      
    </tbody>
    
    
  </table>
</div>
        </div>
    );
};

export default Mypost;