/**
 * App Component
 * @returns JSX
 */
// Import Packages or Libraries
import { useState } from "react";
import { motion } from "framer-motion";
import GlassMorphism from "./GlassMorphism/GlassMorphism";
import SocialLinks from "./components/SocialLinks.jsx";

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [glassMorphism, setGlassMorphism] = useState(true);

  //  Define Dynamic Class for App Container
  const bgImage = glassMorphism
    ? `images/background_2.jpg`
    : `images/background.jpg`;

  // Return to DOM

  return (
    <motion.div
      id="MainAppBody"
      style={{
        background: `url(${bgImage})`,
        // backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="flex flex-col  items-center w-full h-screen overflow-hidden"
    >
      {glassMorphism && <GlassMorphism setScrollY={setScrollY} />}

      {!glassMorphism && <div>Another Design</div>}

      {/* Interactivity */}
      <div className=" hidden sm:block w-[30px] sm:w-[40px] absolute top-32 right-3">
        {/* Scroll Progress Bar */}
        <div className="h-[250px] sm:h-[200px] bg-black bg-opacity-35 rounded-2xl overflow-hidden">
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

        {/* Social Links Here  */}
        <SocialLinks />

        {/* Trigger website Design Type */}
        <input
          type="button"
          value={glassMorphism ? "Designer Site" : "Developer Site"}
          className="-rotate-90 mt-10 -ml-7 bg-yellow-700 text-darkNeutral p-2 text-xs font-bold hover:bg-darkBrown transition ease-in rounded-xl"
          onClick={() => setGlassMorphism(!glassMorphism)}
        />

        {/* Go To Top */}
        {scrollY > 0 && (
          <a href="#home">
            <input
              type="button"
              value={"=> Top"}
              className="-rotate-90 mt-14  -ml-1 bg-darkBlue text-darkNeutral p-2 text-xs font-bold hover:bg-darkBrown transition ease-in rounded-xl"
            />
          </a>
        )}
      </div>
    </motion.div>
  );
}

export default App;
