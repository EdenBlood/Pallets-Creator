

export default function CircleTop() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <span className="absolute top-0 -translate-y-1/2 translate-x-1/2 right-0 size-[6rem] rounded-full border-3 border-[var(--color-pallet-700)]/20"></span>
      <span className="absolute top-0 -translate-y-1/2 translate-x-1/2 right-0 size-[14rem] rounded-full border-3 border-[var(--color-pallet-700)]/20"></span>
      <span className="absolute top-0 -translate-y-1/2 translate-x-1/2 right-0 size-[22rem] rounded-full border-3 border-[var(--color-pallet-700)]/20"></span>
    </div>
  )
}