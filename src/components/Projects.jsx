import React from "react";
import { ProjectData } from "../helper/ProjectData";


const Projects = () => {
  return (    
    <>
        <div className="pt-96 w-full md:h-screen text-gray-300 bg-[#0a192f] ">  
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline underline decoration-[#6fc2b0] text-gray-300 border-[#6fc2b0]">Projects</p>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                {ProjectData.map(({ id, image, name, repo, demo }) => (
                    <>
                    <div 
                            style={{backgroundImage:`url(${image})` }}
                            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div" >
                            
                            {/* Hover */}
                            <div className="opacity-0 group-hover:opacity-100">
                                <span className="text-2xl font bold text-white tracking-wider "></span>
                                <div className="pt-8 text-center ">
                                    <button 
                                        onClick={()=> window.open(`${demo}`, "_blank")}
                                        className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                        DEMO
                                    </button>
                                    <button 
                                        onClick={()=> window.open(`${repo}`, "_blank")}
                                        className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                        CODE REPO
                                    </button>
                                    <p>{name}</p>
                                </div>
                            </div>
                        </div>
                    </>
                ))}
                </div>
            </div>
        </div>
    </>
  )
}

export default Projects;