import Link from "next/link";
import React from "react";

import { LINKS } from "../../constants/Links.constants";

interface IContactLinks {
  className: string | undefined;
}

const ContactLinks = ({ className }: IContactLinks) => {
  return (
    <>
      {LINKS.map((link, idx) => (
        <Link key={idx} href={link.to}>
          <a className={className}>{link.label}</a>
        </Link>
      ))}
    </>
  );
};

export default ContactLinks;
