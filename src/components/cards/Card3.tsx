import CircleBottom from "../utils/CircleBottom";
import CircleTop from "../utils/CircleTop";


export default function Card3() {
  return (
    <article className="w-full overflow-hidden h-[25rem] flex flex-col gap-4 bg-slate-100 dark:bg-black text-[var(--color-pallet-950)] dark:text-[var(--color-pallet-100)] p-5 rounded-xl relative drop-shadow-xl border border-gray-500/50">
      <CircleTop />
      <h3 className="text-3xl font-bold z-10">Estadísticas</h3>
      <div className="grid grid-cols-6 gap-7 items-end justify-end z-10 h-full w-full border-b border-[var(--color-pallet-700)]">

        <div className="flex flex-col-reverse  gap-1">
          <div className="w-auto h-12 bg-[var(--color-pallet-500)] rounded-xs"></div>
          <div className="w-auto h-20 bg-[var(--color-pallet-600)] rounded-xs"></div>
          <div className="w-auto h-8 bg-[var(--color-pallet-400)] rounded-xs"></div>
        </div>
        <div className="flex flex-col-reverse gap-1">
          <div className="w-auto h-16 bg-[var(--color-pallet-600)] rounded-xs"></div>
          <div className="w-auto h-10 bg-[var(--color-pallet-400)] rounded-xs"></div>
          <div className="w-auto h-6 bg-[var(--color-pallet-300)] rounded-xs"></div>
        </div>
        <div className="flex flex-col-reverse gap-1">
          <div className="w-auto h-8 bg-[var(--color-pallet-400)] rounded-xs"></div>
          <div className="w-auto h-10 bg-[var(--color-pallet-300)] rounded-xs"></div>
          <div className="w-auto h-6 bg-[var(--color-pallet-200)] rounded-xs"></div>
        </div>
        <div className="flex flex-col-reverse gap-1">
          <div className="w-auto h-14 bg-[var(--color-pallet-600)] rounded-xs"></div>
          <div className="w-auto h-26 bg-[var(--color-pallet-500)] rounded-xs"></div>
          <div className="w-auto h-19 bg-[var(--color-pallet-600)] rounded-xs"></div>
        </div>
        <div className="flex flex-col-reverse gap-1">
          <div className="w-auto h-13 bg-[var(--color-pallet-200)] rounded-xs"></div>
          <div className="w-auto h-17 bg-[var(--color-pallet-400)] rounded-xs"></div>
          <div className="w-auto h-15 bg-[var(--color-pallet-300)] rounded-xs"></div>
        </div>
        <div className="flex flex-col-reverse gap-1">
          <div className="w-auto h-19 bg-[var(--color-pallet-300)] rounded-xs"></div>
          <div className="w-auto h-12 bg-[var(--color-pallet-400)] rounded-xs"></div>
          <div className="w-auto h-19 bg-[var(--color-pallet-500)] rounded-xs"></div>
        </div>
        
      </div>  
      <div className="grid grid-cols-6 gap-7 items-end justify-end z-10 h-min w-full text-slate-200/70 text-sm">
        <div>Ene</div>
        <div>Feb</div>
        <div>Maz</div>
        <div>Abr</div>
        <div>Jun</div>
        <div>jul</div>
      </div>
      <CircleBottom />
    </article>
  )
}