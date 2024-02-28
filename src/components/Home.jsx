import React, {useState} from "react";
import {HiArrowNarrowRight} from "react-icons/hi";
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name="home" className='w-full h-screen bg-[#0a192f]'> 
        {/* Container */}
        <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
            <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">Tom Bielawski</h1>
            <h4 className="text-4xl sm:text-4xl font-bold text-[#8892b0]">
                Software Developer, veteran, former special agent.
            </h4>
            <p className="text-[#8892b0] py-4 max-w-[700px]"> Seeking a software developer or engineer role where I can put my unique 
            background and skills as an police investigator and software developer to work. </p>
            <div>
                <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#6fc2b0] hover:border-bg-[#6fc2b0]"> 
                <Link to="projects" smooth={true} duration={500}>View Projects</Link>
                    <span className="group-hover:rotate-90 duration-300">
                        <HiArrowNarrowRight className="ml-3" />                        
                    </span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Home;