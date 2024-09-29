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
import { cakeColors, cakeDecoShape } from "@/constants"
import DecoCream from "@/components/cake/deco/DecoCream"
import DecoLine from "@/components/cake/deco/DecoLine"
import DecoSprinkles from "@/components/cake/deco/DecoSprinkles"
import DecoHeart from "@/components/cake/deco/DecoHeart"
import DecoFlower from "@/components/cake/deco/DecoFlower"
import DecoCarrot from "@/components/cake/deco/DecoCarrot"

export default function CreateCakeShapePage() {
  const { cake, updateCakeDecoShape, updateCakeDecoColor } = useCake()

  return (
    <>
      {/* 탭 메뉴 */}
      <Tab currentTab="데코" />

      {/* 케이크 틀 */}
      <CakeFrame />

      {/* 선택 */}
      <section className="space-y-10">
        <ShapeList
          title="모양"
          items={[
            {
              onClick: () => updateCakeDecoShape(cakeDecoShape.cream),
              isSelected: cake.deco_shape === cakeDecoShape.cream,
              Item: () => (
                <DecoCream
                  isSelected={cake.deco_shape === cakeDecoShape.cream}
                />
              ),
            },
            {
              onClick: () => updateCakeDecoShape(cakeDecoShape.line),
              isSelected: cake.deco_shape === cakeDecoShape.line,
              Item: () => (
                <DecoLine isSelected={cake.deco_shape === cakeDecoShape.line} />
              ),
            },
            {
              onClick: () => updateCakeDecoShape(cakeDecoShape.sprinkles),
              isSelected: cake.deco_shape === cakeDecoShape.sprinkles,
              Item: () => (
                <DecoSprinkles
                  isSelected={cake.deco_shape === cakeDecoShape.sprinkles}
                />
              ),
            },
            {
              onClick: () => updateCakeDecoShape(cakeDecoShape.heart),
              isSelected: cake.deco_shape === cakeDecoShape.heart,
              Item: () => (
                <DecoHeart
                  isSelected={cake.deco_shape === cakeDecoShape.heart}
                />
              ),
            },
            {
              onClick: () => updateCakeDecoShape(cakeDecoShape.flower),
              isSelected: cake.deco_shape === cakeDecoShape.flower,
              Item: () => (
                <DecoFlower
                  isSelected={cake.deco_shape === cakeDecoShape.flower}
                />
              ),
            },
            {
              onClick: () => updateCakeDecoShape(cakeDecoShape.carrot),
              isSelected: cake.deco_shape === cakeDecoShape.carrot,
              Item: () => (
                <DecoCarrot
                  isSelected={cake.deco_shape === cakeDecoShape.carrot}
                />
              ),
            },
          ]}
        />

        <ColorList
          items={cakeColors}
          selectColor={cake.deco_color}
          setColor={updateCakeDecoColor}
        />

        <div className="flex gap-5 pb-10">
          <Link
            href="/cake/create/outline"
            className="w-2/5 text-center text-primary bg-white font-semibold border border-primary rounded-lg box-border p-2 bg-primary font-xs"
          >
            이전
          </Link>

          <Link
            href="/cake/create/preview"
            className="w-full text-center text-white font-semibold border border-primary rounded-lg box-border p-2 bg-primary font-xs"
          >
            다음
          </Link>
        </div>
      </section>
    </>
  )
}
