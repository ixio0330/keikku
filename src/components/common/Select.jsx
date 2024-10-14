"use client"

import { useState } from "react"

export default function Select({
  options = [],
  defaultValue,
  className,
  ...props
}) {
  const [value, setValue] = useState(defaultValue ?? "")

  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={`w-full bg-transparent py-2 text-sm outline-none ${value ? "border-b border-green-600" : "border-b text-gray-400"} ${className}`}
        {...props}
      >
        {options.map(({ name, value }) => (
          <option key={props.name + value} value={value}>
            {name}
          </option>
        ))}
      </select>
    </div>
  )
}
