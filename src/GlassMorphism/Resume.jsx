import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

// eslint-disable-next-line react/prop-types
const Resume = ({ setScrollY }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: "all" });

  useEffect(() => {
    setScrollY(75);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);

  return (
    <div
      id="resume"
      ref={ref}
      className="w-full h-screen snap-center min-h-screen overflow-y-scroll flex flex-col justify-center relative overflow-x-hidden "
    >
      {/*  */}
      <div className="flex flex-col  bg-white bg-opacity-[10%] backdrop-blur-xl rounded-2xl gap-4 p-6 text-center mt-12 items-center sm:w-[90%] lg:w-full">
        <p className="text-darkNeutral tracking-[0.6rem]">
          PROFESSIONAL SUMMARY
        </p>

        {/* Container */}
        <div
          role="container"
          className="flex flex-col md:flex-row justify-center items-center w-full p-4"
        >
          <div className="flex flex-col w-full">
            <img
              src="images/hero_pic.png"
              alt="Profile Pic"
              className="rounded-full bg-slate-500 w-[150px] h-[150px]object-cover mx-auto"
            />
            <div className="font-extrabold text-4xl text-darkNeutral">
              <p className="w-full">Stephen</p>
              <p className="w-full">Omoregie</p>
            </div>
            <p className="font-medium text-sm mt-4 text-darkNeutral">
              Full Stack MERN Developer
            </p>
            <p className="font-medium text-sm text-darkNeutral">
              Python (Flash & Django)
            </p>
            <p className="font-medium text-sm text-darkNeutral">
              Designer (Graphic and UI)
            </p>
            <p className="font-bold text-darkNeutral mb-6">Video Editor</p>

            {/* Download Button */}
            <input
              type="button"
              value={"DOWNLOAD RESUME"}
              className="p-3 bg-darkNeutral backdrop-blur-3xl w-full max-w-[300px] mx-auto rounded-lg cursor-pointer active:animate-ping hover:bg-white hover:text-darkBlue transition ease-in animate-pulse"
            />
          </div>

          {/* RIGHT HAND SIDE */}
          <div className="flex flex-col w-full text-left gap-5 text-darkNeutral ">
            <section>
              <p className="font-bold">Education</p>
              <h2 className="font-extrabold text-white">
                B.Sc Computer Science
              </h2>
              <p className="text-sm mb-2">
                National Open University of Nigeria{" "}
              </p>
              <h2 className="font-extrabold text-white">
                Full Stack Software Engineer
              </h2>
              <p className="text-sm mb-2">ALX Africa (In View)</p>
            </section>
            {/*  */}
            <section>
              <p className="font-bold">Other Training/Certificates</p>
              <h2 className="font-extrabold text-white">
                Fundamentals of Graphic Design
              </h2>
              <p className="text-sm mb-2">Coursera / Udemy / Youtube </p>
              <h2 className="font-extrabold text-white">
                Responsive Web Design & WordPress
              </h2>
              <p className="text-sm mb-2">FreeCodeCamp / MTN Nigeria</p>
            </section>
            {/*  */}
            <section>
              <p className="font-bold">Interests</p>
              <h2 className="font-extrabold text-white">
                Listening to Jazz Music
              </h2>
              <p className="text-sm mb-2">
                (Louis Prima, Frank Sinatra, et al){" "}
              </p>
              <p className="font-extrabold text-white">Wannabe Philosopher</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
