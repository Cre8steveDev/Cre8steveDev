/**
 * App Component
 * @returns JSX
 */
// Import Packages or Libraries
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import GlassMorphism from './GlassMorphism/GlassMorphism';
import SocialLinks from './components/SocialLinks.jsx';
import RandomQuote from './RandomQuote/RandomQuote.jsx';
import { useLocation } from 'react-router-dom';

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [glassMorphism, setGlassMorphism] = useState(true);
  const [viewingProduct, setViewingProduct] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setViewingProduct(false);
  }, [location]);

  //  Define Dynamic Class for App Container
  const bgImage = glassMorphism ? `background_2.jpg` : `background.jpg`;

  //  Show Scroll Indicator only when on home page
  // const homeRef = useRef(null);
  // const isInView = useInView(homeRef, { amount: "all" });
  // Return to DOM

  return (
    <motion.div
      id="MainAppBody"
      style={{
        background: `url(${bgImage})`,
        backgroundColor: 'rgba(9, 30, 60, 1)',
        // backgroundRepeat: "no-repeat",
        backgroundSize: 'cover',
      }}
      className="flex flex-col  items-center w-full h-screen overflow-hidden relative"
    >
      {glassMorphism && (
        <GlassMorphism
          setScrollY={setScrollY}
          setViewingProduct={setViewingProduct}
        />
      )}

      {!glassMorphism && <RandomQuote />}

      {/* Interactivity */}
      <div className="w-[30px] sm:w-[40px]  absolute top-[20vh] sm:top-32 sm:right-3 right-0 overflow-x-hidden h-max">
        {/* Scroll Progress Bar */}

        {!viewingProduct && (
          <div className="h-[250px] sm:h-[400px] bg-black bg-opacity-35 rounded-2xl overflow-hidden w-[10px] sm:w-[30px] mx-auto">
            <motion.section
              initial={{ height: '0%' }}
              animate={{
                height: `${scrollY}%`,
                transition: { stiffness: 100, duration: 0.5 },
              }}
              id="growingscroll"
              className="bg-darkNeutral"
            ></motion.section>
          </div>
        )}

        {/* Social Links Here  */}
        <SocialLinks />

        {/* Trigger website Design Type */}
        {!viewingProduct && (
          <input
            type="button"
            value={glassMorphism ? "Don't Click" : 'Back to Me!'}
            className="-rotate-90 my-10 -ml-5 bg-red-800 text-darkNeutral p-1 px-2 text-[10px] sm:text-sm font-extrabold hover:bg-darkBrown transition ease-in rounded-xl mx-auto"
            onClick={() => setGlassMorphism(!glassMorphism)}
          />
        )}
      </div>
    </motion.div>
  );
}

export default App;
