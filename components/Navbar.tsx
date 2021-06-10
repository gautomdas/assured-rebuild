/*  ./components/Navbar.jsx     */
import Link from "next/link";
import { useState } from "react";

export const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className="flex items-center flex-wrap p-3 ">
        <Link href="/">
          <img
            className="inline-flex items-center p-2 mr-4 h-20 lg:h-24"
            src="/logo_big.png"
            alt="Assured Global Consulting Logo"
          />
        </Link>
        <button
          className=" inline-flex p-3 hover:bg-pink rounded lg:hidden text-black ml-auto hover:text-white outline-none"
          onClick={handleClick}
        >
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
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${
            active ? "" : "hidden"
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className="text-base pt-6 lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
            <Link href="/philosophy">
              <a className="lg:inline-flex lg:w-auto w-full px-14 py-2 rounded text-black font-semibold items-center justify-center hover:text-pink ">
                Our Philosophy
              </a>
            </Link>
            <Link href="/results">
              <a className="lg:inline-flex lg:w-auto w-full px-14 py-2 rounded text-black font-semibold items-center justify-center hover:text-pink">
                Results
              </a>
            </Link>
            <Link href="/services">
              <a className="lg:inline-flex lg:w-auto w-full px-14 py-2 rounded text-black font-semibold items-center justify-center hover:text-pink">
                Services
              </a>
            </Link>
            <Link href="/about">
              <a className="lg:inline-flex lg:w-auto w-full px-14 py-2 rounded text-black font-semibold items-center justify-center hover:text-pink">
                About us
              </a>
            </Link>
            <Link href="/contact">
              <a className="shadow lg:inline-flex lg:w-auto px-5 mx-10 py-2 mt-1  rounded text-white bg-pink font-semibold items-center justify-center hover:text-white">
                Get In Touch
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};
