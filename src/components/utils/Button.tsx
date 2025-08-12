import type { ButtonHTMLAttributes, ReactNode } from "react"
import { getLetterColor, getLuminance } from "../../utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  color: string;
  className?: string;
}

export default function Button({children, color, className , ...rest}: ButtonProps) {
  const luminance = getLuminance(color);
  const textColor = getLetterColor(luminance)
  return (
    <button 
      className={`py-2 cursor-pointer transition-colors duration-300 ${className} text-${textColor}`}
      {...rest}
    >{children}</button>
  )
}