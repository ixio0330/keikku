import { TextareaHTMLAttributes } from "react";

export default function Textarea({ value, maxLength, className, ...props }: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <div className="relative">
      <textarea
        value={value}
        maxLength={maxLength}
        className={`w-full h-28 text-sm bg-transparent outline-none p-2 resize-none ${value ? "border border-green-600" : "border"} ${className}`}
        {...props} 
      />
      {
        maxLength && typeof value === "string" && (
          <p className="absolute right-2 bottom-2 text-stone-400 font-light">
            {value ? value.length : 0}/{maxLength}
          </p>
        )
      }
    </div>
  )
}