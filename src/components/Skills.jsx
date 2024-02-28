import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import GitHub from "../assets/github.png";
import CPP from "../assets/cpp.svg";
import CSH from "../assets/csh.svg";
import NET from "../assets/net.svg";
import VER from "../assets/ver.png";
import RN2 from "../assets/rn2.jpeg";
import RED1 from "../assets/red1.svg";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
          <div>
              <p className="text-4xl font-bold inline border-b-4 border-[#6fc2b0]" >Skills</p>
              <p className="py-4"> These are some of the technologies I've worked with.</p>
          </div>

          <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
              <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                  <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
                  <p className="my-4">HTML</p>
              </div>
              <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                  <img className="w-20 mx-auto" src={CSS} alt="HTML icon" />
                  <p className="my-4">CSS</p>
              </div>
              <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                  <img className="w-20 mx-auto" src={JavaScript} alt="HTML icon" />
                  <p className="my-4">JAVASCRIPT</p>
              </div>
              <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                  <img className="w-20 mx-auto" src={ReactImg} alt="HTML icon" />
                  <p className="my-4">REACT</p>
              </div>
              <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                  <img className="h-[80px] w-29 mx-auto" src={RED1} alt="HTML icon" />
                  <p className="my-4">Redux</p>
              </div>
              <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                  <img className="h-[85px] w-40 mx-auto" src={RN2} alt="HTML icon" />
                  <p className="my-4">React Native</p>
              </div>
              <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                  <img className="w-20 mx-auto" src={Node} alt="HTML icon" />
                  <p className="my-4">NODE JS</p>
              </div>
              <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                  <img className="h-[90px] w-20 mx-auto" src={CSH} alt="HTML icon" />
                  <p className="my-4">C#</p>
              </div>
              <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                  <img className="w-20 mx-auto" src={NET} alt="HTML icon" />
                  <p className="my-4">.NET</p>
              </div>
              <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                  <img className="w-20 mx-auto" src={CPP} alt="HTML icon" />
                  <p className="my-4">C++</p>
              </div>
              <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                  <img className="w-20 mx-auto" src={GitHub} alt="HTML icon" />
                  <p className="my-4">GITHUB</p>
              </div>
              <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                  <img className="h-[80px] w-29 mx-auto" src={VER} alt="HTML icon" />
                  <p className="my-4">Vercel</p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Skills;
