import React, {useState} from "react";
import {FaBars, FaTimes, FaGithub, FaLinkedin} from "react-icons/fa";
import {HiOutlineMail} from "react-icons/hi";
import {BsFillPersonLinesFill} from "react-icons/bs";
import EGA7 from "../assets/ega7.png";
import { Link } from 'react-scroll';

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
          <li>
            <Link to="home" smooth={true} duration={500}>Home</Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500}>About</Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={500}>Skills</Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={500}>Projects</Link>
          </li>
        </ul>


      {/* Hamburger Menu Component FaBars*/}
      <div onClick={handleClick} className="md:hidden z-10" >
        {/* Conditionally render the 'X' when 'burger menu clicked */}
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu*/}
      {/* Conditionally display the 'burger menu */}
      <ul className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"}>
          <li className="py-6 text-4xl">
            <Link onClick={handleClick} to="home" smooth={true} duration={500}>Home</Link>
          </li>
          <li className="py-6 text-4xl">
            <Link onClick={handleClick} to="about" smooth={true} duration={500}>About</Link>
          </li>
          <li className="py-6 text-4xl">
            <Link onClick={handleClick} to="skills" smooth={true} duration={500}>Skills</Link>
          </li>
          <li className="py-6 text-4xl">
            <Link onClick={handleClick} to="projects" smooth={true} duration={500}>Projects</Link>
          </li>
      </ul>

      {/* Social Icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500" >
            <a 
              onClick={()=> window.open("https://www.linkedin.com/in/tombielawski/", "_blank")}
              className="text-xl flex justify-between items-center w-full text-gray-300"
            > LinkedIn<FaLinkedin size={40}/>
            </a>                   
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              onClick={()=> window.open("https://github.com/tfbielawski", "_blank")}
              className="flex justify-between items-center w-full text-gray-300"
            >
              Github <FaGithub size={40} />
            </a>
          </li>
          <li className="text-xl w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]" >
            <a 
              onClick={()=> window.open("https://resume.creddle.io/resume/gog105zbq0l", "_blank")}
              className="flex justify-between items-center w-full text-gray-300"
            >Resume  <BsFillPersonLinesFill size={40}/>
            </a>                   
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]" >
            <a 
              onClick={()=> window.open("mailto:tfbielawski@pm.me", "_blank")}
              className="flex justify-between items-center w-full text-gray-300"
            > Email<HiOutlineMail size={40}/>
            </a>                   
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;