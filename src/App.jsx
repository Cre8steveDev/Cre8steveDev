/**
 * App Component
 * @returns JSX
 */
// Import Packages or Libraries
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import GlassMorphism from "./GlassMorphism/GlassMorphism";
import SocialLinks from "./components/SocialLinks.jsx";
import RandomQuote from "./RandomQuote/RandomQuote.jsx";

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [glassMorphism, setGlassMorphism] = useState(true);
  const [viewingProduct, setViewingProduct] = useState(false);

  useEffect(() => {
    setViewingProduct(false);
  }, []);

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
        backgroundColor: "rgba(9, 30, 60, 1)",
        // backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="flex flex-col  items-center w-full h-screen overflow-hidden"
    >
      {glassMorphism && (
        <GlassMorphism
          setScrollY={setScrollY}
          setViewingProduct={setViewingProduct}
        />
      )}

      {!glassMorphism && <RandomQuote />}

      {/* Interactivity */}
      <div className=" block w-[30px] sm:w-[40px] absolute top-[440px] sm:top-32 sm:right-3 right-0 overflow-x-hidden">
        {/* Scroll Progress Bar */}

        {!viewingProduct && (
          <div className="h-[250px] sm:h-[200px] bg-black bg-opacity-35 rounded-2xl overflow-hidden hidden sm:block">
            <motion.section
              initial={{ height: "0%" }}
              animate={{
                height: `${scrollY}%`,
                transition: { stiffness: 100, duration: 0.5 },
              }}
              id="growingscroll"
              className="bg-white"
            ></motion.section>
          </div>
        )}

        {/* Social Links Here  */}
        <SocialLinks />

        {/* Trigger website Design Type */}
        {!viewingProduct && (
          <input
            type="button"
            value={glassMorphism ? "Random Quote" : "Back to Me!"}
            className="-rotate-90 mt-10 -ml-9 bg-red-700 text-darkNeutral p-2 text-xs sm:text-sm font-extrabold hover:bg-darkBrown transition ease-in rounded-xl"
            onClick={() => setGlassMorphism(!glassMorphism)}
          />
        )}

        {/* Go To Top */}
        {scrollY > 0 && !viewingProduct && glassMorphism && (
          <a href="#home">
            <input
              type="button"
              value={"=> Top"}
              className="-rotate-90 mt-14  -ml-1 bg-darkBlue text-darkNeutral p-2 text-xs font-bold hover:bg-darkBrown transition ease-in rounded-xl hidden sm:block"
            />
          </a>
        )}
      </div>
    </motion.div>
  );
}

export default App;
