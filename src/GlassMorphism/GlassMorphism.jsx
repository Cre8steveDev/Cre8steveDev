// Import UI Components
import Header from './Header.jsx';
import HeroPage from './HeroPage.jsx';
import Skills from './Skills.jsx';
import Portfolio from './Portfolio.jsx';
import Resume from './Resume.jsx';
import Contact from './Contact.jsx';
import ProjectView from '../components/ProjectView.jsx';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';

// Additionals will come here

// eslint-disable-next-line react/prop-types
const GlassMorphism = ({ setScrollY, setViewingProduct }) => {
  // Define ref for container
  useEffect(() => {
    setViewingProduct(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col  items-center relative sm:snap-y sm:snap-mandatory w-full md:w-[90%] lg:max-w-screen-lg overflow-y-scroll overflow-x-hidden">
      <Header />

      <Routes>
        <Route
          index
          element={
            <div className="">
              <HeroPage setScrollY={setScrollY} />
              <Skills setScrollY={setScrollY} />
              <Portfolio setScrollY={setScrollY} />
              <Resume setScrollY={setScrollY} />
              <Contact setScrollY={setScrollY} />
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
