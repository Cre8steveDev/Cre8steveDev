import { useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// eslint-disable-next-line react/prop-types
const HeroPage = ({ setScrollY }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 'all' });

  useEffect(() => {
    setScrollY(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);

  return (
    <div
      id="home"
      ref={ref}
      className="w-full sm:h-screen sm:snap-center sm:min-h-screen overflow-y-scroll flex flex-col justify-center relative overflow-x-hidden mb-1 sm:mb-0"
    >
      {/*  */}
      <div className="flex flex-col-reverse sm:flex-col md:flex-row bg-white bg-opacity-[10%] backdrop-blur-xl rounded-2xl sm:w-[90%] lg:w-full mt-[110px]">
        <div className="w-full object-cover self-end">
          <img
            src="images/hero_pic.png"
            alt="Stephen Omoregie"
            className="w-[80%] sm:w-full mx-auto sm:mx-0"
          />
        </div>

        {/* Text Container  */}
        <div className="w-full flex flex-col justify-center items-center p-3">
          <div className="w-full text-center text-4xl  md:text-left md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mt-0">
            <p className="w-full text-darkBrown">CREATIVE</p>
            <p className="w-full text-darkNeutral">MERN STACK</p>
            <p className="w-full text-darkBrown">DEVELOPER</p>
          </div>

          {/* Short introduction */}
          <p className="text-center sm:text-left sm:text-xl text-darkNeutral mb-4 w-[90%] sm:w-full">
            Stephen is a highly-motivated <b>Full Stack Web Developer</b>{' '}
            passionate about building performant and scalable web applications
            with modern and intuitive user interfaces.
          </p>

          {/* Call to Action Button */}
          <div className="flex justify-center sm:justify-items-start sm:self-start self-center">
            <a href="#projects">
              <input
                type="submit"
                value={'PORTFOLIO'}
                className=" rounded-md p-2 border-2 border-darkBrown text-darkBrown font-bold cursor-pointer mr-5 hover:bg-darkBrown hover:text-darkBlue transition ease-in duration-200 hover:animate-ping text-sm"
              />
            </a>

            <a href="#contact">
              <input
                type="submit"
                value={'CONTACT ME'}
                className=" rounded-md p-2 border-2 border-darkBlue bg-darkBlue text-darkBrown font-bold cursor-pointer  transition ease-in duration-200 hover:animate-ping text-sm"
              />
            </a>
          </div>
        </div>
      </div>

      <div className=" bg-blue-700 p-4 bg-opacity-[10%] backdrop-blur-xl rounded-2xl  absolute bottom-5 hidden md:block">
        <motion.p
          initial={{ x: 0 }}
          animate={{
            x: '-100%',
            transition: {
              repeat: Infinity,
              repeatType: 'mirror',
              duration: 20,
            },
          }}
          className="text-5xl font-bold text-darkNeutral opacity-15 whitespace-nowrap overflow-x-scroll"
        >
          Frontend Development: HTML, CSS, JavaScript, TailwindCSS, Framer
          Motion | Backend Development: NodeJS/ExpressJS, MongoDB, Deployment,
          Postman | Others: UI Design (Figma) Version Control, Bash Scripting,
          Graphic Design, Video Editing, Python
        </motion.p>
      </div>
    </div>
  );
};

export default HeroPage;
