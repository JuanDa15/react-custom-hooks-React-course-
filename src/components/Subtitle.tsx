import { PropsWithChildren } from "react";

export default function Subtitle({ children }: PropsWithChildren) {
  return (
    <h2 className="text-2xl">{children}</h2>
  )
}