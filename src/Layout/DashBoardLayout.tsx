import type { ILayout } from "../types/index.types";

export default function DashBoardLayout({children}: ILayout) {
  return (
    <>
      <div className="max-w-6xl mx-auto">
        {children}
      </div>
    </>
  )
}