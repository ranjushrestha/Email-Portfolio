import { useEffect, useState } from "react";
import Sidebar from "../components/layouts/Sidebar";
import Footer from "../components/layouts/Footer";

import About from "../pages/About";
import Skills from "../pages/Skills";
import Tools from "../pages/Tools";
import Services from "../pages/Services";
import Results from "../pages/Results";
import Contact from "../pages/Contact";

const sections = ["about",
    "skills",
    "tools",
    "services",
    "results",
    "contact",];

const ScrollSpy = () => {
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleInitialActive = () => {
      // Check which section is currently in view on load
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2
          ) {
            setActive(section);
            break;
          }
        }
      }
    };

    handleInitialActive();

   const isMobile = window.innerWidth < 1024; // lg breakpoint

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActive(entry.target.id);
      }
    });
  },
  {
    root: null,
    rootMargin: isMobile ? "-20% 0px -20% 0px" : "0px",
    threshold: isMobile ? 0 : 0.5,
  }
);

    sections.forEach((section) => {
      const el = document.getElementById(section);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <Sidebar active={active} />
      <div className="flex-1 bg-gray-100 lg:ml-70">
        <main className="grow overflow-auto">
          <section id="about" className="min-h-screen p-8">
            <About />
          </section>
          <section id="skills" className="min-h-screen p-8">
            <Skills />
          </section>
          <section id="tools" className="min-h-screen p-8">
            <Tools />
          </section>
          <section id="services" className="min-h-screen bg-[#b0b8c1] p-8">
            <Services />
          </section>
          <section id="results" className="min-h-screen p-8">
            <Results />
          </section>
          <section id="contact" className="min-h-screen p-8">
            <Contact />
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default ScrollSpy;
