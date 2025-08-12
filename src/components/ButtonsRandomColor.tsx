import Button from "./utils/Button"

interface ButtonsRandomColorProps {
  pallet: Record<string | number, string>,
  handleRandomPallete: () => void
}

export default function ButtonsRandomColor({pallet, handleRandomPallete} : ButtonsRandomColorProps) {
  return (
    <section className="w-1/4 bg-slate-100 p-6 flex gap-6 flex-col">
      {Object.entries(pallet).map(([tailwindTone, color]) => {
        if (tailwindTone === "50" || tailwindTone === "900" || tailwindTone === "950" ) return null
        const nextTone = (Number(tailwindTone) + 100).toString()
        return (
          <Button 
            key={color}
            onClick={handleRandomPallete}
            color={color}
            tone={tailwindTone}
            nextTone={nextTone}
          >Paleta Random
          </Button>
      )})}
    </section>
  )
}