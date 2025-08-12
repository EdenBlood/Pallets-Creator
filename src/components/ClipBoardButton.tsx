import { useState } from "react";
import { generateCopyPallet } from "../utils";

interface ClipBoardButton {
  pallet: Record<string | number, string>;
  colorName: string;
}

export default function ClipBoardButton({
  pallet,
  colorName,
}: ClipBoardButton) {
  const [copyPallet, setCopyPallet] = useState<string>(
    generateCopyPallet(pallet, colorName)
  );
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopyPallet = () => {
    setCopyPallet(generateCopyPallet(pallet, colorName));

    navigator.clipboard
      .writeText(copyPallet)
      .then(() => setCopied(true))
      .then(() => setTimeout(() => setCopied(false), 3000));
  };

  return (
    <button
      className="font-semibold bg-black py-2 px-6 hover:bg-slate-800 duration-300 transition-colors cursor-pointer"
      onClick={handleCopyPallet}
    >
      {copied ? "Paleta de colores Copiada" : "Copiar Paleta de colores"}
    </button>
  );
}
