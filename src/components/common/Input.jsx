"use client"

import { useState } from "react"

export default function Input({
  defaultValue,
  maxLength,
  className,
  ...props
}) {
  const [value, setValue] = useState(defaultValue ?? "")

  return (
    <div className="relative">
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        maxLength={maxLength}
        className={`w-full bg-transparent py-2 text-sm outline-none ${value ? "border-b border-green-600" : "border-b text-gray-400"} ${className}`}
        {...props}
      />
      {maxLength && typeof value === "string" && (
        <p className="absolute right-0 top-1/2 -translate-y-1/2 text-sm font-light text-gray-400">
          {value ? value.length : 0}/{maxLength}
        </p>
      )}
    </div>
  )
}
