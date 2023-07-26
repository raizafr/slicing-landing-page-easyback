import { ReactSVG } from "react-svg";
import Logo from "../../public/images/logo.svg";
import Hamburger from "../../public/images/icon-hamburger.svg";
import Close from "../../public/images/icon-close.svg";
import { useState } from "react";

// import Close from "../../public/images/icon-close.svg";

const Navbar = () => {
  const [isActiveNavbarMobile, setIsActiveNavbarMobile] = useState(false);

  const handleClick = () => {
    setIsActiveNavbarMobile(!isActiveNavbarMobile);
  };

  return (
    <>
      <nav className="flex justify-between px-5 md:px-24 py-5 bg-white fixed w-full top-0 mt-0 z-20">
        <div>
          <a href="#">
            <ReactSVG src={Logo} />
          </a>
        </div>
        <div className="hidden lg:flex">
          <ul className="flex gap-5 font-semibold opacity-70">
            <li className="cursor-pointer hover:opacity-100 opacity-70 hover:border-b-2 border-[#2BD462]">
              <a href="#">Home</a>
            </li>
            <li className="cursor-pointer hover:opacity-100 opacity-70 hover:border-b-2 border-[#2BD462]">
              <a href="#">About</a>
            </li>
            <li className="cursor-pointer hover:opacity-100 opacity-70 hover:border-b-2 border-[#2BD462]">
              <a href="#">Contact</a>
            </li>
            <li className="cursor-pointer hover:opacity-100 opacity-70 hover:border-b-2 border-[#2BD462]">
              <a href="#">Blog</a>
            </li>
            <li className="cursor-pointer hover:opacity-100 opacity-70 hover:border-b-2 border-[#2BD462]">
              <a href="#">Careers</a>
            </li>
          </ul>
        </div>
        <div className="">
          <button className="button -mt-2 hidden lg:block">
            Request Invite
          </button>
          <button className="lg:hidden" onClick={handleClick}>
            <ReactSVG
              src={Hamburger}
              className={`${isActiveNavbarMobile ? "hidden" : ""}`}
            />
            <ReactSVG
              src={Close}
              className={`${isActiveNavbarMobile ? "" : "hidden"}`}
            />
          </button>
        </div>
      </nav>

      <div
        className={`w-full h-full backdrop-blur-md fixed top-14 px-5 py-6 lg:hidden md:flex md:justify-end duration-1000 transition-opacity ${
          isActiveNavbarMobile ? "opacity-100" : "opacity-0 -z-30"
        }`}
      >
        <ul className="bg-white md:h-fit text-center space-y-3 font-semibold rounded-lg py-7 md:w-1/2">
          <li>
            <a
              href="#"
              className="hover:border-b-2 border-[#2BD462] text-gray-500 hover:text-black"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:border-b-2 border-[#2BD462] text-gray-500 hover:text-black"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:border-b-2 border-[#2BD462] text-gray-500 hover:text-black"
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:border-b-2 border-[#2BD462] text-gray-500 hover:text-black"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:border-b-2 border-[#2BD462] text-gray-500 hover:text-black"
            >
              Careers
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
