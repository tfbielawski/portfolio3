import React from "react";
import NETB3 from "../assets/netb3.jpg";
import PP2 from "../assets/pp2.png";
import SUFS from "../assets/sufs.png";
import NASA from "../assets/nasa.png";
import DD2 from "../assets/dd2.png";
import RTT1 from "../assets/rtt1.png";
import RTT4 from "../assets/rtt4.jpeg";
import RR from "../assets/react.png";
import WX2 from "../assets/wx2.jpeg";

/* Make this render dynamically like the other portfolio does */

const Projects = () => {
  return (
    <div name="projects" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#6fc2b0]'>
                    Work
                </p>
                <p className='py-6'> Check out some of my recent work</p>
            </div>
        

            {/* Card Container */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {/* Card Item */}
                <div 
                    style={{backgroundImage:`url(${NETB3})` }}
                    className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div" >
                    
                    {/* Hover */}
                    <div className="opacity-0 group-hover:opacity-100">
                        <span className="text-2xl font bold text-white tracking-wider"></span>
                        <div className="pt-8 text-center ">
                            <button 
                                onClick={()=> window.open("https://netflix-clone-d1be7.web.app", "_blank")}
                                className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                DEMO
                            </button>
                            <button 
                                onClick={()=> window.open("https://github.com/tfbielawski/netflix-clone", "_blank")}
                                className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                CODE REPO
                            </button>
                            <p>Netflix Clone</p>
                        </div>
                    </div>
                </div>
                <div 
                    style={{backgroundImage:`url(${PP2})`}}
                    className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div" >
                    
                    {/* Hover */}
                    <div className="opacity-0 group-hover:opacity-100">
                        <span className="text-2xl font bold text-white tracking-wider"></span>
                        <div className="pt-8 text-center ">
                            <button 
                                onClick={()=> window.open("https://www.acstechnologies.com/ministryplatform/tools/pocketplatform/", "_blank")}
                                className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                Project URL
                            </button>
                            <p>PocketPlatform Mobile App for churches</p>
                        </div>
                    </div>
                    {/* PocketPlatform Mobile Apps */}
                </div>
                <div 
                    style={{backgroundImage:`url(${SUFS})` }}
                    className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div" >
                    
                    {/* Hover */}
                    <div className="opacity-0 group-hover:opacity-100">
                        <span className="text-2xl font bold text-white tracking-wider"></span>
                        <div className="pt-8 text-center ">                            
                            <button 
                                onClick={()=> window.open("https://www.stepupforstudents.org", "_blank")}
                                className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                Project URL
                            </button>
                            <p>Step Up For Students Educational Platform</p>
                        </div>
                    </div>                    
                </div>
                <div 
                    style={{backgroundImage:`url(${NASA})` }}
                    className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div" >
                    
                    {/* Hover */}
                    <div className="opacity-0 group-hover:opacity-100">
                        <span className="text-2xl font bold text-white tracking-wider"></span>
                        <div className="pt-8 text-center ">
                            <button 
                                onClick={()=> window.open("https://nasa-apod-2.vercel.app", "_blank")}
                                className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                DEMO
                            </button>
                            <button 
                                onClick={()=> window.open("https://github.com/tfbielawski/nasa-apod-2", "_blank")}
                                className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                CODE REPO
                            </button>                            
                            <p>NASA Space Photo of the Day API</p>
                        </div>
                    </div>
                </div>
                {/* D&D Random is Broken, do not render */}
                <div 
                    style={{backgroundImage:`url(${DD2})` }}
                    className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div" >
                    
                    {/* Hover */}
                    <div className="opacity-0 group-hover:opacity-100">
                        <span className="text-2xl font bold text-white tracking-wider"></span>
                        <div className="pt-8 text-center ">
                            <button 
                                onClick={()=> window.open("https://new-reactdd-vercel.vercel.app", "_blank")}
                                className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                DEMO
                            </button>  
                            <button
                                onClick={()=> window.open("https://github.com/tfbielawski/new-reactdd-vercel", "_blank")}
                                className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                CODE REPO
                            </button>
                            <p>Dungeons & Dragons Campaign Helper</p>
                        </div>
                    </div>
                </div>
                {/* Maybe Remove this one! */}
                <div 
                    style={{backgroundImage:`url(${RTT1})` }}
                    className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div" >
                    
                    {/* Hover */}
                    <div className="opacity-0 group-hover:opacity-100">
                        <span className="text-2xl font bold text-white tracking-wider"></span>
                        <div className="pt-8 text-center ">
                            <button 
                                onClick={()=> window.open("https://react-tac-toe-vercel.vercel.app", "_blank")}
                                className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                DEMO
                            </button>  
                            <button
                                onClick={()=> window.open("https://github.com/tfbielawski/react-tac-toe-vercel", "_blank")}
                                className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                CODE REPO
                            </button>
                            <p>React Tac Toe</p>
                        </div>
                    </div>
                </div>
                <div 
                    style={{backgroundImage:`url(${RTT4})` }}
                    className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div" >
                    
                    {/* Hover */}
                    <div className="opacity-0 group-hover:opacity-100">
                        <span className="text-2xl font bold text-white tracking-wider"></span>
                        <div className="pt-8 text-center ">
                            <button 
                                onClick={()=> window.open("https://react-tac-toe-2.vercel.app", "_blank")}
                                className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                DEMO
                            </button>  
                            <button
                                onClick={()=> window.open("https://github.com/tfbielawski/react-tac-toe-2", "_blank")}
                                className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                CODE REPO
                            </button>
                            <p>Better React Tac Toe</p>
                        </div>
                    </div>
                </div>
                <div 
                    style={{backgroundImage:`url(${WX2})` }}
                    className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div" >
                    
                    {/* Hover */}
                    <div className="opacity-0 group-hover:opacity-100">
                        <span className="text-2xl font bold text-white tracking-wider"></span>
                        <div className="pt-8 text-center ">
                            <button 
                                onClick={()=> window.open("https://react-wx-vercel.vercel.app", "_blank")}
                                className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                DEMO
                            </button>  
                            <button
                                onClick={()=> window.open("https://github.com/tfbielawski/react-wx-vercel", "_blank")}
                                className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                CODE REPO
                            </button>
                            <p>React Weather App</p>
                        </div>
                    </div>
                </div>
                <div 
                    style={{backgroundImage:`url(${RR})` }}
                    className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div" >
                    
                    {/* Hover */}
                    <div className="opacity-0 group-hover:opacity-100">
                        <span className="text-2xl font bold text-white tracking-wider"></span>
                        <div className="pt-8 text-center ">                         
                            <button 
                                onClick={()=> window.open("https://react-essentials-lilac.vercel.app", "_blank")}
                                className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                DEMO
                            </button>                      
                            <button
                                onClick={()=> window.open("https://github.com/tfbielawski/react-essentials", "_blank")}
                                className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                CODE REPO
                            </button>
                            <p>React Essentials Info App</p>
                        </div>
                    </div>
                </div>
                {/*  */}
            </div>
        </div>
    </div>
  )
}

export default Projects;