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
        className={`w-full text-sm bg-transparent outline-none py-2 ${value ? "border-b border-green-600" : "border-b text-gray-400"} ${className}`}
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
