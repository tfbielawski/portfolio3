import React, {useState} from "react";
import {FaBars, FaTimes, FaGithub, FaLinkedin} from "react-icons/fa";
import {HiOutlineMail} from "react-icons/hi";
import {BsFillPersonLinesFill} from "react-icons/bs";
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
          <li>Projects</li>
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
          <li className="py-6 text-4xl">Projects</li>
          {/* Remove Contact later */}
          <li className="py-6 text-4xl">Contact</li>
      </ul>

      {/* Social Icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500" >
            <a 
              href=""
              className="text-xl flex justify-between items-center w-full text-gray-300"
            > LinkedIn<FaLinkedin size={40}/>
            </a>                   
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href=""
            >
              Github <FaGithub size={40} />
            </a>
          </li>
          <li className="text-xl w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]" >
            <a 
              className="flex justify-between items-center w-full text-gray-300"
              href=""
            >Resume  <BsFillPersonLinesFill size={40}/>
            </a>                   
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]" >
            <a 
              className="flex justify-between items-center w-full text-gray-300"
              href=""
            > Email<HiOutlineMail size={40}/>
            </a>                   
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;