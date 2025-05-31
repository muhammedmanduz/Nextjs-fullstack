"use client";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps {
  id: string;
  placeholder: string;
  disabled?: boolean;
  type: string;
  required?: boolean | null | undefined;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}
const Input: React.FC<InputProps> = ({
  id,
  placeholder,
  disabled,
  type,
  required,
  register,
  errors,
}) => {
  return (
    <input
      className={`w-full h-12 p-3 rounded-md border-2 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
        errors[id] ? "border-red-500" : "border-slate-300"
      }`}
      id={id}
      placeholder={placeholder}
      disabled={disabled}
      type={type}
      required={required}
      {...register(id, { required })}
    />
  );
};

export default Input;
