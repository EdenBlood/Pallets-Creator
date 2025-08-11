import { useEffect, useState } from "react"
import { getColorName, getPallet, getRandomColor } from "../utils"
import TitleColorName from "../components/utils/TitleColorName"
import Pallets from "../components/Pallets"

export default function DashBoard() {
  const [ mainPalletColor, setMainPalletColor ] = useState<string>(getRandomColor())
  const [ pallet, setPallet ] = useState(getPallet(mainPalletColor))
  const [ colorName, setColorName ] = useState(getColorName(pallet[600]))
  
  useEffect(() => {
    const newPallet = getPallet(mainPalletColor)
    setPallet(newPallet)
    setColorName(getColorName(pallet[600]))

  }, [mainPalletColor, pallet])

  const handleRandomPallete = (): void => {
    setMainPalletColor(getRandomColor())
  }
  
  return (
    <>
      <div className="w-full bg-c-dark-800 border-c-red-pinterest-400/50 border p-3 my-4 rounded-xl">
        <h1 className="text-center text-c-red-pinterest-400 font-black text-3xl">Crea tu Paleta de Colores</h1>
      </div>

      <main className="w-full flex flex-col gap-8">
        <TitleColorName colorName={colorName} palletColor={[pallet['300'], pallet['500']]} />

        <Pallets pallet={pallet} />

        <section className="w-full bg-slate-100 p-6">
          <button 
            className="text-white py-2 px-6 bg-c-red-pinterest-500 hover:bg-c-red-pinterest-600 cursor-pointer transition-colors duration-300 "
            onClick={handleRandomPallete}
          >Paleta Random</button>
        </section>
        
      </main>
    </>
  )
}