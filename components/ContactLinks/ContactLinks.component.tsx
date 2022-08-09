import Link from "next/link";
import React, { useState } from "react";

import { LINKS } from "../../constants/Links.constants";

interface IContactLinks {
  email?: boolean;
  className?: string | undefined;
}

const ContactLinks = ({
  className = undefined,
  email = false,
}: IContactLinks) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    navigator.clipboard.writeText("contact.jays.space@gmail.com");
    let email = await navigator.clipboard.readText();

    if (email === "contact.jays.space@gmail.com") {
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1000);
    }
  };

  return (
    <>
      {LINKS.map((link, idx) => (
        <Link key={idx} href={link.to}>
          <a target="_blank" className={`${className}`}>
            {link.label}
          </a>
        </Link>
      ))}
    </>
  );
};

export default ContactLinks;
