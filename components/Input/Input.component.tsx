import React, { Dispatch, FormEvent, SetStateAction } from "react";

interface IInput {
  variant?: "textarea" | "default";
  label: string;
  name: string;
  type?: React.HTMLInputTypeAttribute | undefined;
  required?: boolean;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}

const Input = ({
  label,
  name,
  value,
  setValue,
  required,
  type = "text",
  variant = "default",
}: IInput) => {
  const handleInputChange = (event: FormEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
  };

  const handleTextAreaChange = (event: FormEvent<HTMLTextAreaElement>) => {
    setValue(event.currentTarget.value);
  };

  const containerStyles = "flex flex-col mb-4";
  const labelStyles = "text-sm capitalize";
  const inputStyles =
    "px-1 border border-slate-500 rounded outline-blue-400 invalid:outline-red-500 valid:outline-green-500";

  return variant === "textarea" ? (
    <div className={`${containerStyles}`}>
      <label htmlFor={name} className={`${labelStyles}`}>
        {label}
      </label>
      <textarea
        rows={2}
        name={name}
        value={value}
        onChange={handleTextAreaChange}
        required={required}
        className={`${inputStyles}`}
      />
    </div>
  ) : (
    <div className={`${containerStyles}`}>
      <label htmlFor={name} className={`${labelStyles}`}>
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={handleInputChange}
        required={required}
        className={`${inputStyles} h-8`}
      />
    </div>
  );
};

export default Input;
