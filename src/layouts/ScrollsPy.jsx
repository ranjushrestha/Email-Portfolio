import { useEffect, useState } from "react";
import Sidebar from "../components/layouts/Sidebar";
import Footer from "../components/layouts/Footer";

import About from "../pages/About";
import Skills from "../pages/Skills";
import Tools from "../pages/Tools";
import Services from "../pages/Services";
import Results from "../pages/Results";
import Contact from "../pages/Contact";

const sections = ["ABOUT", "SKILLS", "TOOLS", "SERVICES", "RESULTS", "CONTACT"];

const ScrollSpy = () => {
  const [active, setActive] = useState(sections[0]);

  useEffect(() => {
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
        rootMargin: "0px",
        threshold: 0.6,
      }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Sidebar */}
      <Sidebar active={active} />

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 lg:ml-70">
        <main className="grow overflow-auto">
          <section id="ABOUT" className="min-h-screen p-8">
            <About />
          </section>
          <section id="SKILLS" className="min-h-screen p-8">
            <Skills />
          </section>
          <section id="TOOLS" className="min-h-screen p-8">
            <Tools />
          </section>
          <section id="SERVICES" className="min-h-screen bg-[#b0b8c1] p-8">
            <Services />
          </section>
          <section id="RESULTS" className="min-h-screen p-8">
            <Results />
          </section>
          <section id="CONTACT" className="min-h-screen p-8">
            <Contact />
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default ScrollSpy;