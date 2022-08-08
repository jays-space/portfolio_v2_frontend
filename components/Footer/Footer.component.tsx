// COMPONENTS
import Link from "next/link";

// CONSTANTS
import { LINKS } from "../../constants/Links.constants";

// COMPONENTS
import { Button } from "../Button";

const Footer = () => {
  return (
    <footer className="h-10 flex flex-row justify-center items-center py-6 bg-slate-100">
      {LINKS.map((link, idx) => (
        <Link key={idx} href={link.to}>
          <a className="text-sm font-bold text-slate-700 mr-4 last-of-type:mr-0">{link.label}</a>
        </Link>
      ))}
    </footer>
  );
};

export default Footer;
