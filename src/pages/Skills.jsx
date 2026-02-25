import React from "react";

const Skills = () => {
  const skills = [
    "Cold Email Strategy",
    "B2B Expertise",
    "Performance Focus",
    "Technical Mastery",
    "Campaign Optimization",
    "Inbox Health",
  ];

  return (
    <div className="mt-10 px-4 sm:px-6 lg:px-20">
      <h2 className="text-4xl sm:text-5xl text-gray-600 font-bold mb-10 text-center">
        Skills
      </h2>

      <div className="flex flex-wrap justify-center gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white border-t-4 border-gray-600 
                       w-full sm:w-[55%] md:w-[30%] lg:w-[25%] 
                       min-h-[9rem] rounded-2xl shadow-md 
                       hover:shadow-xl hover:-translate-y-2 hover:scale-105 
                       transition-all duration-500 ease-in-out 
                       cursor-pointer flex flex-col items-center justify-center text-center p-4"
          >
            <p className="text-lg font-semibold text-gray-700 break-words w-full">
              {skill}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;