

export default function CircleBottom() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <span className="absolute bottom-0 translate-y-1/2 translate-x-1/2 right-1/3 h-[6rem] w-[5rem] rounded-full border-3 border-[var(--color-pallet-700)]/20"></span>
      <span className="absolute bottom-0 translate-y-1/2 translate-x-1/2 right-1/3 h-[16rem] w-[15rem]  rounded-full border-3 border-[var(--color-pallet-700)]/20"></span>
      <span className="absolute bottom-0 translate-y-1/2 translate-x-1/2 right-1/3 h-[24rem] w-[23rem] rounded-full border-3 border-[var(--color-pallet-700)]/20"></span>
    </div>
  )
}