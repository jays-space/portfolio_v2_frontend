import React, { Dispatch, SetStateAction } from "react";

interface IInput {
  label: string;
  name: string;
  required?: boolean;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}

const Input = ({ label, name, value, setValue, required }: IInput) => {
  return (
    <div>
      <label htmlFor="name">{label}</label>
      <input
        type={"text"}
        id={name}
        name={name}
        value={value}
        onChange={() => setValue((v) => v)}
        required={required}
        className="border border-black"
      />
    </div>
  );
};

export default Input;
