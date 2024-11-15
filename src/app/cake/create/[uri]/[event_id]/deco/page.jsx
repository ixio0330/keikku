"use client"
import Link from "next/link"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"

// store
import useCake from "@/stores/cake"

// component
import CakeFrame from "@/components/cake/make/CakeFrame"
import ColorList from "@/components/cake/make/ColorList"
import ShapeList from "@/components/cake/make/ShapeList"
import Tab from "../Tab"

// constants
import DecoCarrot from "@/components/cake/make/deco/DecoCarrot"
import DecoCream from "@/components/cake/make/deco/DecoCream"
import DecoFlower from "@/components/cake/make/deco/DecoFlower"
import DecoHeart from "@/components/cake/make/deco/DecoHeart"
import DecoLine from "@/components/cake/make/deco/DecoLine"
import DecoSprinkles from "@/components/cake/make/deco/DecoSprinkles"
import { cakeColors, cakeDecoShape } from "@/constants"

export default function CreateCakeShapePage() {
  const params = useParams()
  const uri = params?.uri
  const event_id = params.event_id
  const { cake, updateCakeDecoShape, updateCakeDecoColor } = useCake()
  const [disabledColor, setDisabledColor] = useState(false)

  useEffect(() => {
    if (cake.deco_shape == null) {
      updateCakeDecoColor(null)
    }
  }, [cake.deco_shape])

  return (
    <>
      {/* 탭 메뉴 */}
      <Tab currentTab="데코" uri={params?.uri} eventId={params?.event_id} />

      {/* 케이크 틀 */}
      <CakeFrame />

      {/* 선택 */}
      <section className="space-y-10">
        <ShapeList
          title="모양"
          items={[
            {
              onClick: () => {
                updateCakeDecoShape(cakeDecoShape.cream)
                setDisabledColor(false)
              },
              isSelected: cake.deco_shape === cakeDecoShape.cream,
              Item: () => (
                <DecoCream
                  isSelected={cake.deco_shape === cakeDecoShape.cream}
                />
              ),
            },
            {
              onClick: () => {
                updateCakeDecoShape(cakeDecoShape.line)
                setDisabledColor(true)
                updateCakeDecoColor(null)
              },
              isSelected: cake.deco_shape === cakeDecoShape.line,
              Item: () => (
                <DecoLine isSelected={cake.deco_shape === cakeDecoShape.line} />
              ),
            },
            {
              onClick: () => {
                updateCakeDecoShape(cakeDecoShape.sprinkles)
                setDisabledColor(true)
                updateCakeDecoColor(null)
              },
              isSelected: cake.deco_shape === cakeDecoShape.sprinkles,
              Item: () => (
                <DecoSprinkles
                  isSelected={cake.deco_shape === cakeDecoShape.sprinkles}
                />
              ),
            },
            {
              onClick: () => {
                updateCakeDecoShape(cakeDecoShape.heart)
                setDisabledColor(false)
              },
              isSelected: cake.deco_shape === cakeDecoShape.heart,
              Item: () => (
                <DecoHeart
                  isSelected={cake.deco_shape === cakeDecoShape.heart}
                />
              ),
            },
            {
              onClick: () => {
                updateCakeDecoShape(cakeDecoShape.flower)
                setDisabledColor(true)
                updateCakeDecoColor(null)
              },
              isSelected: cake.deco_shape === cakeDecoShape.flower,
              Item: () => (
                <DecoFlower
                  isSelected={cake.deco_shape === cakeDecoShape.flower}
                />
              ),
            },
            {
              onClick: () => {
                updateCakeDecoShape(cakeDecoShape.carrot)
                setDisabledColor(true)
                updateCakeDecoColor(null)
              },
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
          disabled={disabledColor}
        />

        <div className="flex gap-5 pb-10">
          <Link
            href={`/cake/create/${uri}/${event_id}/outline`}
            className="font-xs box-border w-2/5 rounded-lg border border-primary bg-primary bg-white p-2 text-center font-semibold text-primary"
          >
            이전
          </Link>

          <Link
            href={`/cake/create/${uri}/${event_id}/preview`}
            className="font-xs box-border w-full rounded-lg border border-primary bg-primary p-2 text-center font-semibold text-white"
          >
            다음
          </Link>
        </div>
      </section>
    </>
  )
}
