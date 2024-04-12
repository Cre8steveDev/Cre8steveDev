import { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';
import { Link } from 'react-router-dom';

import myProjects from '../utilities/projectsCardData';

// eslint-disable-next-line react/prop-types
const Portfolio = ({ setScrollY }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 'all' });

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
      <div className="flex flex-col  bg-white bg-opacity-[10%] backdrop-blur-xl rounded-2xl gap-4 p-6 text-center sm:mt-12 items-center text-darkNeutral sm:w-[90%] lg:w-full mt-[1000px]">
        <div className="h-[800px] sm:h-0 sm:hidden"></div>
        <h2 className="tracking-[0.6rem] mt-[100px] sm:mt-0">MY PORTFOLIO</h2>
        <p className="max-w-2xl text-sm sm:text-md">
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
                <img
                  src={proj.image}
                  alt=""
                  className="w-full"
                  loading="lazy"
                />
                <div className="p-3">
                  <h2 className="font-extrabold text-xl">{proj.name}</h2>
                  {proj.description !== '' && (
                    <p className="text-sm">Click To View Details</p>
                  )}
                  <p className="text-sm my-3 w-[90%] mx-auto">
                    {proj.description}
                  </p>
                  <div>
                    {/* Map Through the array of Tools */}
                    {proj.tools.map((tool, idx) => {
                      const colorr =
                        tool === 'ReactJS'
                          ? 'bg-blue-600 text-white'
                          : tool === 'MongoDB'
                          ? 'bg-green-600 text-white'
                          : tool === 'Tailwind'
                          ? 'bg-darkBlue text-white'
                          : tool === 'OpenAI'
                          ? 'bg-black text-white'
                          : tool === 'Python'
                          ? 'bg-yellow-500 text-black'
                          : 'bg-red-500 text-white';
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
