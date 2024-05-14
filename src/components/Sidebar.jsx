import { Link } from "react-router-dom";
import { SlLocationPin } from "react-icons/sl";
import { CgProfile } from "react-icons/cg";
import { RiHistoryFill } from "react-icons/ri";
import { BiMapPin } from "react-icons/bi";

const Sidebar = () => (
  <div className="h-screen w-72 p-2 pt-6">
    <nav>
      <div className="flex items-center mb-4 ml-7">
        <SlLocationPin
          className="mr-1"
          size={24}
          style={{ color: "#7009b5" }}
        />
        <span className="text-xl font-semibold tracking-widest text-purple-800">
          Tracker
        </span>
      </div>
      <ul className=" bg-gray-100 shadow-sm shadow-gray-400 rounded-xl m-2 h-screen pt-2 text-white">
        <li className="flex items-center mb-1 hover:bg-purple-800 hover:text-white text-black p-1 m-2 rounded transition duration-300">
          <BiMapPin className="mr-1" size={20} />
          <Link to="/map-location">Map Location</Link>
        </li>
        <li className="flex items-center mb-1 hover:bg-purple-800 hover:text-white text-black p-1 m-2 rounded transition duration-300">
          <RiHistoryFill className="mr-1" size={20} />
          <Link to="/location-history">Location History</Link>
        </li>
        <li className="flex items-center mb-3 hover:bg-purple-800 hover:text-white text-black p-1 m-2 rounded transition duration-300">
          <CgProfile className="mr-1" size={20} />
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default Sidebar;
