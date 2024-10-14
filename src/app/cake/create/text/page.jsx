"use client"
import Link from "next/link"

// store
import useCake from "@/stores/cake"

// component
import CakeFrame from "@/components/cake/make/CakeFrame"
import ColorList from "@/components/cake/make/ColorList"
import Tab from "../Tab"

// constants
import {
  cakeShapeStyle,
  cakeTextAligns,
  cakeTextColors,
  cakeTextFonts,
  cakeTextStyles,
} from "@/constants"

export default function CreateCakeShapePage() {
  const {
    cake,
    updateCakeTextColor,
    updateCakeTextSize,
    updateCakeMessage,
    updateCakeTextAlign,
    updateCakeTextFont,
    toggleCakeTextStyles,
  } = useCake()

  return (
    <>
      {/* 탭 메뉴 */}
      <Tab currentTab="텍스트" />

      {/* 케이크 틀 */}
      <CakeFrame>
        <div
          className="absolute z-20 flex h-full w-full items-center justify-center overflow-hidden"
          style={{ ...cakeShapeStyle[cake.cake_shape] }}
        >
          <textarea
            className={`resize-none rounded-full bg-transparent p-5 text-center placeholder-stone-200 focus:outline-none ${cakeTextFonts.find(({ value }) => cake.text_font === value).className}`}
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
          <h2 className="mb-1 text-lg font-bold">서체</h2>

          {/* 스타일 / 정렬 */}
          <ul className="flex items-center justify-between">
            {cakeTextStyles.map(({ value, Icon }) => (
              <li
                key={value}
                onClick={() => toggleCakeTextStyles(value)}
                className={`rounded-full border-2 p-1 ${cake.text_styles.includes(value) ? "border-primary" : "border-transparent"}`}
              >
                {Icon}
              </li>
            ))}

            {cakeTextAligns.map(({ value, Icon }) => (
              <li
                key={value}
                onClick={() => updateCakeTextAlign(value)}
                className={`rounded-full border-2 p-1 ${cake.text_align === value ? "border-primary" : "border-transparent"}`}
              >
                {Icon}
              </li>
            ))}
          </ul>

          {/* 서체 / 사이즈 */}
          <ul className="my-3 flex items-center justify-between">
            <li className="w-8/12">
              <select
                onChange={(e) => updateCakeTextFont(e.target.value)}
                className="block w-full rounded-lg border border-gray-200 bg-white p-2.5 text-sm text-gray-900 outline-none focus:border-primary focus:ring-primary"
              >
                {cakeTextFonts.map(({ text, value }) => (
                  <option key={`font-family-${value}`} value={value}>
                    {text}
                  </option>
                ))}
              </select>
            </li>
            <li className="w-3/12">
              <select
                className="block w-full rounded-lg border border-gray-200 bg-white p-2.5 text-sm text-gray-900 outline-none focus:border-primary focus:ring-primary"
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
            className="font-xs box-border w-2/5 rounded-lg border border-primary bg-primary bg-white p-2 text-center font-semibold text-primary"
          >
            이전
          </Link>

          <Link
            href="/cake/create/outline"
            className="font-xs box-border w-full rounded-lg border border-primary bg-primary p-2 text-center font-semibold text-white"
          >
            다음
          </Link>
        </div>
      </section>
    </>
  )
}
