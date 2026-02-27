import React from "react";
import instantly from "../assets/instantly.png";
import smartlead from "../assets/smartlead.png";
import lemlist from "../assets/lemlist.png";
import googleWorkspace from "../assets/googleWorkspace.png";
import M365 from "../assets/M365.png";

const Tools = () => {
  const tools = [instantly, smartlead, lemlist, googleWorkspace, M365];
  const titles = ['Instantly', 'Smartlead', 'Lemlist', 'Google Workspace', 'Microsoft 365'];

  return (
    <div className="mt-10 px-4 sm:px-6 lg:px-20">
      <h2 className="text-4xl sm:text-5xl text-gray-600 font-bold mb-3 text-center">
        Tools and Platforms
      </h2>
      <p className="font-semibold text-gray-500 text-center mb-10">
        Expert proficiency in industry-leading email outreach platforms
      </p>

      {/* Grid container */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 justify-items-center">
        {tools.map((tool, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* Circle Image */}
            <div className="w-24 h-24  lg:w-28 lg:h-28 flex items-center justify-center overflow-hidden  hover:scale-105 transition-transform duration-500 ease-in-out">
              <img
                src={tool}
                alt={titles[index]}
                className="w-full h-full object-cover "
              />
            </div>
            {/* Title below image */}
            <p className="mt-1 text-center text-gray-600 text-sm font-semibold">{titles[index]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tools;