import { InputHTMLAttributes, MutableRefObject } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string,
  reference?: MutableRefObject<HTMLInputElement | null>
}

export default function Input({ children, id, label, type, reference, className, ...others}: Props) {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      <label htmlFor={id}><small>{label}</small></label>
      <input 
        ref={reference}
        className="py-2 px-4 bg-slate-800 rounded-md text-white"
        id={id} 
        type={type}
        {...others} 
      />
      {children}
    </div>
  )
}