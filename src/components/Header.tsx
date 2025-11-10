import { useState } from "react";
import darkLogo from "../assets/images/logo-dark.svg";
import lightLogo from "../assets/images/logo-light.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <nav className="px-4 lg:px-10 py-4 max-w-7xl mx-auto flex justify-between items-center relative">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <img src={lightLogo} alt="Logo" className="h-6 sm:h-8" />
        </a>

        {/* Hamburger Menu Button (only on mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-gray-600 dark:text-gray-300 focus:outline-none"
        >
          {isOpen ? (
            // X icon
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // Hamburger icon
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Menu Items */}
        <ul
          className={`${
            isOpen ? "flex" : "hidden"
          } flex-col lg:flex lg:flex-row lg:space-x-10 absolute lg:static top-full left-0 w-full lg:w-auto bg-white dark:bg-gray-800 lg:bg-transparent lg:dark:bg-transparent p-6 lg:p-0 shadow-lg lg:shadow-none transition-all duration-300`}
        >
          <li>
            <a
              href="#"
              className="block py-2 text-gray-700 dark:text-gray-200 hover:text-primary-green"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 text-gray-700 dark:text-gray-200 hover:text-primary-green"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 text-gray-700 dark:text-gray-200 hover:text-primary-green"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 text-gray-700 dark:text-gray-200 hover:text-primary-green"
            >
              Careers
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 text-gray-700 dark:text-gray-200 hover:text-primary-green"
            >
              Contact
            </a>
          </li>
        </ul>

        {/*Button (desktop only) */}
        <div className="hidden lg:block">
          <button className="text-white bg-linear-to-b  from-green-400 via-green-400 to-primary-green hover:bg-linear-to-br focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            Request invite
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
