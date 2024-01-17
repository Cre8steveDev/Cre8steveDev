import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

// Skills Image Array
const mySkills = [
  { img: "icons/html.png", title: "HTML5" },
  { img: "icons/css.png", title: "CSS3" },
  { img: "icons/javascript.png", title: "Vanilla JavaScript" },
  { img: "icons/react.png", title: "ReactJS" },
  { img: "icons/nodejs.png", title: "NodeJS" },
  { img: "icons/express.png", title: "ExpressJS" },
  { img: "icons/mongo.png", title: "MongoDB" },
  { img: "icons/python.png", title: "Python" },
  { img: "icons/c.png", title: "C" },
  { img: "icons/tailwind.png", title: "TailwindCSS" },
  { img: "icons/framermotion.png", title: "Framer Motion" },
  { img: "icons/linux.png", title: "Linux & Bash Scripting" },
  { img: "icons/figma.png", title: "Figma UI Design" },
  { img: "icons/photoshop.png", title: "Photoshop" },
  { img: "icons/premierepro.png", title: "Premiere Pro" },
  { img: "icons/git.png", title: "Git | Version Control" },
  { img: "icons/davinciresolve.png", title: "Davinci Resolve" },
  { img: "icons/coreldraw.png", title: "Corel Draw" },
];
// eslint-disable-next-line react/prop-types
const Skills = ({ setScrollY }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: "all" });

  useEffect(() => {
    setScrollY(25);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);

  return (
    <div
      id="skills"
      ref={ref}
      className="w-full h-screen snap-center min-h-screen overflow-y-scroll flex flex-col justify-center relative overflow-x-hidden"
    >
      {/*  */}
      <div className="flex flex-col  bg-white bg-opacity-[10%] backdrop-blur-xl rounded-2xl gap-4 p-6 text-center mt-[300px] sm:mt-12 items-center text-darkNeutral tracking-[0.6rem] sm:w-[90%] lg:w-full">
        <p className="text-xs sm:text-inherit mt-5 sm:mt-0">
          MY PROFESSIONAL STACK
        </p>

        {/* Skills Container  */}
        <div
          role="Skills"
          className="flex flex-wrap gap-6 max-w-4xl justify-center my-5 sm:w-[90%]"
        >
          {
            // Iterate through array to render the skills icons
            mySkills.map((skill, idx) => (
              <motion.div
                key={idx}
                className="max-w-[80px] max-h-[80px] sm:max-w-[120px] sm:max-h-[120px] bg-white rounded-lg object-cover p-4 flex"
                initial={{ scale: 1, opacity: 1 }}
                whileHover={{
                  scale: 0.8,
                  opacity: 0.8,
                  transition: {
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 1.2,
                  },
                }}
              >
                <img
                  src={skill.img}
                  alt=""
                  title={skill.title}
                  className="w-full object-contain"
                />
              </motion.div>
            ))
          }
        </div>
        <p className="text-xs tracking-widest">
          WEILDING THESE TOOLS WITH A HIGH-LEVEL OF PROFICIENCY
        </p>
      </div>
    </div>
  );
};

export default Skills;
