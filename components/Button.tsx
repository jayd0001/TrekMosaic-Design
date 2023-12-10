import { ButtonProps } from "@/types";
import Image from "next/image";

const Button = ({ type, title, icon, variant, full, onClick }: ButtonProps) => {
  return (
    // dynamic classnames into template string
    <button
      type={type}
      onClick={onClick}
      className={`flexCenter gap-3 rounded-full
    border ${variant} ${full && "w-full"}
    `}
    >
      {icon && <Image src={icon} width={24} height={24} alt={title} />}
      <label className="bold-16 whitespace-nowrap">{title}</label>
    </button>
  );
};

export default Button;
