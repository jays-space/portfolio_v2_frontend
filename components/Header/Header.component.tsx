import React from "react";

// COMPONENTS
import { Button } from "../Button";

const Header = () => {
  return (
    <nav className="flex flex-row justify-between items-center py-20 px-10">
      <div>
        <h2 className="mr-4 text-2xl capitalize">jay&apos;s space</h2>
        <h4 className="text-xl capitalize mr-4">front end developer</h4>
      </div>

      <div className="flex flex-row">
        <h4 className="text-xl capitalize">about</h4>
        <h4 className="text-xl capitalize mx-4">work</h4>
        <h4 className="text-xl capitalize">contact</h4>
      </div>
    </nav>
  );
};

export default Header;
