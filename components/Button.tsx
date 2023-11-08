import { ButtonProps } from "@/types";
import Image from "next/image";

const Button = ({ type, title, icon, variant }: ButtonProps) => {
  return (
    // dynamic classnames into template string
    <button
      type={type}
      className={`flexCenter gap-3 rounded-full
    border ${variant}
    `}
    >
      {icon && <Image src={icon} width={24} height={24} alt={title} />}
      <label className="bold-16 whitespace-nowrap">{title}</label>
    </button>
  );
};

export default Button;
