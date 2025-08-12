import type { IPerson } from "../../types/index.types";
import Avatar from "./Avatar";

const persons: IPerson[] = [
  {
    name: "Pispalan Valtatie",
    description: "Kaliningrad, South Africa",
    image: "avatar-1",
  },
  {
    name: "Julian, Alvarez",
    description: "Kabul",
    image: "avatar-2",
  },
  {
    name: "Rosie Davidson",
    description: "Adelaide, Darwin",
    image: "avatar-3",
  },
];

export default function Card4() {
  return (
    <>
      <article className="w-full overflow-hidden h-[25rem] flex flex-col bg-transparent gap-4 rounded-xl relative">
        {persons.map((person) => (
          <Avatar
            key={person.image}
            name={person.name}
            description={person.description}
            image={person.image}
          />
        ))}
      </article>
    </>
  );
}
