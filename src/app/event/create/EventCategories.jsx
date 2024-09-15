"use client"

import { useState } from "react"

export default function EventCategories({ list, name = "category_id" }) {
  const [selectedCategory, setSelectedCategory] = useState(null)

  return (
    <div className="flex flex-wrap gap-2 text-sm text-primary">
      {list.map((category) => (
        <CategoryItem
          key={category.name + category.id}
          name={name}
          value={category.id}
          label={category.name}
          isSelected={selectedCategory === category.id}
          onSelect={() => setSelectedCategory(category.id)}
        />
      ))}
    </div>
  )
}

function CategoryItem({ name, value, label, isSelected, onSelect }) {
  return (
    <label
      className={`border border-primary rounded-lg py-1 px-2 cursor-pointer ${
        isSelected ? "bg-primary text-white" : ""
      }`}
    >
      <input
        type="radio"
        name={name}
        value={value}
        className="sr-only"
        checked={isSelected}
        onChange={onSelect}
      />
      <span onClick={onSelect}>{label}</span>
    </label>
  )
}
