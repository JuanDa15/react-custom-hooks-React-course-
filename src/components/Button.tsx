import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button({ children, onClick, className, ...others }: Props) {
  return (
    <button
      type='button'
      className={`p-2 bg-cyan-700 rounded-sm focus:outline-cyan-400 focus:outline hover:bg-cyan-900 cursor-pointer disabled:opacity-80 ${className}`}
      onClick={onClick}
      {...others}
    >
      { children }
    </button>
  )
}