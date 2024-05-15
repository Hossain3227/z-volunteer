import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const Header = () => {
   
   const {user, logOut} = useContext(AuthContext);

    const links = <>
    

    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/allcard'>Need Volunteer</NavLink></li>
    </>
   
   
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li>{links}</li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {links}
    </ul>
  </div>
  <div className="navbar-end">
    {
        !user && (
            <Link to={'/login'} className="btn">Login</Link>
        )
    }
 

 {
    user && (
        <div className="dropdown dropdown-end navbar-end">
      <div tabIndex={0} role="button" className="btn btn-ghost navbar-end btn-circle avatar">
        <div title={user?.displayName} className="w-10 rounded-full">
          
          
          <img className="" alt="Tailwind CSS Navbar component" src={user?.photoURL} />
        </div>
      </div>
      <ul tabIndex={0} className="mt-3 z-[50] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <Link to={'/add-volunteer'} className="justify-between">
            Add Volunteer Post
          </Link>
        </li>
        <li><Link to={'/my-post'}>Manage My Post</Link></li>
        <li><Link to={'/my-req'}>my volunter requests</Link></li>
        <li><button onClick={logOut}>
          Logout
          </button></li>
      </ul>
    </div>
    )
 }

    {/* <div className="dropdown dropdown-end navbar-end">
      <div tabIndex={0} role="button" className="btn btn-ghost navbar-end btn-circle avatar">
        <div className="w-10 rounded-full">
          <img className="" alt="Tailwind CSS Navbar component" src="" />
        </div>
      </div>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div> */}


  </div>






  
</div>
    );
};

export default Header;