import { Link } from "react-router-dom";
import { SlLocationPin } from "react-icons/sl";
import { CgProfile } from "react-icons/cg";
import { RiHistoryFill } from "react-icons/ri";
import { BiMapPin } from "react-icons/bi";

const Sidebar = () => (
  <div className="h-screen w-72 p-2 pt-6">
    <nav>
      <div className="flex items-center mb-6">
        <SlLocationPin
          className="mr-2"
          size={24}
          style={{ color: "#9333EA" }}
        />
        <span className="text-xl font-semibold font-sans text-purple-800">
          Track Me
        </span>
      </div>
      <ul className=" bg-gray-100 rounded-xl m-2 h-screen pt-2 text-white">
        <li className="flex items-center mb-1 hover:bg-purple-800 hover:text-white text-black p-1 m-2 rounded">
          <BiMapPin className="mr-1" size={20} />
          <Link to="home/map-location">Map Location</Link>
        </li>
        <li className="flex items-center mb-1 hover:bg-purple-800 hover:text-white text-black p-1 m-2 rounded">
          <RiHistoryFill className="mr-1" size={20} />
          <Link to="home/location-history">Location History</Link>
        </li>
        <li className="flex items-center mb-3 hover:bg-purple-800 hover:text-white text-black p-1 m-2 rounded">
          <CgProfile className="mr-1" size={20} />
          <Link to="home/profile">Profile</Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default Sidebar;
