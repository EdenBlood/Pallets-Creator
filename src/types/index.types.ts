import type { ReactNode } from "react";

//Section - Components Props:
export interface ILayout {
  children: ReactNode;
}

export interface IPerson {
  name: string;
  description: string;
  image: string;
}
