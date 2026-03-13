import React from "react";
import instantly from "../assets/instantly.png";
import smartlead from "../assets/smartlead.png";
import lemlist from "../assets/lemlist.png";
import googleWorkspace from "../assets/googleWorkspace.png";
import M365 from "../assets/M365.png";
import sendGrid from "../assets/sendGrid.png";
import mailChimp from "../assets/mailChimp.png";
import hubSpot from "../assets/hubSpot.png";
import zeroBounce from "../assets/zeroBounce.png";
import neverBounce from "../assets/neverBounce.png";
import millionVerifier from "../assets/millionVerifier.png";
import mailWizz from "../assets/mailWizz.png";
import zoho from "../assets/zoho.png";
import mailCow from "../assets/mailCow.png";
import n8n from "../assets/n8n.png";

const Tools = () => {
  const tools = [
    { src: instantly, title: "" },
    { src: smartlead, title: "" },
    { src: lemlist, title: "" },
    { src: googleWorkspace, title: " " },
    { src: M365, title: " " },
    { src: sendGrid, title: "" },
    { src: mailChimp, title: "" },
    { src: hubSpot, title: "" },
    { src: zeroBounce, title: "" },
    { src: neverBounce, title: "" },
    { src: millionVerifier, title: "" },
    { src: mailWizz, title: "" },
    { src: zoho, title: "" },
    { src: mailCow, title: "Mailcow" },
    { src: n8n, title: "" },
  ];

  return (
    <div className="mt-10 px-4 lg:mt-4">
      <h2 className="text-4xl sm:text-5xl text-gray-700 font-semibold mb-3 text-center">
        TOOLS AND PLATFORMS
      </h2>
      <p className="font-semibold text-gray-500  text-center mb-10">
        Expert proficiency in industry-leading email outreach platforms
      </p>

      {/* Grid with minimal spacing */}
      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-1 justify-items-center">
        {tools.map((tool, index) => (
          <div key={index} className="flex flex-col items-center inline-flex">
            {/* Circular Image */}
            <div className="w-26 h-26 overflow-hidden inline-flex items-center justify-center hover:scale-105 transition-transform duration-300 ease-in-out">
              <img
                src={tool.src}
                alt={tool.title}
                className="w-full h-full object-contain"
              />
            </div>
            {/* Title with tiny margin */}
            <p className=" text-center text-gray-600 text-xs font-semibold">
              {tool.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tools;