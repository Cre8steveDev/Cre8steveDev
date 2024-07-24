// Skills Image Array
import SkillStack from '../components/SkillStack';
import { tools, frontEndSkills, backEndSkills } from '../utilities/skillsData';

/**
 * Skills
 */
const Skills = () => {
  // Return JSX For the View
  return (
    <div
      id="skills"
      className="w-[80%] sm:w-full mx-auto overflow-y-scroll flex flex-col relative overflow-x-hidden items-center"
    >
      {/*  */}
      <div className="flex flex-col  bg-white bg-opacity-[10%] backdrop-blur-xl rounded-2xl gap-4 p-6 text-center mt-[30px] sm:mt-0 sm:mb-3 items-center text-darkNeutral sm:w-[90%] lg:w-full">
        {/*  */}
        <p className="text-xs sm:text-base mt-5 sm:mt-0 tracking-[0.6rem]">
          TOOLS AND TECHNOLOGIES
        </p>

        {/* Skills Container  */}
        <p className="text-xs sm:text-base sm:text-inherit -mb-5 font-bold text-white">
          FRONTEND DEVELOPMENT
        </p>

        <div
          role="Skills"
          className="flex flex-wrap gap-2 sm:gap-6 max-w-4xl justify-center my-5 sm:w-[90%]"
        >
          {
            // Iterate through array to render the skills icons
            frontEndSkills.map((skill, idx) => (
              <SkillStack key={idx} data={skill} />
            ))
          }
        </div>
        <hr className="border-1 w-[70%] border-darkNeutral -mt-3 opacity-40" />

        {/* Backend Development */}
        <p className="text-xs sm:text-base sm:text-inherit -mb-5 font-bold text-white">
          BACKEND DEVELOPMENT
        </p>
        <div
          role="Skills"
          className="flex flex-wrap gap-2 sm:gap-6 max-w-4xl justify-center my-5 sm:w-[90%]"
        >
          {
            // Iterate through array to render the skills icons
            backEndSkills.map((skill, idx) => (
              <SkillStack key={idx} data={skill} />
            ))
          }
        </div>

        <hr className="border-1 w-[70%] border-darkNeutral -mt-3 opacity-40" />

        {/* Backend Development */}
        <p className="text-xs sm:text-base sm:text-inherit -mb-5 font-bold text-white">
          TOOLS
        </p>
        <div
          role="Skills"
          className="flex flex-wrap gap-2 sm:gap-6 max-w-4xl justify-center my-5 sm:w-[90%]"
        >
          {
            // Iterate through array to render the skills icons
            tools.map((skill, idx) => (
              <SkillStack key={idx} data={skill} />
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Skills;
