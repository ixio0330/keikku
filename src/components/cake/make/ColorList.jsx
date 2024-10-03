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
      <h2 className="font-bold text-lg">색상</h2>
      <ul className="mt-3 flex w-full justify-between">
        {items.map(({ color }) => (
          <li
            key={color}
            onClick={() => handleColorSelection(color)}
            className={`p-[2px] border-2 rounded-full ${
              selectColor === color ? "border-primary" : "border-transparent"
            }`}
          >
            <div
              className="rounded-full w-7 h-7 border"
              style={{ backgroundColor: color }}
            />
          </li>
        ))}
        <li
          className={`relative border-2 rounded-full p-[2px] ${
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
              className="w-7 h-7"
            />
          )}
          {customColor ? (
            <div className="relative z-20 border w-7 h-7 rounded-full overflow-hidden">
              <input
                className="bg-white h-10 absolute -top-2 -left-2"
                type="color"
                onChange={handleChangeCustomColor}
                defaultValue={customColor}
              />
            </div>
          ) : (
            <div className="opacity-0 absolute top-0 left-0 z-20 border w-7 h-7 rounded-full overflow-hidden">
              <input
                className="bg-white h-10 absolute -top-2 -left-2"
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
