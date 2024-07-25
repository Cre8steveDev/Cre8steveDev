import { motion } from 'framer-motion';

const HeroPage = () => {
  // Return JSX For the Home Page
  return (
    <div
      id="home"
      className="w-[80%] mx-auto md:w-full sm:h-screen overflow-y-scroll flex flex-col relative overflow-x-hidden mb-1 sm:mb-0 items-center md:mt-8"
    >
      {/*  */}
      <div className="flex flex-col-reverse sm:flex-col md:flex-row bg-white bg-opacity-[10%] backdrop-blur-xl rounded-2xl sm:w-[90%] lg:w-full mt-[80px]">
        <div className="w-full object-cover self-end">
          <img
            src="images/hero_pic.png"
            alt="Stephen Omoregie Profile Photo"
            className="w-[80%] sm:w-full mx-auto sm:mx-0 hidden sm:block"
          />

          {/* Image for mobile Screen */}
          <img
            src="images/hero_pic_mobile.png"
            alt="Stephen Omoregie Profile Photo"
            className="w-[80%] sm:w-full mx-auto sm:mx-0 sm:hidden"
          />
        </div>

        {/* Text Container  */}
        <div className="w-full flex flex-col justify-center items-center p-3 md:pr-6 md:py-8">
          <div className="w-full text-center text-4xl  md:text-left md:text-5xl lg:text-6xl font-extrabold mb-4 mt-4 sm:mt-0">
            <p className="w-full text-darkNeutral">CREATIVE</p>
            <p className="w-full text-darkNeutral">MOBILE & WEB</p>
            <p className="w-full text-darkBrown">DEVELOPER</p>
          </div>

          {/* Short introduction */}
          <p className="text-center sm:text-left text-[13px] sm:text-md md:text-base lg:text-lg text-darkNeutral mb-4 w-[90%] sm:w-full">
            Hi, I am Stephen, a passionate{' '}
            <b>Full Stack Mobile and Web Developer</b> (Frontend Heavy 😁). My
            journey in tech is driven by a desire to create innovative,
            user-friendly applications that solve real-world problems.
          </p>

          {/* Short Introduction Two */}
          <p className="text-center sm:text-left text-[13px] sm:text-md md:text-base lg:text-lg text-darkNeutral mb-4 w-[90%] sm:w-full">
            With a degree in Computer Science and training as a Full Stack
            Software Engineer with ALX Africa, I&apos;ve built a solid
            foundation in both theoretical knowledge and practical skills. My
            skill set spans from frontend and backend development to UI and
            graphic design, allowing me to approach projects with a holistic
            perspective.
          </p>

          {/* Call to Action Button */}
          <div className="flex justify-center sm:justify-items-start sm:self-start self-center">
            <a href="#projects">
              <input
                type="submit"
                value={'PROJECTS'}
                className=" rounded-md p-2 px-4 border-2 border-darkBrown text-darkBrown font-bold cursor-pointer mr-5 hover:bg-darkBrown hover:text-darkBlue transition ease-in duration-200 hover:animate-ping text-sm"
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

      <div className=" bg-blue-700 p-4 bg-opacity-[10%] backdrop-blur-xl sm:rounded-2xl absolute bottom-0 sm:bottom-[100px] overflow-x-hidden">
        <motion.p
          initial={{ x: 500 }}
          animate={{
            x: 2000,
            transition: {
              repeat: Infinity,
              repeatType: 'mirror',
              duration: 50,
            },
          }}
          className="text-xl sm:text-5xl font-bold text-white opacity-20 sm:opacity-15 whitespace-nowrap overflow-x-scroll ml-[500px]"
        >
          Frontend Development: HTML, CSS, TailwindCSS, JavaScript, ReactJS,
          NextJS, React Native, Framer Motion | Backend Development:
          NodeJS/ExpressJS, Python/Flask, MongoDB, JWT (Authentication),
          Firebase
        </motion.p>
      </div>
    </div>
  );
};

export default HeroPage;
