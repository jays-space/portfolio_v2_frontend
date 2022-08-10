import React, { CSSProperties, HTMLAttributes } from "react";

interface IHeading {
  title: string;
  variant?: "h1" | "h2" | "h3" | "h4";
  className?: string | undefined;
  capitalize?: boolean;
}

const IHeading = ({
  title,
  variant,
  className = undefined,
  capitalize = true,
}: IHeading) => {
  const styles = `${capitalize && "capitalize"} leading-relaxed text-slate-700 text-bold`;

  switch (variant) {
    case "h4":
      return <h4 className={`${styles} ${className} text-lg`}>{title}</h4>;

    case "h3":
      return <h3 className={`${styles} ${className} text-2xl tracking-wide`}>{title}</h3>;

    case "h2":
      return (
        <h2 className={`${styles} ${className} text-3xl tracking-wider`}>
          {title}
        </h2>
      );

    case "h1":
      return (
        <h1
          className={`${styles} ${className} font-extrabold text-4xl tracking-wide`}
        >
          {title}
        </h1>
      );

    default:
      return (
        <h1
          className={`${styles} ${className} font-extrabold text-4xl tracking-wide`}
        >
          {title}
        </h1>
      );
  }
};

export default IHeading;
