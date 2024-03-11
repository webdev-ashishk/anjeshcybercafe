"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { RiComputerFill } from "react-icons/ri";
import DarkLightSwitch from "./DarkLightSwitcher";
const NavBar = () => {
  const [showMenu, setMenu] = useState(false);
  function toggleMenu() {
    setMenu(!showMenu);
  }
  const router = useRouter();
  const currentRoute = usePathname();
  // styles for all links
  const linkStyle = "flex items-center hover:text-gray-600 duration-300";

  // styles for active and non-active links
  const activeStyle = linkStyle + " text-gray-400";
  const nonActiveStyle = linkStyle + " black";
  const handleYoutube = () => {
    window.open("https://www.youtube.com/@SumanMalakar18/featured", "_blank");
  };
  const handleGitHub = () => {
    window.open("https://github.com/sumanmalakar", "_blank");
  };
  const handleLinkedin = () => {
    window.open(
      "https://www.linkedin.com/in/suman-malakar/?originalSubdomain=in",
      "_blank"
    );
  };
  return (
    <>
      <div className="flex justify-between  sticky top-0 border-b border-b-gray-500 shadow-lg">
        <div className="flex  gap-4 text-5xl m-2 font-bold ">
          <button onClick={() => router.push("/")} title="desktop icons">
            <RiComputerFill />
          </button>
          <div className="sm:block lg:hidden md:hidden text-3xl mt-2">
            <DarkLightSwitch />
          </div>
          <h1 className="sm:hidden lg:block md:block font-bold">
            <button type="button" onClick={() => router.push("/")}>
              Anjesh logo
            </button>
          </h1>
        </div>
        <nav className=" lg:block md:hidden sm:hidden flex justify-center items-center m-2">
          <ul className="sm:text-1xl flex gap-7 mx:text-1xl  md:text-3xl md:font-bold mr-8 justify-center items-center ">
            <li>
              <Link
                href="/"
                className={currentRoute === "/" ? activeStyle : nonActiveStyle}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={
                  currentRoute === "/about" ? activeStyle : nonActiveStyle
                }
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={
                  currentRoute === "/contact" ? activeStyle : nonActiveStyle
                }
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className={
                  currentRoute === "/services" ? activeStyle : nonActiveStyle
                }
              >
                Services
              </Link>
            </li>

            <li className="text-2xl mt-[2px]">
              <DarkLightSwitch />
            </li>
          </ul>
        </nav>
        {/* when user click on hambugger icons  */}
        {showMenu && (
          <div className="fixed inset-x-0 top-16 flex flex-col items-center rounded-lg ">
            <ul className="w-full h-screen text-3xl font-bold text-center bg-black text-white">
              <li className="mt-2">
                <button onClick={toggleMenu}>
                  <Link href="/">Home</Link>
                </button>
              </li>
              <li>
                <button onClick={toggleMenu}>
                  <Link href="/about">About</Link>
                </button>
              </li>
              <li>
                <button onClick={toggleMenu}>
                  <Link href="/contact">Contact</Link>
                </button>
              </li>
              <li>
                <button onClick={toggleMenu}>
                  <Link href="/services">Services</Link>
                </button>
              </li>
            </ul>
          </div>
        )}
        <button
          onClick={toggleMenu}
          className="sm:block md:block lg:hidden m-3 text-3xl font-bold"
        >
          {showMenu ? <IoMdClose /> : <AiOutlineMenu />}
        </button>
      </div>
      {/* <hr className="sticky top-16" /> */}
    </>
  );
};

export default NavBar;
