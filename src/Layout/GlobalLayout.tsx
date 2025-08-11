import type { ILayout } from "../types/index.types";

export default function GlobalLayout({children}: ILayout) {
  return (
    <>
      {children}
    </>
  )
}