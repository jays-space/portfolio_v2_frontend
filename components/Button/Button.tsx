import React from "react";

interface IButton {
  label: string;
}
const Button = ({ label }: IButton) => {
  return <button className="mx-2 py-0.5 px-1 border border-black rounded" >{label}</button>;
};

export default Button;
