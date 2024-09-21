/* eslint-disable react/prop-types */
/**
 * Open Source Contributions
 * @returns JSX Element for Open Source Contributions
 */

const contributions = [
  {
    link: 'https://dev.to/cre8stevedev/project-starter-kit-neon-postgres-database-expressjs-typescript-and-typeorm-3g6f',
    label: 'Neon OSS Starter Kit: ExpressJS + Postgres + TypeORM + TypeScript',
    summary:
      'An open source starter kit I build for the Neon OSS Starter Kit Challenge. My submission also earned me a badge for the challenge on dev.to',
  },

  {
    link: 'https://www.npmjs.com/package/neon-express-typeorm',
    label: 'Neon OSS Starter Kit: NPM Package (neon-express-typeorm)',
    summary:
      'An open source command line tool for the Neon OSS Starter Kit for quickly scaffolding new projects using ExpressJS + Typescript and TypeORM.',
  },

  {
    link: 'https://marketplace.visualstudio.com/items?itemName=Cre8steveDev.react-native-and-expo-code-snippets',
    label: 'React Native + Expo Vscode Snippet Extension for Mobile Apps',
    summary:
      'A Snippet extension for boosting productivity in building mobile applications using React Native and Expo framework, cutting down on time in browsing docs for props list',
  },
];

const OpenSourceContributions = () => {
  // Return JSX For the OpenSourceContributions
  return (
    <div
      id="projects"
      className="w-[80%] mx-auto md:w-full overflow-y-scroll flex flex-col relative overflow-x-hidden"
    >
      <div className="flex flex-col bg-white bg-opacity-[10%] backdrop-blur-xl rounded-2xl gap-4 p-4 text-center mt-[40px] sm:mt-8 items-center text-darkNeutral sm:w-[90%] lg:w-full sm:mx-auto">
        <h2 className="tracking-[0.6rem] sm:mt-0 uppercase">
          Open Source Contributions
        </h2>
        {/* Render Card of Open Source sturvs */}
        <div className="sm:w-full flex gap-4 flex-col sm:flex-row">
          {contributions.map((item, index) => (
            <Card item={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OpenSourceContributions;

const Card = ({ item }) => {
  return (
    <article className="min-w-[300px] w-full max-w-[350px] text-white rounded-xl overflow-hidden backdrop-blur-2xl bg-darkBlue p-8 cursor-default">
      <h3 className="font-semibold sm:text-base text-sm">{item.label}</h3>
      <hr className="opacity-35 my-2" />
      <p className="text-xs sm:text-sm">{item.summary}</p>

      <a href={item.link} target="_blank" rel="noopener noreferrer">
        <p className="mt-3 hover:underline hover:opacity-70 transition-all ease-in-out duration-500 px-2 py-1 bg-slate-300 rounded-md text-slate-800 text-sm">
          Click to View
        </p>
      </a>
    </article>
  );
};
