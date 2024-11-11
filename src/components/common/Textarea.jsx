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
        className={`h-28 w-full resize-none rounded-lg border bg-transparent bg-white p-2 text-sm text-stone-700 outline-none focus:border-primary ${className}`}
        {...props}
      />
      {maxLength && typeof value === "string" && (
        <p className="absolute bottom-3 right-3 text-sm font-light text-gray-400">
          {value ? value.length : 0}/{maxLength}
        </p>
      )}
    </div>
  )
}
