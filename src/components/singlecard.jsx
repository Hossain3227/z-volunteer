import { Link } from "react-router-dom";


const Singlecard = ({volun}) => {
    
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
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
           <figure><img src={image} className="w-[400px] h-[250px] object-cover" alt="Shoes" /></figure>
          <div className="card-body">
        <h2 className="card-title">{title.length > 20 ? title.substring(0,20) +"..." : title}</h2>
        <p>{Description.length > 60 ? Description.substring(0,60) + "..." : Description}</p>
        <div className="flex justify-between text-[18px]">
            <span className="bg-blue-200 text-blue-800 text-xs px-4 py-2 rounded-lg w-[40%]">Category: {Category}</span>
            <span className= "text-red-800 bg-red-200 px-3 py-1 rounded-lg">Deadline:{Deadline}</span>
        </div>
        <div className="card-actions">
      <Link to={`/volunteer/${_id}`} className="btn btn-primary">View Details</Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Singlecard;