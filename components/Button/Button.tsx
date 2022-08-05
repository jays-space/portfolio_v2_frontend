import React from "react";

interface IButton {
  label: string;
  onCLick?: () => void;
}
const Button = ({ label, onCLick = () => {} }: IButton) => {
  return (
    <button onClick={onCLick} className="mx-2 py-2 px-4 text-white capitalize font-bold bg-red-500 rounded">
      {label}
    </button>
  );
};

export default Button;
