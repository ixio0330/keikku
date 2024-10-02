"use client"

import { useState } from "react"

export default function Textarea({
  defaultValue,
  maxLength,
  className,
  ...props
}) {
  const [value, setValue] = useState(defaultValue ?? "")

  return (
    <div className="relative">
      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        maxLength={maxLength}
        className={`w-full h-28 text-sm bg-transparent outline-none p-2 resize-none ${value ? "border border-green-600" : "border"} ${className}`}
        {...props}
      />
      {maxLength && typeof value === "string" && (
        <p className="absolute right-3 bottom-3 text-gray-400 font-light text-sm">
          {value ? value.length : 0}/{maxLength}
        </p>
      )}
    </div>
  )
}
