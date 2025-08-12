import { getContrastBGText, getLetterColor, getLuminance } from "../utils";

interface ColorItemProps {
  color: string;
  tailwindNumber: string;
}

export default function ColorItem({ color, tailwindNumber }: ColorItemProps) {
  const luminance = getLuminance(color);
  const letterColor = getLetterColor(luminance);
  const contrast = getContrastBGText(color, letterColor);

  return (
    <>
      <div className="flex flex-col gap-3 drop-shadow-lg">
        {/* <p className="font-bold text-xs text-center">{`${colorName}-${tailwindNumber}`}</p> */}

        <div
          style={{ backgroundColor: color, color: letterColor }}
          className={`w-full flex h-30 rounded-2xl flex-col text-center justify-center gap-2 font-bold text-xs`}
        >
          <p>{tailwindNumber}</p>
          <p className="uppercase">{color}</p>
          <p>{contrast}</p>
        </div>
      </div>
    </>
  );
}
