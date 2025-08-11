interface TitleColorNameProps {
  colorName: string;
  palletColor: string[]
}

export default function TitleColorName({colorName, palletColor}: TitleColorNameProps) {
  return (
    <h2 className="text-2xl text-center font-black capitalize text-slate-100">
      Nombre del color: {' '}
      <span 
        className="bg-clip-text text-transparent inline-block"
        style={{
          backgroundImage: `linear-gradient(90deg, ${palletColor[0]}, ${palletColor[1]})`,
        }}
      >{colorName}
      </span>
    </h2>
  )
}