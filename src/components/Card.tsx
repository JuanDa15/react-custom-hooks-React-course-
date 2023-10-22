import { PropsWithChildren } from 'react'

export default function Card({ children }: PropsWithChildren) {
  return (
    <section className="border-2 border-cyan-800 rounded-md mt-4 p-4">
      {children}
    </section>
  )
}