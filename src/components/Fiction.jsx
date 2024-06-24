import React from "react";
import { FictionData } from "../helper/FictionData";
// import TIP from "../assets/tip.png";
// import Tooltip from "./ToolTip";



//Get Book URLS and add to FictionData.jsx
const Fiction = () => {
    
  return (    
    <>
        <div className="pt-96 w-full md:h-screen text-gray-300 bg-[#0a192f] ">  
            <div className="max-w-screen-lg p-0 mx-auto flex flex-col justify-center w-full ">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline underline decoration-[#6fc2b0] text-gray-300 border-[#6fc2b0]">My Fiction</p>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-56 px-12 sm:px-0 " style={{height:"500px"}}>
                {FictionData.map(({ id, image, name, amazon, googlePlay , description, kobo, barnes}) => (                    
                    <>                    
                        <div
                            style={{backgroundImage:`url(${image})`, height: "950px", width: "600px", backgroundColor: "gray" }}
                            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div ">
                            {/* Hover */}
                            <div className="opacity-0 group-hover:opacity-100">
                                <span className="text-2xl font bold text-white tracking-wider "></span>
                                <div className="pt-8 text-center ">
                                    <button 
                                        onClick={()=> window.open(`${googlePlay}`, "_blank")}
                                        className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                        Amazon
                                    </button>
                                    <button 
                                        onClick={()=> window.open(`${amazon}`, "_blank")}
                                        className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                        Google Play
                                    </button>                                                                       
                                    <button 
                                        onClick={()=> window.open(`${kobo}`, "_blank")}
                                        className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                        Kobo Books
                                    </button>                                                                
                                    <button 
                                        onClick={()=> window.open(`${barnes}`, "_blank")}
                                        className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                        B&N Nook
                                    </button>
                                    {/* <Tooltip text={description}>
                                        <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                            <img className="image"
                                                src={TIP} 
                                            />
                                        </button>
                                    </Tooltip> */}
                                    <p>{name}</p>
                                    <p>{description}</p>
                                </div>
                            </div>
                        </div>
                    </>
                ))}
                {/* Add another section for Professional Projects, list separately */}
                    {/* <div 
                        style={{backgroundImage:`url(${PP2})` }}
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div" 
                    >                        
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl font bold text-white tracking-wider "></span>
                            <div className="pt-8 text-center ">                                
                                <button 
                                    onClick={()=> window.open("https://www.acstechnologies.com/ministryplatform/tools/pocketplatform/", "_blank")}
                                    className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                    CODE REPO
                                </button>
                                <p>PocketPlatform Mobile App for Churches</p>
                            </div>
                        </div>
                    </div> */}
                    {/* <div 
                        style={{backgroundImage:`url(${SUFS})` }}
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div" 
                    >                            
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl font bold text-white tracking-wider "></span>
                            <div className="pt-8 text-center ">                                
                                <button 
                                    onClick={()=> window.open("https://www.stepupforstudents.org", "_blank")}
                                    className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                    CODE REPO
                                </button>
                                <p>Step Up For Students Educational Platform</p>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    </>
  )
}

export default Fiction;