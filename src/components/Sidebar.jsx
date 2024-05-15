import { Link } from "react-router-dom";
import { SlLocationPin } from "react-icons/sl";
import { CgProfile } from "react-icons/cg";
import { RiHistoryFill } from "react-icons/ri";
import { BiMapPin } from "react-icons/bi";
import { useState } from "react";
import {FaTimes} from "react-icons/fa"
import {CiMenuFries} from "react-icons/ci"

const Sidebar = () => {

  const [click, setClick] = useState(false)

  const handleClick = () => {
    setClick(!click)
  }

  const content = <>
  <div className="lg:hidden md:hidden mt-11">
  <div className="items-center mb-4 ml-7 lg:flex md:flex lg:flex-1 flex justify-center">
        <SlLocationPin
          className="mr-10"
          size={28}
          style={{ color: "#7009b5" }}
        />
       
  </div>

  <ul className="bg-gray-100 shadow-sm shadow-gray-400 rounded-xl m-2 h-screen pt-2 text-white">
          <li className="flex items-center mb-1 hover:bg-purple-800 hover:text-white text-black p-1 m-2 rounded transition duration-300 border-slate-900">
            <BiMapPin className="mr-1" size={20} />
            <Link to="/map-location">Map Location</Link>
          </li>
          <li className="flex items-center mb-1 hover:bg-purple-800 hover:text-white text-black p-1 m-2 rounded transition duration-300 border-slate-900">
            <RiHistoryFill className="mr-1" size={20} />
            <Link to="/location-history">Location History</Link>
          </li>
          <li className="flex items-center mb-3 hover:bg-purple-800 hover:text-white text-black p-1 m-2 rounded transition duration-300 border-slate-900">
            <CgProfile className="mr-1" size={20} />
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
  </div>
    
  </>

  return(
    <>
    <div>
        {click && content}
      </div>

      <button className="absolute sm:hidden transition top-3 left-4" onClick={handleClick}>
        {click ? <FaTimes/> : <CiMenuFries/> }
      </button>
  <div className="h-screen w-72 p-2 pt-6">
    <nav className="">
      <div className="items-center mb-4 ml-7 lg:flex md:flex lg:flex-1 hidden">
        <SlLocationPin
          className="mr-1"
          size={24}
          style={{ color: "#7009b5" }}
        />
        <span className="text-xl font-semibold tracking-widest text-purple-800">
          Tracker
        </span>
      </div>

      <div className="lg:flex md:flex lg:flex-1 items-center hidden">
        <ul className="bg-gray-100 shadow-sm shadow-gray-400 rounded-xl m-2 h-screen pt-2 text-white">
          <li className="flex items-center mb-1 hover:bg-purple-800 hover:text-white text-black p-1 m-2 rounded transition duration-300 border-slate-900">
            <BiMapPin className="mr-1" size={20} />
            <Link to="/map-location">Map Location</Link>
          </li>
          <li className="flex items-center mb-1 hover:bg-purple-800 hover:text-white text-black p-1 m-2 rounded transition duration-300 border-slate-900">
            <RiHistoryFill className="mr-1" size={20} />
            <Link to="/location-history">Location History</Link>
          </li>
          <li className="flex items-center mb-3 hover:bg-purple-800 hover:text-white text-black p-1 m-2 rounded transition duration-300 border-slate-900">
            <CgProfile className="mr-1" size={20} />
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </div>

    </nav>
  </div>
  </>
);
}

export default Sidebar;
