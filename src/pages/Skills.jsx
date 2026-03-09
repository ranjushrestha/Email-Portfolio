import React from "react";

const Skills = () => {
  const skills = {
    skillSections: [
      {
        title: "Core Skills",
        description: [
          "Email Marketing",
          "Email Campaign Setup",
          "Email Automation",
          "Email Campaign Optimization",
          "Marketing Automation",
        ],
      },
      {
        title: "Cold Email & Strategy",
        description: [
          "Lead Generation",
          "Email Outreach",
          "Outreach Strategy",
          "Outreach Email Copywriting",
        ],
      },
      {
        title: "Deliverability & Campaign Performance",
        description: [
          "Audience Segmentation & Targeting",
          "Email Testing",
          "Market Analytics",
          "Email Subject Line Optimization",
        ],
      },
      {
        title: "Infrastructure & Technical",
        description: [
          "Email List Building",
          "Email Sourcing",
          "Email Template Development",
        ],
      },
    ],
  };

  return (
    <div className="mt-10 px-4 lg:mt-4 lg:ml-8">
      <h2 className="text-4xl sm:text-5xl text-gray-700 text-center sm:text-left font-semibold mb-10">
        SKILLS
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-8">
        {skills.skillSections.map((section, index) => (
          <div
            key={index}
            className="bg-white border-t-4 border-gray-600 w-full min-h-[12rem] rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 hover:scale-105 transition-all duration-500 ease-in-out p-3"
          >
            <h3 className="text-lg font-semibold text-gray-600 mb-3">
              {section.title}
            </h3>

            <ul className="text-base lg:text-sm text-gray-500 p-2  bg-gray-200 rounded space-y-1">
              {section.description.map((item, i) => (
                <li key={i} className="flex  gap-2">
                  <span>-</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
