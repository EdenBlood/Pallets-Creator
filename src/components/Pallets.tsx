import ColorItem from "./ColorItem";

interface PalletsProps {
  pallet: Record<string | number, string>;
}

export default function Pallets({ pallet }: PalletsProps) {
  return (
    <>
      {Object.entries(pallet).map(([tailwindNumber, color]) => (
        <ColorItem color={color} tailwindNumber={tailwindNumber} key={color} />
      ))}
    </>
  );
}
