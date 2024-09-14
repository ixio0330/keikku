"use client"

import { useState } from "react"

export default function Input({ maxLength, className, ...props }) {
  const [value, setValue] = useState("")

  return (
    <div className="relative">
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        maxLength={maxLength}
        className={`w-full text-sm bg-transparent text-gray-400 outline-none py-2 ${value ? "border-b border-green-600" : "border-b"} ${className}`}
        {...props}
      />
      {maxLength && typeof value === "string" && (
        <p className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 font-light text-sm">
          {value ? value.length : 0}/{maxLength}
        </p>
      )}
    </div>
  )
}
