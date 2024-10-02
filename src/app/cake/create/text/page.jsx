"use client"
import Link from "next/link"

// store
import useCake from "@/stores/cake"

// component
import Tab from "../Tab"
import CakeFrame from "@/components/cake/CakeFrame"
import ColorList from "@/components/cake/ColorList"

// constants
import {
  cakeShapeStyle,
  cakeTextColors,
  cakeTextFonts,
  cakeTextStyles,
  cakeTextAligns,
} from "@/constants"

export default function CreateCakeShapePage() {
  const {
    cake,
    updateCakeTextColor,
    updateCakeTextSize,
    updateCakeMessage,
    updateCakeTextAlign,
    toggleCakeTextStyles,
  } = useCake()

  return (
    <>
      {/* 탭 메뉴 */}
      <Tab currentTab="텍스트" />

      {/* 케이크 틀 */}
      <CakeFrame>
        <div
          className="overflow-hidden absolute w-full h-full flex justify-center items-center"
          style={{ ...cakeShapeStyle[cake.cake_shape] }}
        >
          <textarea
            className="p-5 rounded-full focus:outline-none resize-none text-center"
            rows={cake.message ? undefined : 1}
            placeholder="메시지 작성하기"
            style={{
              color: cake.text_color,
              fontSize: `${cake.text_size}px`,
              textAlign: cake.text_align,
              fontWeight: cake.text_styles.includes("bold") ? "bold" : "normal",
              textDecoration: cake.text_styles.includes("underline")
                ? "underline"
                : "none",
              fontStyle: cake.text_styles.includes("italic")
                ? "italic"
                : "normal",
            }}
            value={cake.message ?? ""}
            onInput={(e) => {
              updateCakeMessage(e.target.value)
              e.target.style.height = "auto"
              e.target.style.height = `${e.target.scrollHeight}px`
            }}
          />
        </div>
      </CakeFrame>

      {/* 선택 */}
      <section className="space-y-10">
        {/* 서체 */}
        <div>
          <h2 className="font-bold text-lg mb-1">서체</h2>

          {/* 스타일 / 정렬 */}
          <ul className="flex justify-between items-center">
            {cakeTextStyles.map(({ value, Icon }) => (
              <li
                key={value}
                onClick={() => toggleCakeTextStyles(value)}
                className={`p-1 border-2 rounded-full ${cake.text_styles.includes(value) ? "border-primary" : "border-transparent"}`}
              >
                {Icon}
              </li>
            ))}

            {cakeTextAligns.map(({ value, Icon }) => (
              <li
                key={value}
                onClick={() => updateCakeTextAlign(value)}
                className={`p-1 border-2 rounded-full ${cake.text_align === value ? "border-primary" : "border-transparent"}`}
              >
                {Icon}
              </li>
            ))}
          </ul>

          {/* 서체 / 사이즈 */}
          <ul className="flex justify-between items-center my-3">
            <li className="w-8/12">
              <select className="bg-white border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 outline-none">
                {cakeTextFonts.map(({ text, value, className }) => (
                  <option key={`font-family-${value}`} value={value}>
                    {text}
                  </option>
                ))}
              </select>
            </li>
            <li className="w-3/12">
              <select
                className="bg-white border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 outline-none"
                value={cake.text_size}
                onChange={(e) => updateCakeTextSize(Number(e.target.value))}
              >
                {Array(11)
                  .fill(0)
                  .map((_, idx) => (
                    <option
                      key={`font-size-${idx * 2 + 20}`}
                      value={idx * 2 + 20}
                    >
                      {idx * 2 + 20}pt
                    </option>
                  ))}
              </select>
            </li>
          </ul>
          {/* 에디터 */}
          <ul className="mt-5 flex justify-between"></ul>
        </div>

        {/* 색상 */}
        <ColorList
          items={cakeTextColors}
          selectColor={cake.text_color}
          setColor={updateCakeTextColor}
        />

        <div className="flex gap-5 pb-10">
          <Link
            href="/cake/create/shape"
            className="w-2/5 text-center text-primary bg-white font-semibold border border-primary rounded-lg box-border p-2 bg-primary font-xs"
          >
            이전
          </Link>

          <Link
            href="/cake/create/outline"
            className="w-full text-center text-white font-semibold border border-primary rounded-lg box-border p-2 bg-primary font-xs"
          >
            다음
          </Link>
        </div>
      </section>
    </>
  )
}
