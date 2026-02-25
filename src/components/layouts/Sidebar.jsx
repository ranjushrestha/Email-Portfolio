import React, { useState } from "react";
import logo from "../../assets/profile.png";

const Sidebar = ({ active }) => {
  const [isOpen, setIsOpen] = useState(false);
  const sections = ["ABOUT", "SKILLS", "TOOLS", "SERVICES", "RESULTS", "CONTACT"];

  return (
    <>
      {/* Large Screen Sidebar */}
      <aside className="hidden lg:flex fixed top-0 left-0 h-screen w-70 bg-gray-700 text-white p-5 flex-col pt-4">
        <div className="flex flex-col items-center mb-5 text-center">
          <a href="#ABOUT">
            <img
              src={logo}
              alt="logo"
              className="w-44 h-44 object-cover rounded-full mb-1 border-8 border-gray-400 shadow-md cursor-pointer"
            />
          </a>
        </div>

        <nav className="flex flex-col gap-2 mt-6">
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className={`flex items-center justify-center text-gray-400 px-4 py-2 rounded cursor-pointer transition-colors ${
                active === section
                  ? "bg-gray-500 text-white font-bold"
                  : "hover:bg-gray-500/30"
              }`}
            >
              {section}
            </a>
          ))}
        </nav>
      </aside>

      {/* Mobile/Tablet Header */}
      <header className="lg:hidden fixed top-0 left-0 w-full bg-gray-700 text-white flex items-center justify-between px-4 py-2 shadow-md z-50">
        <a href="#ABOUT">
          <img
            src={logo}
            alt="logo"
            className="w-12 h-12 object-cover rounded-full border-4 border-gray-400"
          />
        </a>

        {/* Hamburger Menu */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white focus:outline-none"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </header>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="lg:hidden fixed top-16 left-0 w-full bg-gray-700 text-white flex flex-col gap-2 p-4 z-40">
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={() => setIsOpen(false)}
              className={`px-4 py-2 rounded cursor-pointer transition-colors ${
                active === section
                  ? "bg-gray-500 text-white font-bold"
                  : "hover:bg-gray-500/30"
              }`}
            >
              {section}
            </a>
          ))}
        </nav>
      )}
    </>
  );
};

export default Sidebar;