/* eslint-disable react/prop-types */
import { useParams, useNavigate, Navigate } from 'react-router-dom';
import projectsdata from './projectsdata.js';
import { useEffect, useRef } from 'react';

const ProjectView = ({ setViewingProduct }) => {
  useEffect(() => {
    setViewingProduct(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const { param } = useParams();

  const projectsArray = [
    'greenshopper',
    'convata',
    'clearlink',
    'portfolio',
    'healthor',
    'medikall',
    'medikall_landing',
    'naijarium',
    'quotix',
    'salonix',
    'joobz',
  ];
  let currentIndex = projectsArray.indexOf(param);

  const proj = projectsdata.find((proj) => proj.id === param);
  const navigate = useNavigate();
  const containerRef = useRef(null);

  // UseEffect that ensures element scrolls to the top when it mounts

  const stacks = proj.stacks;

  const handlePrevious = () => {
    // Handle previous logic

    if (!currentIndex) {
      navigate(`/project/${projectsArray[10]}`);
    } else {
      --currentIndex;
      navigate(`/project/${projectsArray[currentIndex]}`);
    }
  };

  const handleNext = () => {
    // Handle Next Logic
    if (currentIndex >= 10) {
      navigate(`/project/${projectsArray[0]}`);
    } else {
      ++currentIndex;
      navigate(`/project/${projectsArray[currentIndex]}`);
    }
  };

  // Save location link
  const locationData = location.href;

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = 0;
    }
  }, [locationData]);

  return proj ? (
    <div className="w-[80%] sm:w-full overflow-y-scroll flex flex-col justify-center relative overflow-x-hidden mt-3 sm:mt-0">
      {/*  */}
      <div
        ref={containerRef}
        className="flex flex-col bg-white bg-opacity-[10%] backdrop-blur-xl rounded-2xl md:p-6 text-center mt-16 sm:mt-32 items-center text-darkNeutral  overflow-y-scroll"
      >
        {/* Image and Short Stats starts here */}
        <section className="w-full">
          <img src={proj.imgUrl} alt={proj.projName} className="rounded-lg" />

          {/*  */}
          <h2 className="sm:text-4xl font-extrabold my-4">{proj.projName}</h2>

          {/* Render Stacks Array */}
          <div className="flex gap-1 justify-center">
            {stacks.map((stack, idx) => {
              const colorr =
                stack === 'ReactJS'
                  ? 'bg-blue-600 text-white'
                  : stack === 'MongoDB'
                  ? 'bg-green-600 text-white'
                  : stack === 'TailwindCSS'
                  ? 'bg-darkBlue text-white'
                  : stack === 'OpenAI'
                  ? 'bg-black text-white'
                  : stack === 'Python'
                  ? 'bg-yellow-500 text-black'
                  : stack === 'TypeScript'
                  ? 'bg-blue-500 text-white'
                  : 'bg-red-500 text-white';
              return (
                <input
                  key={idx}
                  type="button"
                  value={stack}
                  className={`p-1 mr-2 ${colorr} rounded-md text-[10px] sm:text-xs hover:animate-pulse`}
                />
              );
            })}
          </div>
        </section>

        {/* Description Starts here */}
        <section className="w-full text-left mt-4 text-white bg-black p-4 rounded-lg bg-opacity-40">
          <h2 className="text-center font-extrabold">Project Description</h2>
          <p className="hyphens-auto sm:p-[90px] sm:py-3 text-xs sm:text-lg whitespace-pre-line">
            {proj.projDescription}
          </p>
        </section>

        {/* Live Link and Github link here || Next and Previous */}
        <section className="flex gap-3 mt-4 flex-wrap justify-center items-center mb-10">
          {/* Handle Previous Project View */}
          {currentIndex > 0 && (
            <button
              className="bg-white text-[10px] sm:text-sm text-slate-900 p-1 px-2 rounded-lg hover:scale-90 transition ease-in hover:shadow-xl"
              onClick={handlePrevious}
            >
              Previous
            </button>
          )}
          {/* Live project Link */}
          <a href={proj.liveUrl} target="_blank" rel="noreferrer">
            <button className="bg-red-700 text-[10px] sm:text-sm p-1 px-2 rounded-lg hover:scale-90 transition ease-in hover:shadow-xl">
              Demo Link
            </button>
          </a>

          {/* Github Code link */}
          <a href={proj.githubUrl} target="_blank" rel="noreferrer">
            <button className="bg-black text-[10px] sm:text-sm p-1 px-2 rounded-lg hover:scale-90 transition ease-in hover:shadow-xl">
              GitHub
            </button>
          </a>

          {/* Handle Next Project View */}
          {currentIndex < 10 && (
            <button
              className="bg-white text-[10px] sm:text-sm text-slate-900 p-1 px-2 rounded-lg hover:scale-90 transition ease-in hover:shadow-xl"
              onClick={handleNext}
            >
              Next
            </button>
          )}
          {/* Go Back Home */}
          <button
            className="bg-darkBlue text-[10px] sm:text-sm text-slate-50 p-1 px-2 rounded-lg hover:scale-90 transition ease-in hover:shadow-xl"
            onClick={() => navigate('/')}
          >
            Back to Home
          </button>
        </section>
      </div>
    </div>
  ) : (
    <Navigate to="/" />
  );
};

export default ProjectView;
