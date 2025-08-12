import type { ButtonHTMLAttributes, ReactNode } from "react"
import { getLetterColor, getLuminance } from "../../utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  color: string;
  className?: string;
  tone: string
  nextTone: string
}

export default function Button({children, color, className, tone, nextTone, ...rest}: ButtonProps) {
  const bgVar = `var(--color-pallet-${tone})`;
  const hoverVar = `var(--color-pallet-${nextTone})`;
  
  const luminance = getLuminance(color);
  const textColor = getLetterColor(luminance)
  
  const style = {
    ['--btn-bg']: bgVar,
    ['--btn-hover']: hoverVar,
    'color': textColor
  }
  return (
    <button 
      style={style}
      className={`btn-pallet ${className}`}
      {...rest}
    >{children}</button>
  )
}