import React, { CSSProperties, HTMLAttributes } from "react";

interface IHeading {
  title: string;
  variant?: "h1" | "h2" | "h3" | "h4";
  className?: string;
}

const IHeading = ({ title, variant, className = undefined }: IHeading) => {
  const styles = "capitalize";

  switch (variant) {
    case "h4":
      return <h4 className={`${styles} ${className} text-lg`}>{title}</h4>;

    case "h3":
      return <h3 className={`${styles} ${className} text-xl`}>{title}</h3>;

    case "h2":
      return <h2 className={`${styles} ${className} text-2xl`}>{title}</h2>;

    case "h1":
      return <h1 className={`${styles} ${className} text-4xl`}>{title}</h1>;

    default:
      return <h1 className={`${styles} ${className} text-4xl`}>{title}</h1>;
  }
};

export default IHeading;
