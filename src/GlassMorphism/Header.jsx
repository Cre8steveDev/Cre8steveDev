import { useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  // Trying this because of side effect caused by using HashRouter

  useEffect(() => {
    window.addEventListener("hashchange", () => {
      const targetId = window.location.hash.slice(1); // Remove leading #
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    });
  }, []);
  return (
    <div className="w-full fixed sm:top-5 z-[5]">
      <div className="rounded-md w-full mx-auto  max-w-screen-lg flex justify-between items-center shadow-lg mt-2 sm:mt-5 p-6 shadow-['rgba(0, 0, 0, 0.45)'] bg-darkNeutral text-darkBlue">
        {/*  */}
        {/* Site Logo */}
        <Link to="/">
          <h1 className="sm:text-2xl font-black hover:opacity-80">
            Cre8Steve Dev
          </h1>
        </Link>

        {/* Navigation */}
        <nav className="flex list-none gap-2 sm:gap-5 sm:text-base text-xs">
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
