import { useContext, useState } from 'react';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { AuthContext } from '../provider/AuthProvider';
import { useLoaderData, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';


const Updatevolunter = () => {

    const navigate = useNavigate()
    const volun = useLoaderData()    
    const {user} = useContext(AuthContext) 
    const [startDate, setStartDate] = useState(new Date())

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

        const handleVolunteerSubmit = async e => {
            e.preventDefault()
            const form = e.target
            const title = form.title.value
            const email = form.email.value
            const Deadline = startDate
            const Category = form.Category.value
            const image = form.image.value
            const Location = form.Location.value
            const volunteer_needed = form.volunteer_needed.value 
            const Description = form.Description.value
            const volunteerData = {
              title,
              Deadline,
              image,
              Category,
              Location,
              volunteer_needed,
              Description,
              Organizer: {
                email,
                name: user?.displayName,
                photo: user?.photoURL,
              },
            }
            try {
              const { data } = await axios.put(
                `https://volunteer-server-beta.vercel.app/volunteer/${_id}`,
                volunteerData
              )
              console.log(data)
              toast.success('Updated Successfully!')
              navigate('/')
            } catch (err) {
              console.log(err)
            }
          }
    


    return (
        <div className="flex items-center justify-center my-10 bg-[#F4F3F0]">
            
            <section className=' p-2 md:p-6 mx-auto rounded-lg'>
        <h2 className='text-lg font-semibold text-red-800 bg-red-200 px-3 py-1  text-center mb-4'>
          Add a Volunteer event
        </h2>

        <form onSubmit={handleVolunteerSubmit}>
          <div className='grid grid-cols-1 gap-6 mt-4 md:grid-cols-2'>
            <div>
              <label className='' htmlFor='title'>
                Title
              </label>
              <input
                id='title'
                name='title'
                type='text'
                defaultValue={volun.title}
                className='block w-full px-4 py-2 mt-2 bg-white border border-gray-200 rounded-md  focus:border-red-400 focus:ring-red-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>

            <div>
              <label className='' htmlFor='emailAddress'>
                Email
              </label>
              <input
                id='emailAddress'
                type='email'
                name='email'
                disabled
                defaultValue={user?.email}
                className='block w-full px-4 py-2 mt-2 bg-white border border-gray-200 rounded-md  focus:border-red-400 focus:ring-red-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>
            <div className='flex flex-col gap-2 '>
              <label className=''>Deadline</label>

              {/* Date Picker Input Field */}
              <DatePicker className='p-2 rounded-lg border' selected={startDate} onChange={date => setStartDate(date)}></DatePicker>
            </div>

            <div className='flex flex-col gap-2 '>
              <label className='' htmlFor='Category'>
                Category
              </label>
              <select
                name='Category'
                id='Category'
                defaultValue={volun.Category}
                className='border p-2 rounded-md'
              >
                <option value='education'>education</option>
                <option value='healthcare'>healthcare</option>
                <option value='social service'>social service</option>
                <option value='animal welfare'>animal welfare</option>
                <option value='environmental conservation'>environmental conservation</option>
                <option value='community development'>Community development</option>
              </select>
            </div>
            <div>
              <label className='' htmlFor='image'>
                Add image url....
              </label>
              <input
                id='image'
                name='image'
                type='text'
                defaultValue={volun.image}
                className='block w-full px-4 py-2 mt-2 bg-white border border-gray-200 rounded-md  focus:border-red-400 focus:ring-red-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>

            <div>
              <label className='' htmlFor='volunteer_needed'>
                Volunteer_needed
              </label>
              <input
                id='volunter_needed'
                name='volunteer_needed'
                defaultValue={volun.volunteer_needed}
                type='number'
                className='block w-full px-4 py-2 mt-2 bg-white border border-gray-200 rounded-md  focus:border-red-400 focus:ring-red-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>
          </div>
          <div className="mt-4">
              <label className='' htmlFor='Location'>
                Location
              </label>
              <input
                id='Location'
                name='Location'
                defaultValue={volun.Location}
                type='text'
                className='block w-full px-4 py-2 mt-2 bg-white border border-gray-200 rounded-md  focus:border-red-400 focus:ring-red-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>
          <div className='flex flex-col gap-2 mt-4'>
            <label className='text-gray-700 ' htmlFor='Description'>
              Description
            </label>
            <textarea
              className='block w-full px-4 py-2 mt-2 bg-white border border-gray-200 rounded-md  focus:border-red-400 focus:ring-red-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              name='Description'
              defaultValue={volun.Description}
              id='Description'
            ></textarea>
          </div>


          <div className='flex justify-center mt-6'>
            <button  className='px-8 py-2.5 leading-5 text-white  transition-colors duration-300 transhtmlForm bg-blue-500 rounded-md hover:bg-cyan-600 focus:outline-none focus:bg-gray-600'>
              save
            </button>
          </div>
        </form>
      </section>
  
        </div>
    );
};

export default Updatevolunter;