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
    <div className="mt-10 px-4 lg:mt-4 ">
      <h2 className="text-4xl sm:text-5xl text-gray-900 font-semibold mb-10 text-center">
        SKILLS
      </h2>

      {/* Grid container */}
     <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
  {skills.map((skill, index) => (
    <div
      key={index}
      className="
        bg-white border-t-4 border-gray-600
        w-full
        min-h-[9rem] rounded-2xl shadow-md
        hover:shadow-xl hover:-translate-y-2 hover:scale-105
        transition-all duration-500 ease-in-out
        cursor-pointer flex flex-col items-center justify-center text-center p-4
      "
    >
      <p className="text-sm sm:text-lg font-semibold text-gray-700 leading-snug">
        {skill}
      </p>
    </div>
  ))}
</div>
    </div>
  );
};

export default Skills;