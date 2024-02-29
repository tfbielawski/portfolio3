import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const routeChange = () => {
    let path = `/projects`;
    navigate(path);
  }

  return (
    <div className="pt-20  h-screen overflow-auto scrollbar-hide bg-[#0a192f]"> 
        {/* Container */}
        <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full " >
            <h1 className="text-4xl py-6 sm:text-7xl font-bold text-[#ccd6f6]">Tom Bielawski</h1>
            <h4 className="text-4xl sm:text-4xl font-bold text-[#8892b0]">
                Software Developer, veteran, former special agent.
            </h4>
            <p className="text-[#8892b0] py-4 max-w-[700px]"> Seeking a software developer or engineer role
            where I can put my unique background and skills as a police investigator and software developer to work. </p>
            <div className="w-full flex flex-row justify-between">
                <div>
                    <button                     
                        onClick={routeChange}
                        className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#6fc2b0] hover:border-bg-[#6fc2b0]"
                    > View Projects                    
                    </button>                    
                </div>
                <div>
                    <button 
                        onClick={()=> window.open("https://resume.creddle.io/resume/gog105zbq0l", "_blank")}
                        className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#6fc2b0] hover:border-bg-[#6fc2b0] bg-[#565f69]"
                    > View Resume                   
                    </button>                    
                </div>
                <div>
                    <button 
                        onClick={()=> window.open("https://www.linkedin.com/in/tombielawski/", "_blank")}
                        className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#6fc2b0] hover:border-bg-[#6fc2b0] bg-blue-500"
                    > LinkedIn                  
                    </button>
                    
                </div>
                <div>
                    <button 
                        onClick={()=> window.open("https://github.com/tfbielawski", "_blank")}
                        className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#6fc2b0] hover:border-bg-[#6fc2b0] bg-[#333333]"
                    > Github                  
                    </button>                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home;