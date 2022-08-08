import React, { useState } from "react";
import { RiMenu4Line, RiCloseLine } from "react-icons/ri";

// COMPONENTS
import { ContactLinks } from "../ContactLinks";
import { BodyText } from "../Typography/BodyText";
import { Heading } from "../Typography/Heading";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [animateHeader, setAnimateHeader] = useState<boolean>(false);

  //listen for scroll event
  // if scrolled passed header hight ||  scrolling down, hide header
  // if scrolling up, show header

  const toggleMenu = () => {
    setIsMenuOpen((v) => !v);
  };

  return (
    <header
      className={`${
        isMenuOpen ? "fixed bg-red-500 h-screen" : "sticky bg-stone-100"
      } top-0 left-0 w-screen flex flex-col justify-center items-center z-50`}
    >
      <div
        className={`${
          isMenuOpen ? "fixed bg-red-500" : "sticky bg-stone-100"
        } top-0 left-0 w-screen flex flex-row justify-between items-center px-5 py-0 md:px-20 md:py-5 md:mb-10 ${!isMenuOpen && "shadow-lg md:shadow-none"}`}
      >
        <div className="flex flex-col">
          <Heading
            variant="h2"
            title="jay's space"
            className={`font-extrabold !text-lg md:!text-3xl ${
              isMenuOpen ? " !text-white" : "!text-red-500"
            }`}
          />
          <Heading
            variant="h4"
            title="developer portfolio"
            className={`${isMenuOpen && "!text-white"} !text-sm md:!text-base`}
          />
        </div>

        <nav className="hidden md:flex flex-row">
          <ContactLinks className="text-lg text-slate-700 mr-4 last-of-type:mr-0" />
        </nav>

        <nav className="flex flex-col self-center p-4 pr-0 md:hidden">
          {isMenuOpen ? (
            <div
              onClick={toggleMenu}
              className="border-2 border-white rounded px-5 py-2"
            >
              <BodyText className="!font-bold !text-white">Work</BodyText>
            </div>
          ) : (
            <div
              onClick={toggleMenu}
              className="bg-red-500 border-2 border-white rounded px-3 py-2"
            >
              <BodyText className="!font-bold text-white">Contact</BodyText>
            </div>
          )}
        </nav>
      </div>

      <div
        className={`flex flex-col justify-center items-center h-screen ${
          isMenuOpen
            ? ""
            : "-z-10 fixed top-0 bottom-0 left-0 right-0 opacity-0"
        }`}
      >
        <ContactLinks className="flex flex-col text-white font-bold text-2xl my-2 last-of-type:border-2 border-white px-4 py-2 rounded" />
      </div>
    </header>
  );
};

export default Header;
