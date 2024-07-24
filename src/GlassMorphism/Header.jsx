import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  // Trying this because of side effect caused by using HashRouter

  useEffect(() => {
    window.addEventListener('hashchange', () => {
      const targetId = window.location.hash.slice(1); // Remove leading #
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }, []);

  return (
    <div className="w-[90vw] fixed z-[5] overflow-x-hidden backdrop-blur-lg">
      <div className="rounded-md w-full mx-auto  max-w-screen-lg flex justify-between items-center shadow-lg mt-2 sm:mt-5 p-4 shadow-['rgba(0, 0, 0, 0.45)'] bg-darkNeutral text-darkBlue overflow-x backdrop-blur-lg">
        {/*  */}
        {/* Site Logo */}
        <Link to="/">
          <h1 className="sm:text-2xl font-black hover:opacity-80">
            Cre8Steve Dev
          </h1>
        </Link>

        {/* Navigation */}
        <nav className="flex list-none gap-2 sm:gap-5 sm:text-base text-xs">
          <a
            href="https://dev.to/cre8stevedev"
            target="_blank"
            rel="noreferrer"
          >
            <li className="hover:opacity-55 transition ease-out ">Blog</li>
          </a>
          <a href="/#projects">
            <li className="hover:opacity-55 transition ease-out">Projects</li>
          </a>
          <a href="/#resume">
            <li className="hover:opacity-55 transition ease-out">Resume</li>
          </a>
          <a href="/#contact">
            <li className="hover:opacity-55 transition ease-out hidden md:block">
              Contact
            </li>
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Header;
