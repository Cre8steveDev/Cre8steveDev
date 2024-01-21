import { useParams } from "react-router-dom";
import projectsdata from "./projectsdata.js";

const ProjectView = () => {
  const { param } = useParams();

  const proj = projectsdata.find((proj) => proj.id === param);
  console.log(proj);

  return (
    <div className="w-full h-screen snap-center min-h-screen overflow-y-scroll flex flex-col justify-center relative overflow-x-hidden ">
      {/*  */}
      <div className="flex flex-col sm:flex-row bg-white bg-opacity-[10%] backdrop-blur-xl rounded-2xl gap-4 p-6 text-center mt-12 items-center text-darkNeutral h-[500px]">
        <section>Image of project goes here</section>
        <section>Details of Project goes here</section>
      </div>
    </div>
  );
};

export default ProjectView;
