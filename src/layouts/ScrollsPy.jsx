import { useEffect, useState } from "react";
import Sidebar from "../components/layouts/Sidebar";
import Footer from "../components/layouts/Footer";

import About from "../pages/About";
import Skills from "../pages/Skills";
import Tools from "../pages/Tools";
import Services from "../pages/Services";
import Results from "../pages/Results";
import Contact from "../pages/Contact";

const sections = ["about", "skills", "tools", "services", "results", "contact"];

const ScrollSpy = () => {
  const [active, setActive] = useState("about");

 useEffect(() => {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    },
    { threshold: 0.30 }
  );

  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });

  return () => observer.disconnect();
}, []);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <Sidebar active={active} />

      <div className="flex-1 bg-gray-100 lg:ml-64">
        <main>
          <section id="about" className="min-h-screen border-b border-gray-200 py-8">
            <About />
          </section>

          <section id="skills" className="min-h-screen border-b border-gray-200 py-8">
            <Skills />
          </section>

          <section id="tools" className="min-h-screen border-b border-gray-200 bg-white py-8">
            <Tools />
          </section>

          <section id="services" className="min-h-screen border-b border-gray-200 py-8">
            <Services />
          </section>

          <section id="results" className="min-h-screen border-b border-gray-200 py-8">
            <Results />
          </section>

          <section id="contact" className="min-h-screen py-8">
            <Contact />
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default ScrollSpy;