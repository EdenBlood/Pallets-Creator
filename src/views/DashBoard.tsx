import { useEffect, useState } from "react"
import { getColorName, getPallet, getRandomColor, updatePallets } from "../utils"
import TitleColorName from "../components/utils/TitleColorName"
import Pallets from "../components/Pallets"
import Button from "../components/utils/Button"
import CircleTop from "../components/utils/CircleTop"
import CircleBottom from "../components/utils/CircleBottom"

export default function DashBoard() {
  const [ mainPalletColor, setMainPalletColor ] = useState<string>(getRandomColor())
  const [ pallet, setPallet ] = useState(getPallet(mainPalletColor))
  const [ colorName, setColorName ] = useState(getColorName(pallet[600]))
  
  useEffect(() => {
    const newPallet = getPallet(mainPalletColor)
    setPallet(newPallet)
    setColorName(getColorName(newPallet[600]))
    updatePallets(newPallet);
  }, [mainPalletColor])

  const handleRandomPallete = (): void => {
    setMainPalletColor(getRandomColor())
  }
  
  return (
    <>
      <div className="w-full bg-c-dark-800 border-c-red-pinterest-400/50 border p-3 my-4 rounded-xl">
        <h1 className="text-center text-c-red-pinterest-400 font-black text-3xl">Crea tu Paleta de Colores</h1>
      </div>

      <main className="w-full flex flex-col gap-6">
        <TitleColorName colorName={colorName} palletColor={[pallet['300'], pallet['500']]} />

        <Pallets pallet={pallet} />

        <div className="flex gap-6">
          <section className="w-2/7 bg-slate-100 p-6 flex gap-6 flex-col">
            {Object.entries(pallet).map(([tailwindTone, color]) => {
              let nextTone = "";
              console.log("tone", tailwindTone)
              if (tailwindTone === "50" || tailwindTone === "900") {
                nextTone = (Number(tailwindTone) + 50).toString()
              } else {
                nextTone = (Number(tailwindTone) + 100).toString()
              }
              console.log("next", nextTone)
              return (
                <Button 
                  onClick={handleRandomPallete}
                  color={color}
                  className={`w-full bg-[var(--color-pallet-${tailwindTone})] hover:bg-[var(--color-pallet-${nextTone})]`}
                >Paleta Random
                </Button>
            )})}
            
          </section>

          <section className="grid grid-cols-3 gap-4 w-5/7">
            <article className="w-full overflow-hidden h-min flex flex-col gap-6 bg-[var(--color-pallet-300)] text-[var(--color-pallet-950)] p-5 rounded-xl relative ">
              <CircleTop />

              <div className=" overflow-hidden rounded-xl z-10">
                <img className="h-60 object-bottom-right object-cover " src="/imagen1.jpg" alt="Escribiendo" />
              </div>

              <h3 className="text-5xl py-6 z-10">Track your expenses</h3>
              
              <CircleBottom />
            </article>

             {/* Card 2 - Summary */}
            <article className="w-full overflow-hidden h-min flex flex-col gap-4 bg-[var(--color-pallet-100)] text-[var(--color-pallet-900)] p-5 rounded-xl relative">
              <CircleTop />
              <h3 className="text-3xl font-bold z-10">Summary</h3>
              <ul className="z-10 space-y-2">
                <li className="flex justify-between">
                  <span>Income</span>
                  <span className="font-semibold">$4,200</span>
                </li>
                <li className="flex justify-between">
                  <span>Expenses</span>
                  <span className="font-semibold">$2,850</span>
                </li>
                <li className="flex justify-between">
                  <span>Savings</span>
                  <span className="font-semibold">$1,350</span>
                </li>
              </ul>
              <CircleBottom />
            </article>

            {/* Card 3 - Estadísticas */}
            <article className="w-full overflow-hidden h-min flex flex-col gap-4 bg-[var(--color-pallet-200)] text-[var(--color-pallet-950)] p-5 rounded-xl relative">
              <CircleTop />
              <h3 className="text-3xl font-bold z-10">Estadísticas</h3>
              <div className="flex gap-3 z-10">
                <div className="w-1/3 h-20 bg-[var(--color-pallet-500)] rounded"></div>
                <div className="w-1/3 h-32 bg-[var(--color-pallet-600)] rounded"></div>
                <div className="w-1/3 h-16 bg-[var(--color-pallet-400)] rounded"></div>
              </div>
              <CircleBottom />
            </article>
          </section>
        </div>
      </main>
    </>
  )
}