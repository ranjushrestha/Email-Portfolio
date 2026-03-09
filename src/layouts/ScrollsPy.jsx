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
  let ticking = false;

  const handleScroll = () => {
    if (ticking) return;
    ticking = true;

    requestAnimationFrame(() => {
      const scrollPos = window.scrollY + window.innerHeight * 0.35;

      const nearBottom =
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 10;

      if (nearBottom) {
        setActive(sections[sections.length - 1]);
        ticking = false;
        return;
      }

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && scrollPos >= el.getBoundingClientRect().top + window.scrollY) {
          setActive(sections[i]);
          break;
        }
      }

      ticking = false;
    });
  };

  window.addEventListener("scroll", handleScroll, { passive: true }); // passive for perf
  handleScroll();

  return () => window.removeEventListener("scroll", handleScroll);
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