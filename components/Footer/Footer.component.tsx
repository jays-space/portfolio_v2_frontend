// COMPONENTS
import Link from "next/link";

// CONSTANTS
import { LINKS } from "../../constants/Links.constants";

// COMPONENTS
import { Button } from "../Button";

const Footer = () => {
  return (
    <footer className="flex flex-row justify-center items-center py-6 sticky bottom-0 left-0">
      <Link href={LINKS.linkedIn}>
        <a>LinkedIn</a>
      </Link>

      <Link href={LINKS.github}>
        <a>Github</a>
      </Link>

      <Link href={LINKS.resume}>
        <a>Resume</a>
      </Link>
    </footer>
  );
};

export default Footer;
