import React from "react";

const Tools = () => {
  const tools = [
    "Instantly",
    "Smartlead",
    "Lemlist",
    "Google Workspace",
    "Microsoft 365",
  ];

  return (
    <div className="mt-10 px-4 sm:px-6 lg:px-20">
      <h2 className="text-4xl sm:text-5xl text-gray-600 font-bold mb-3 text-center">
        Tools and Platforms
      </h2>
      <p className="font-semibold text-gray-500 text-center mb-10">
        Expert proficiency in industry-leading email outreach platforms
      </p>

      {/* Grid container */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="
              bg-gray-200 border-4 border-gray-500 
              w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 
              rounded-full shadow-md 
              hover:scale-105 transition-transform duration-500 ease-in-out 
              cursor-pointer flex items-center justify-center p-2
            "
          >
            <p className="font-semibold text-gray-700 text-center text-sm sm:text-base md:text-lg break-words">
              {tool}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tools;