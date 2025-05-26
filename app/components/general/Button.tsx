import { IconType } from "react-icons/lib";

interface ButtonProps {
  text: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  small?: boolean;
  outline?: boolean;
  icon: IconType;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  small,
  outline,
  icon: Icon,
  disabled,
}) => {
  return (
    <button
      onClick={onClick}
      className={` my-5 p-3 rounded ${
        small ? " w-[250px] text-sm" : "w-[full] text-lg"
      } ${outline ? "border" : "bg-blue-500 text-white"} `}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
