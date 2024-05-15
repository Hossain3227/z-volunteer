import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";

const Myvolunterreq = () => {
    
   
    const {user} = useContext(AuthContext)
    const [request, setrequest] = useState([])


    useEffect( () =>{
        
        getData()

    },[user])

    // if(user?.email){
    
    //   }

    const getData = async () => {
      console.log(user?.email);
      const {data} = await axios(`http://localhost:5000/all-reqs/${user?.email}`)
      setrequest(data)

  }


  const handleCancel = async id => {
    try {
      
      const { data } = await axios.delete(`http://localhost:5000/requests/${id}`)
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
     
        { request.map(vol => (
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
            
            <button onClick={() => handleCancel(vol._id)} className="btn">Cancel</button>
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

export default Myvolunterreq;