import React, {useState} from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import EGA7 from "../assets/ega7.png";

const Navbar = () => {
  //state to manage the nav bar expanding
  const [nav, setNav] = useState(false);
  //Set the state to opposite of current state
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#08192f] text-gray-300">
      <div>
        <img src={EGA7} alt="Logo image" style={{ width: '200px', paddingTop: "20px", marginTop: "100px" }}/>
      </div>
      {/* md: is a breakpoint for mobile */}
        {/* Convert to Routes later */}
        <ul className="hidden md:flex">
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Work</li>
          {/* Remove Contact later */}
          <li>Contact</li>
        </ul>


      {/* Hamburger Menu Component FaBars*/}
      <div onClick={handleClick} className="md:hidden z-10" >
        {/* Conditionally render the 'X' when 'burger menu clicked */}
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu*/}
      {/* Conditionally display the 'burger menu */}
      <ul className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"}>
          <li className="py-6 text-4xl">Home</li>
          <li className="py-6 text-4xl">About</li>
          <li className="py-6 text-4xl">Skills</li>
          <li className="py-6 text-4xl">Work</li>
          {/* Remove Contact later */}
          <li className="py-6 text-4xl">Contact</li>
      </ul>

      {/* Social Icons */}
      <div></div>
    </div>
  )
}

export default Navbar