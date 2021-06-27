/*  ./components/Navbar.jsx     */
import Link from "next/link";
import { useState } from "react";

export const Footer = () => {
  return (
    <div className="invisible md:visible lg:py-8 mt-5 lg:px-48 lg:mt-10 lg:mt-32 items-center bg-pink">
      <div className="invisible md:visible flex items-center">
        <div className="invisible md:visible flex-1">
          <div className="text-white text-base font-semibold "> Pages </div>
          <div className="mt-3">
            <Link href="/">
              <a className="text-white">Our Philosophy</a>
            </Link>
          </div>
          <div className="mt-1">
            <Link href="/">
              <a className="text-white">Services</a>
            </Link>
          </div>
          <div className="mt-1">
            <Link href="/">
              <a className="text-white">About</a>
            </Link>
          </div>
          <div className="mt-1">
            <Link href="/">
              <a className="text-white">Contact</a>
            </Link>
          </div>
        </div>

        <div className="flex-1">
          <div className="text-center text-white">
            Assured Global Consulting © 2021
          </div>
        </div>

        <div className="invisible md:visible flex-1"></div>
      </div>
    </div>
  );
};
