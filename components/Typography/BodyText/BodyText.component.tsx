import React, { ReactNode } from "react";

interface IBodyText {
  children: ReactNode;
  className?: string | undefined;
}

const BodyText = ({ className = undefined, children }: IBodyText) => {
  return <p className={`text-base text-center text-slate-700 tracking-wide leading-loose ${className}`} >{children}</p>;
};

export default BodyText;
