import CircleBottom from "../utils/CircleBottom";
import CircleTop from "../utils/CircleTop";

export default function Card1() {
  return (
    <article className="w-full overflow-hidden h-[25rem] flex flex-col bg-[var(--color-pallet-300)] text-[var(--color-pallet-950)] p-5 rounded-xl relative drop-shadow-xl">
      <CircleTop />

      <div className="h-60 overflow-hidden rounded-xl z-10">
        <img className="h-60 object-bottom-right object-cover " src="/imagen1.jpg" alt="Escribiendo" />
      </div>

      <div className="h-20">
        <h3 className="text-4xl my-6 z-10">Track your expenses</h3>
      </div>
      
      <CircleBottom />
    </article>
  )
}