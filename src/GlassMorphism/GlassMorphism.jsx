// Import UI Components
import Header from './Header.jsx';
import HeroPage from './HeroPage.jsx';
import Skills from './Skills.jsx';
import Portfolio from './Portfolio.jsx';
import Resume from './Resume.jsx';
import Contact from './Contact.jsx';
import ProjectView from '../components/ProjectView.jsx';
import { Routes, Route } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';
import OpenSourceContributions from './OpenSource.jsx';

// eslint-disable-next-line react/prop-types
const GlassMorphism = ({ setScrollY, setViewingProduct }) => {
  // Define ref for container
  // Scroll Tracking Feature
  const heroRef = useRef(null);
  const skillRef = useRef(null);
  const projectRef = useRef(null);
  const resumeRef = useRef(null);
  const contactRef = useRef(null);

  const heroInView = useInView(heroRef, { threshold: 0.4 });
  const skillsInView = useInView(skillRef, { threshold: 0.4 });
  const portfolioInView = useInView(projectRef, { threshold: 0.4 });
  const resumeInView = useInView(resumeRef, { threshold: 0.4 });
  const contactInView = useInView(contactRef, { threshold: 0.4 });

  useEffect(() => {
    if (heroInView) setScrollY(0);
    else if (skillsInView) setScrollY(25);
    else if (portfolioInView) setScrollY(50);
    else if (resumeInView) setScrollY(75);
    else if (contactInView) setScrollY(100);
  }, [
    heroInView,
    skillsInView,
    portfolioInView,
    resumeInView,
    contactInView,
    setScrollY,
  ]);

  // Reset ViewProduct Mode to false when comp mounts
  useEffect(() => {
    setViewingProduct(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Return JSX Value

  return (
    <div
      id="scroll-container"
      className="flex flex-col  items-center relative w-full md:w-[90%] lg:max-w-screen-lg overflow-y-scroll overflow-x-hidden"
    >
      <Header />

      <Routes>
        <Route
          index
          element={
            <div className="">
              <div ref={heroRef}>
                <HeroPage />
              </div>

              <div ref={skillRef}>
                <Skills />
              </div>

              <div ref={projectRef}>
                <Portfolio />
              </div>

              <div>
                <OpenSourceContributions />
              </div>

              <div ref={resumeRef}>
                <Resume />
              </div>

              <div ref={contactRef}>
                <Contact />
              </div>
            </div>
          }
        />
        <Route
          path="project/:param"
          element={<ProjectView setViewingProduct={setViewingProduct} />}
        />
        <Route path="*" element={<div>Error</div>} />
      </Routes>
    </div>
  );
};

export default GlassMorphism;
