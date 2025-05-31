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
      className={`flex items-center justify-center gap-2 my-1 p-3 rounded-lg ${
        small ? " w-[250px] text-sm" : "w-[full] text-lg"
      } ${outline ? "border" : "bg-black text-white"} `}
      disabled={disabled}
    >
      {Icon && <Icon />}
      {text}
    </button>
  );
};

export default Button;
