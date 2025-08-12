import CircleBottom from "../utils/CircleBottom";
import CircleTop from "../utils/CircleTop";
import SummaryList from "./SummaryList";


export default function Card2() {
  return (
    <article className="w-full overflow-hidden h-[25rem] flex flex-col gap-4 bg-[var(--color-pallet-100)] text-[var(--color-pallet-900)] p-5 rounded-xl relative drop-shadow-xl">
      <CircleTop />
      <h3 className="text-4xl font-bold z-10">Summary</h3>
      <div className="flex flex-col justify-between gap-2 h-full">
        <SummaryList />

        <div className="flex justify-between pt-2 border-t border-t-[var(--color-pallet-900)] items-center">
          <span className="text-lg font-bold">Total</span>
          <span className="font-semibold">$25,650</span>
        </div>
      </div>
      <CircleBottom />
    </article>
  )
}