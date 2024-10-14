"use client"

import Image from "next/image"
import { useState } from "react"

export default function ColorList({ items, selectColor, setColor }) {
  const isUsedCustomColor =
    selectColor && !items.find(({ color }) => color === selectColor)
  const [customColor, setCustomColor] = useState(
    isUsedCustomColor ? selectColor : "",
  )

  const handleChangeCustomColor = (e) => {
    setCustomColor(e.target.value)
    setColor(e.target.value)
  }

  const handleColorSelection = (color) => {
    setColor(color)
    if (!items.find(({ color: itemColor }) => itemColor === color)) {
      setCustomColor(color)
    } else {
      setCustomColor("")
    }
  }

  return (
    <div>
      <h2 className="text-lg font-bold">색상</h2>
      <ul className="mt-3 flex w-full justify-between">
        {items.map(({ color }) => (
          <li
            key={color}
            onClick={() => handleColorSelection(color)}
            className={`rounded-full border-2 p-[2px] ${
              selectColor === color ? "border-primary" : "border-transparent"
            }`}
          >
            <div
              className="h-7 w-7 rounded-full border"
              style={{ backgroundColor: color }}
            />
          </li>
        ))}
        <li
          className={`relative rounded-full border-2 p-[2px] ${
            customColor && selectColor === customColor
              ? "border-primary"
              : "border-transparent"
          }`}
        >
          {!customColor && selectColor !== customColor && (
            <Image
              width={28}
              height={28}
              alt="사용자 정의 색상"
              src="/cake/custom-color.png"
              className="h-7 w-7"
            />
          )}
          {customColor ? (
            <div className="relative z-20 h-7 w-7 overflow-hidden rounded-full border">
              <input
                className="absolute -left-2 -top-2 h-10 bg-white"
                type="color"
                onChange={handleChangeCustomColor}
                defaultValue={customColor}
              />
            </div>
          ) : (
            <div className="absolute left-0 top-0 z-20 h-7 w-7 overflow-hidden rounded-full border opacity-0">
              <input
                className="absolute -left-2 -top-2 h-10 bg-white"
                type="color"
                onChange={handleChangeCustomColor}
              />
            </div>
          )}
        </li>
      </ul>
    </div>
  )
}
