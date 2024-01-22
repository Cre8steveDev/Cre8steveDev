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
      <div className="flex flex-col sm:flex-row bg-white bg-opacity-[10%] backdrop-blur-xl rounded-2xl gap-4 p-6 text-center mt-12 items-center text-darkNeutral h-[500px]">
        {/* Image and Short Stats starts here */}
        <section className="w-full">
          <img src={proj.imgUrl} alt={proj.projName} />

          {/*  */}
          <h2>{proj.projName}</h2>

          {/* Render Stacks Array */}
          <div className="flex gap-3">
            {stacks.map((stack, idx) => (
              <p key={idx}>{stack}</p>
            ))}
          </div>
        </section>

        {/* Description Starts here */}
        <section className="w-full text-left">
          <h2 className="font-extrabold text-xl sm:text-4xl mb-4">
            My Learning Points
          </h2>
          <p>{proj.projDescription}</p>
        </section>
      </div>
    </div>
  );
};

export default ProjectView;
