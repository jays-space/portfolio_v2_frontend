import React, { useState } from "react";
import { RiMenu4Line } from "react-icons/ri";

// COMPONENTS
import { ContactLinks } from "../ContactLinks";
import { Heading } from "../Typography/Heading";

const Header = () => {
  const [animateHeader, setAnimateHeader] = useState<boolean>(false);

  //listen for scroll event
  // if scrolled passed header hight ||  scrolling down, hide header
  // if scrolling up, show header

  return (
    <header className="sticky top-0 left-0 w-screen flex flex-row justify-between items-baseline px-10 py-4 md:px-20 lg:pt-24 md:mb-10 bg-stone-100 z-50">
      <div className="flex flex-col ">
        <Heading
          variant="h2"
          title="jay's space"
          className="font-extrabold !text-red-500"
        />
        <Heading
          variant="h4"
          title="developer portfolio"
          className="!text-base"
        />
      </div>

      <nav className="hidden md:flex flex-row">
        <ContactLinks className="text-lg text-slate-700 mr-4 last-of-type:mr-0" />
      </nav>

      <nav className="flex flex-col self-center p-4 pr-0 md:hidden">
        <RiMenu4Line size={30} />
      </nav>
    </header>
  );
};

export default Header;
