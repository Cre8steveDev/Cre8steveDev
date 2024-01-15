import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full fixed top-5 z-[5]">
      <div className="rounded-md w-full mx-auto  max-w-screen-lg flex justify-between items-center shadow-lg mt-5 p-6 shadow-['rgba(0, 0, 0, 0.45)'] bg-darkNeutral text-darkBlue">
        {/*  */}
        {/* Site Logo */}
        <Link to="/">
          <h1 className="text-2xl font-black hover:opacity-80">
            Cre8Steve Dev
          </h1>
        </Link>

        {/* Navigation */}
        <nav className="flex list-none gap-5">
          <a href="/#skills">
            <li className="hover:opacity-55 transition ease-out ">Skills</li>
          </a>
          <a href="/#projects">
            <li className="hover:opacity-55 transition ease-out">Projects</li>
          </a>
          <a href="/#resume">
            <li className="hover:opacity-55 transition ease-out">Resume</li>
          </a>
          <a href="/#contact">
            <li className="hover:opacity-55 transition ease-out">Contact</li>
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Header;
