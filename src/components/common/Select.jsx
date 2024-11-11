"use client"

export default function Select({ options = [], className, ...props }) {
  return (
    <div className="relative">
      <select
        className={`w-full rounded-lg border bg-transparent bg-white px-1 py-2 text-sm text-gray-400 text-stone-700 outline-none focus:border-primary ${className}`}
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
