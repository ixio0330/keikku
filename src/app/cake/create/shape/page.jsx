"use client"
import Link from "next/link"

// store
import useCake from "@/stores/cake"

// component
import Tab from "../Tab"
import CakeFrame from "@/components/cake/CakeFrame"
import ShapeList from "@/components/cake/ShapeList"
import ColorList from "@/components/cake/ColorList"

// constants
import { cakeColors } from "@/constants"

export default function CreateCakeShapePage() {
  const { cake, updateCakeShape, updateCakeColor } = useCake()

  return (
    <>
      {/* 탭 메뉴 */}
      <Tab currentTab="모양" />

      {/* 케이크 틀 */}
      <CakeFrame shape={cake.cake_shape} color={cake.cake_color} />

      {/* 선택 */}
      <section className="space-y-10">
        <ShapeList
          title="모양"
          items={[
            {
              onClick: () => updateCakeShape("circle"),
              isSelected: cake.cake_shape === "circle",
              Item: () => (
                <div
                  className={`w-16 h-16 rounded-full ${cake.cake_shape === "circle" ? "bg-white" : "bg-gray-300"}`}
                />
              ),
            },
            {
              onClick: () => updateCakeShape("rectangle"),
              isSelected: cake.cake_shape === "rectangle",
              Item: () => (
                <div
                  className={`w-16 h-16 rounded-2xl ${cake.cake_shape === "rectangle" ? "bg-white" : "bg-gray-300"}`}
                />
              ),
            },
          ]}
        />

        <ColorList
          items={cakeColors}
          selectColor={cake.cake_color}
          setColor={updateCakeColor}
        />

        <div className="pb-10">
          <Link
            href="/cake/create/text"
            className="block w-full text-center text-white font-semibold border border-primary rounded-lg box-border p-2 bg-primary font-xs"
          >
            다음
          </Link>
        </div>
      </section>
    </>
  )
}
