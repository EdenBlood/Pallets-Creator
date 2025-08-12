import { useEffect, useState } from "react";
import {
  getColorName,
  getPallet,
  getRandomColor,
  updatePallets,
} from "../utils";
import TitleColorName from "../components/utils/TitleColorName";
import Pallets from "../components/Pallets";
import Card1 from "../components/cards/Card1";
import Card2 from "../components/cards/Card2";
import Card3 from "../components/cards/Card3";
import ButtonsRandomColor from "../components/ButtonsRandomColor";
import ClipBoardButton from "../components/ClipBoardButton";
import Card4 from "../components/cards/Card4";

export default function DashBoard() {
  const [mainPalletColor, setMainPalletColor] = useState<string>(
    getRandomColor()
  );
  const [pallet, setPallet] = useState(getPallet(mainPalletColor));
  const [colorName, setColorName] = useState(getColorName(pallet[600]));

  useEffect(() => {
    const newPallet = getPallet(mainPalletColor);
    setPallet(newPallet);
    setColorName(getColorName(newPallet[600]));
    updatePallets(newPallet);
  }, [mainPalletColor]);

  const handleRandomPallete = (): void => {
    setMainPalletColor(getRandomColor());
  };

  return (
    <>
      <div className="w-full bg-c-dark-800 border-c-red-pinterest-400/50 border p-3 my-4 rounded-xl">
        <h1 className="text-center text-c-red-pinterest-400 font-black text-3xl">
          Crea tu Paleta de Colores
        </h1>
      </div>

      <main className="w-full flex flex-col gap-6">
        <TitleColorName
          colorName={colorName}
          palletColor={[pallet["300"], pallet["500"]]}
        />

        <section className="w-full bg-slate-100 p-6 space-y-4">
          <div>
            <ClipBoardButton pallet={pallet} colorName={colorName} />
          </div>
          <div className="grid grid-cols-11 grid-rows-1 gap-2">
            <Pallets pallet={pallet} />
          </div>
        </section>

        <div className="flex gap-6">
          <ButtonsRandomColor
            handleRandomPallete={handleRandomPallete}
            pallet={pallet}
          />

          <section className="grid grid-cols-3 gap-4 w-3/4">
            <Card1 />

            <Card3 />

            <Card2 />

            <Card4 />
            <Card2 />
            <Card1 />
          </section>
        </div>
      </main>
    </>
  );
}
