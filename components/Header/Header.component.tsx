import React from "react";

// COMPONENTS
import { Button } from "../Button";
import { Heading } from "../Typography/Heading";

const Header = () => {
  return (
    <nav className="flex flex-row justify-between items-center py-20 px-10">
      <div>
        <Heading title="jay's space" />
        <Heading variant="h3" title="front end developer" />
      </div>

      <div className="flex flex-row">
        <Heading variant="h3" title="about" />
        <Heading variant="h3" title="work" className="mx-4" />
        <Heading variant="h3" title="contact" />
      </div>
    </nav>
  );
};

export default Header;
