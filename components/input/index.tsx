import { InputHTMLAttributes } from "react";

export default function Input({ value, maxLength, className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="relative">
      <input
        value={value}
        maxLength={maxLength}
        className={`w-full text-sm bg-transparent outline-none py-2 ${value ? "border-b border-green-600" : "border-b"} ${className}`}
        {...props} 
      />
      {
        maxLength && typeof value === "string" && (
          <p className="absolute right-0 top-1/2 -translate-y-1/2 text-stone-400 font-light">
            {value ? value.length : 0}/{maxLength}
          </p>
        )
      }
    </div>
  )
}