import Link from "next/link";
import React, { useState } from "react";
import { LINKS } from "../../constants/Links.constants";

// COMPONENTS
import { Button } from "../Button";
import { ContactLinks } from "../ContactLinks";
import { Heading } from "../Typography/Heading";

const Header = () => {
  const [animateHeader, setAnimateHeader] = useState<boolean>(false);

  //listen for scroll event
  // if scrolled passed header hight ||  scrolling down, hide header
  // if scrolling up, show header

  return (
    <header className="sticky top-0 left-0 right-0 bottom-0 flex flex-row justify-between items-baseline px-20 pt-24 mb-10">
      <div>
        <Heading
          variant="h2"
          title="jay's space"
          className="!font-fancy font-normal !text-5xl mb-2 "
        />
        {/* <Heading variant="h4" title="developer portfolio" className="!text-red-500 !font-bold !text-base" /> */}
      </div>

      <nav className="flex flex-row">
        <ContactLinks className="text-xl text-slate-700 mr-2 last-of-type:mr-0" />
      </nav>
    </header>
  );
};

export default Header;
