import { getTailwindColors } from "uicolors-generator";
import chroma from "chroma-js";
import colorNameList from "color-name";

export function getPallet(color: string) {
  return getTailwindColors(color, { asHex: true, includeDefault: false });
}

export function getLuminance(color: string): number {
  return Math.round(chroma(color).luminance());
}

export function getLetterColor(luminance: number): string {
  return luminance === 1 ? "black" : "white";
}

export function getContrast(color: string, letterColor: string): number {
  return Number(chroma.contrast(color, letterColor).toFixed(2));
}

export function getContrastBGText(color: string, letterColor: string): number {
  const number = Number(chroma.contrastAPCA(color, letterColor).toFixed(2));
  return Math.abs(number);
}

export function getRandomColor(): string {
  return chroma.random().hex();
}

export function getColorName(hex: string): string {
  let closest: string = "";
  let minDistance = Infinity;

  Object.entries(colorNameList).forEach(([name, rgb]) => {
    const rgbString = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
    const distance = chroma.distance(hex, rgbString, "lab");
    if (distance < minDistance) {
      minDistance = distance;
      closest = name;
    }
  });

  return closest;
}

export function updatePallets(newPallet: Record<string, string>): void {
  const root = document.documentElement;

  Object.entries(newPallet).forEach(([intensity, color]) => {
    root.style.setProperty(`--color-pallet-${intensity}`, color);
  });
}

export function generateCopyPallet(
  pallet: Record<string | number, string>,
  nameColor: string
): string {
  let fullText: string = "";

  Object.entries(pallet).forEach(([tone, color]) => {
    fullText += `--color-${nameColor}-${tone}: ${color};\n`;
  });

  return fullText;
}
