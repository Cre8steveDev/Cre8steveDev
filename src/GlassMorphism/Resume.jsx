// Resume Component
const Resume = () => {
  // Return JSX For the Component

  return (
    <div
      id="resume"
      className="w-[80%] mx-auto md:w-full overflow-y-scroll flex flex-col justify-center relative overflow-x-hidden "
    >
      {/*  */}
      <div className="flex flex-col mx-auto bg-white bg-opacity-[10%] backdrop-blur-xl rounded-2xl p-6 text-center mt-[40px] sm:mt-12 items-center sm:w-[90%] lg:w-full">
        <div className="font-extrabold text-2xl sm:text-4xl text-darkNeutral">
          <p className="w-full">About Me</p>
        </div>

        {/* Container */}
        <div
          role="container"
          className="flex flex-col md:flex-row justify-center sm:px-12 sm:p-4 gap-5"
        >
          <div className="flex flex-col w-full sm:mb-0 mb-5">
            <p className="text-[13px] sm:text-lg mt-4 text-darkNeutral">
              What excites me most about software development is the constant
              evolution of technologies and the opportunity to learn something
              new every day. I&apos;m particularly drawn to the MERN stack for
              its flexibility and scalability in building modern web
              applications. The challenge of turning complex problems into
              elegant, efficient solutions is what keeps me motivated and
              engaged in this field.
            </p>

            {/* About me description */}
            <p className="font-medium text-[13px] sm:text-lg  mt-4 text-darkNeutral">
              MERN Stack | React Native (Expo) | Python (Flask) | Designer
              (Graphic and UI)
            </p>

            {/* Download Button */}
            <a href="curriculum-vitae-stephen-omoregie.pdf" download={true}>
              <input
                type="button"
                value={'DOWNLOAD RESUME'}
                className="p-3 bg-darkNeutral backdrop-blur-3xl w-full max-w-[80%] mx-auto rounded-lg cursor-pointer active:animate-ping hover:bg-white hover:text-darkBlue transition ease-in animate-pulse mt-8"
              />
            </a>
          </div>

          {/* RIGHT HAND SIDE */}
          <div className="flex flex-col sm:w-[400px] text-center sm:text-left gap-5 text-darkNeutral ">
            <section>
              <p className="font-bold">Education</p>
              <h2 className="font-extrabold text-white">
                B.Sc Computer Science
              </h2>
              <p className="text-sm mb-2">
                National Open University of Nigeria{' '}
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
                (Louis Prima, Frank Sinatra, et al){' '}
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
