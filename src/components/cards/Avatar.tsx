import type { IPerson } from "../../types/index.types";

export default function Avatar({ name, description, image }: IPerson) {
  return (
    <div className="h-1/3 w-full flex justify-start items-center gap-4 pl-6 bg-[var(--color-pallet-900)]/10 rounded-3xl border border-[var(--color-pallet-400)]/40 drop-shadow-xl">
      <div className="size-20 rounded-full overflow-hidden">
        <img src={`/${image}.jpg`} alt="Avatar de Valwood Pkwy" />
      </div>
      <div className="flex flex-col justify-center">
        <h2 className="font-bold text-[var(--color-pallet-400)]">{name}</h2>
        <p className="text-sm text-[var(--color-pallet-200)] line-clamp-1">
          {description}
        </p>
      </div>
    </div>
  );
}
