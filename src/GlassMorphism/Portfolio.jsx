import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import { Link } from "react-router-dom";

// Projects Array Details
const myProjects = [
  {
    image: "projects/greenshopper.png",
    description:
      "This exciting project was created using the MERN Stack. It exposed me to different tools and packages needed for building a fast, secure and responsive web app.",
    tools: ["ReactJS", "ExpressJS", "MongoDB", "Tailwind"],
    name: "GreenShopper eCommerce",
    link: "greenshopper",
  },

  {
    image: "projects/portfolio.png",
    description:
      "My Portfolio Website created with a passion for creating User-friendly and intuitive Interfaces that adequately represents my Skills as a proficient Full Stack Developer.",
    tools: ["ReactJS", "Framer Motion", "Tailwind"],
    name: "Cre8Steve.com",
    link: "portfolio",
  },

  {
    image: "projects/healthor.png",
    description:
      "Healthor is a project built using ReactJS with integration of the OpenAI ChatGPT API. The model used for this project is the GPT 3.5 Turbo for conversational diagnosis.",
    tools: ["ReactJS", "OpenAI", "Google Maps"],
    name: "Healthor - AI Diagnosis",
    link: "healthor",
  },
  {
    image: "",
    description: "",
    tools: [],
    name: "Check back again for new Updates",
    link: "",
  },
];

// eslint-disable-next-line react/prop-types
const Portfolio = ({ setScrollY }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: "all" });

  useEffect(() => {
    setScrollY(50);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);

  return (
    <div
      id="projects"
      ref={ref}
      className="w-full h-screen snap-center min-h-screen overflow-y-scroll flex flex-col justify-center relative overflow-x-hidden "
    >
      {/*  */}
      <div className="flex flex-col  bg-white bg-opacity-[10%] backdrop-blur-xl rounded-2xl gap-4 p-6 text-center mt-12 items-center text-darkNeutral sm:w-[90%] lg:w-full">
        <h2 className="tracking-[0.6rem]">MY PORTFOLIO</h2>
        <p className="max-w-2xl text-md">
          Here are some of my featured projects showcasing my experience as a
          professional Web Developer with a versatile skills in programming,
          problem-solving, design and more.
        </p>

        {/* Projects Container  */}
        <div className=" w-full p-4 flex flex-row flex-wrap sm:h-[550px] overflow-x-hidden overflow-y-visible justify-center gap-5">
          {/* Create Array of Projects and map through */}
          {myProjects.map((proj, idx) => (
            <div
              key={idx}
              className="min-w-[300px] w-full max-w-[350px]  text-white rounded-xl overflow-hidden hover:shadow-2xl transition ease-in backdrop-blur-2xl bg-white bg-opacity-0"
            >
              <Link to={`/project/${proj.link}`}>
                <img src={proj.image} alt="" className="w-full" />
                <div className="p-3">
                  <h2 className="font-extrabold text-xl">{proj.name}</h2>
                  <p className="text-sm my-3 w-[90%] mx-auto">
                    {proj.description}
                  </p>
                  <div>
                    {/* Map Through the array of Tools */}
                    {proj.tools.map((tool, idx) => {
                      const colorr =
                        tool === "ReactJS"
                          ? "bg-blue-600 text-white"
                          : tool === "MongoDB"
                          ? "bg-green-600 text-white"
                          : tool === "Tailwind"
                          ? "bg-darkBlue text-white"
                          : tool === "OpenAI"
                          ? "bg-black text-white"
                          : "bg-red-500 text-white";
                      return (
                        <input
                          key={idx}
                          type="button"
                          value={tool}
                          className={`p-1 mr-2 ${colorr} rounded-md text-xs hover:animate-pulse`}
                        />
                      );
                    })}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        {/* Projects Container End */}
      </div>
    </div>
  );
};

export default Portfolio;
