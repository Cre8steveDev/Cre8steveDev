import { useParams } from "react-router-dom";
import projectsdata from "./projectsdata.js";

const ProjectView = () => {
  const { param } = useParams();
  /**
   * 
id: 
imgUrl: 
liveUrl: 
stacks: 
projDescription:
githubUrl: 
   */

  const proj = projectsdata.find((proj) => proj.id === param);

  if (!proj)
    return (
      <div>
        <p>Project Not Found</p>
      </div>
    );
  const stacks = proj.stacks;

  return (
    <div className="w-full h-screen snap-center min-h-screen overflow-y-scroll flex flex-col justify-center relative overflow-x-hidden ">
      {/*  */}
      <div className="flex flex-col bg-white bg-opacity-[10%] backdrop-blur-xl rounded-2xl p-6 text-center mt-12 sm:mt-32 items-center text-darkNeutral  overflow-y-scroll">
        {/* Image and Short Stats starts here */}
        <section className="w-full">
          <img src={proj.imgUrl} alt={proj.projName} className="rounded-lg" />

          {/*  */}
          <h2 className="sm:text-4xl font-extrabold my-4">{proj.projName}</h2>

          {/* Render Stacks Array */}
          <div className="flex gap-1 justify-center">
            {stacks.map((stack, idx) => {
              const colorr =
                stack === "ReactJS"
                  ? "bg-blue-600 text-white"
                  : stack === "MongoDB"
                  ? "bg-green-600 text-white"
                  : stack === "TailwindCSS"
                  ? "bg-darkBlue text-white"
                  : stack === "OpenAI"
                  ? "bg-black text-white"
                  : "bg-red-500 text-white";
              return (
                <input
                  key={idx}
                  type="button"
                  value={stack}
                  className={`p-1 mr-2 ${colorr} rounded-md text-xs hover:animate-pulse`}
                />
              );
            })}
          </div>
        </section>

        {/* Description Starts here */}
        <section className="w-full text-left mt-4 text-white bg-black p-4 rounded-lg bg-opacity-30">
          <h2 className="text-center font-extrabold">My Learning Points</h2>
          <p className="hyphens-auto">{proj.projDescription}</p>
        </section>
      </div>
    </div>
  );
};

export default ProjectView;
