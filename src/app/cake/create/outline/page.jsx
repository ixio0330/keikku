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
import { cakeColors, cakeOutlineShape } from "@/constants"
import ShapeOne from "@/components/cake/outline/ShapeOne"
import ShapeTwo from "@/components/cake/outline/ShapeTwo"
import ShapeThree from "@/components/cake/outline/ShapeThree"

export default function CreateCakeShapePage() {
  const { cake, updateCakeOutlineShape, updateCakeOutlineColor } = useCake()

  return (
    <>
      {/* 탭 메뉴 */}
      <Tab currentTab="테두리" />

      {/* 케이크 틀 */}
      <CakeFrame />

      {/* 선택 */}
      <section className="space-y-10">
        <ShapeList
          title="모양"
          items={[
            {
              onClick: () => updateCakeOutlineShape(cakeOutlineShape.cream1),
              isSelected: cake.outline_shape === cakeOutlineShape.cream1,
              Item: () => (
                <ShapeOne
                  isSelected={cake.outline_shape === cakeOutlineShape.cream1}
                />
              ),
            },
            {
              onClick: () => updateCakeOutlineShape(cakeOutlineShape.cream2),
              isSelected: cake.outline_shape === cakeOutlineShape.cream2,
              Item: () => (
                <ShapeTwo
                  isSelected={cake.outline_shape === cakeOutlineShape.cream2}
                />
              ),
            },
            {
              onClick: () => updateCakeOutlineShape(cakeOutlineShape.cream3),
              isSelected: cake.outline_shape === cakeOutlineShape.cream3,
              Item: () => (
                <ShapeThree
                  isSelected={cake.outline_shape === cakeOutlineShape.cream3}
                />
              ),
            },
          ]}
        />

        <ColorList
          items={cakeColors}
          selectColor={cake.outline_color}
          setColor={updateCakeOutlineColor}
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
