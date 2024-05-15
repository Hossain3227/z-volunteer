import { useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";


const Carddetails = () => {
    
    const {user} = useContext(AuthContext)
    const volun = useLoaderData()
    const navigate = useNavigate()

    const [showModal, setShowModal] = useState(false);
  

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.target
    const requestId = _id
    const suggestion = form.suggestion.value 
    const email = user?.email

    if(user?.email === Organizer?.email)
      return toast.error('action not permitted')

    const status = 'requested'
    

    const requestData = {
        requestId,
        suggestion,
        email,
        image,
        status,
        Organizer,
        Category,
        Deadline,
        title,
        volunteer_needed,
        Organizer_email:Organizer?.email,    
    }

    try{
        const {data} = await axios.post('http://localhost:5000/requests',requestData)
        console.log(data);
        toast.success('requested')
        navigate('/my-req')
    } catch(err){
        console.log(err);
        toast.error('failed')
    }
    console.table(requestData);
    // console.log(typeof(volunteer_needed));

    
    closeModal();
  };

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
        Organizer,
        } = volun || {};

    return (
        <div className="flex md:flex-row flex-col gap-4 my-12">

            <div className="md:w-1/2 w-full p-4">
             <img className="rounded-lg" src={image} alt="" />

             <div className=" mt-4 flex items-center justify-between">
              <p className="text-[18px] ">Email: {Organizer?.email}</p>
              <div className="rounded-full object-cover w-14 h-14">
                <img className="rounded-full" src={Organizer?.photo} alt="" />
              </div>
            </div>
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
            <span className= "text-red-800 bg-red-200 px-3 py-1 rounded-lg">Deadline:{new Date(Deadline).toLocaleDateString()}</span>
        </div>


        <div className="card-actions">

            <button onClick={openModal} className="btn btn-primary"> Be a volunteer</button>
        </div>

        {/* volunteer form modal */}

        {showModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg">
            <h2 className="text-2xl mb-4">Volunteer Information Form</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <label>Category: </label>
                <input
                  type="text"
                  defaultValue={Category}
                  disabled
                />
              </div>
              <div>
                <label>Email: </label>
                <input
                  type="email"
                  name="email"
                  defaultValue={user?.email} 
                  disabled
                />
              </div>
              <div>
                <label>Suggestions: </label>
                <input
                  name="suggestion"
                  type="text"
                  required
                ></input>
              </div>
              <div>
                <label className="" htmlFor="status">Status: </label>
                <select
                  defaultValue={status}
                  name="status"
                  required
                >
                  <option value="Requested">Requested</option>
                </select>
              </div>
              <div className="mt-4 flex justify-end">
                <button
                  type="button"
                  className="btn btn-secondary mr-2"
                  onClick={closeModal}
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Request
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
            </div>
            
        </div>
    );
};

export default Carddetails;