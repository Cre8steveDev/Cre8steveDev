import { useParams } from "react-router-dom";

const ProjectView = () => {
  const { param } = useParams();

  return (
    <div className="w-full h-screen snap-center min-h-screen overflow-y-scroll flex flex-col justify-center relative overflow-x-hidden ">
      {/*  */}
      <div className="flex flex-col  bg-white bg-opacity-[10%] backdrop-blur-xl rounded-2xl gap-4 p-6 text-center mt-12 items-center text-darkNeutral h-[500px]">
        {param}
      </div>
    </div>
  );
};

export default ProjectView;
