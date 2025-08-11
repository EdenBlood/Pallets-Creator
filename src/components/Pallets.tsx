import ColorItem from "./ColorItem";

interface PalletsProps {
  pallet: Record<string | number, string>
}

export default function Pallets({pallet}: PalletsProps) {
  
  return (
    <section className="w-full grid grid-cols-11 grid-rows-1 gap-2">
      {Object.entries(pallet).map(([tailwindNumber, color]) => (
        <ColorItem color={color} tailwindNumber={tailwindNumber} key={color}/>
      ))}
    </section>
  )
}