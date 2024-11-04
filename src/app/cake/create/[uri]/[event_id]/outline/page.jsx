"use client"
import Link from "next/link"
import { useParams } from "next/navigation"

// store
import useCake from "@/stores/cake"

// component
import CakeFrame from "@/components/cake/make/CakeFrame"
import ColorList from "@/components/cake/make/ColorList"
import ShapeList from "@/components/cake/make/ShapeList"
import Tab from "../Tab"

// constants
import ShapeOne from "@/components/cake/make/outline/ShapeOne"
import ShapeThree from "@/components/cake/make/outline/ShapeThree"
import ShapeTwo from "@/components/cake/make/outline/ShapeTwo"
import { cakeColors, cakeOutlineShape } from "@/constants"

export default function CreateCakeShapePage() {
  const params = useParams()
  const uri = params?.uri
  const event_id = params.event_id
  const { cake, updateCakeOutlineShape, updateCakeOutlineColor } = useCake()

  return (
    <>
      {/* 탭 메뉴 */}
      <Tab currentTab="테두리" uri={params?.uri} eventId={params?.event_id} />

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

        <div className="flex gap-5 pb-10">
          <Link
            href={`/cake/create/${uri}/${event_id}/text`}
            className="font-xs box-border w-2/5 rounded-lg border border-primary bg-primary bg-white p-2 text-center font-semibold text-primary"
          >
            이전
          </Link>

          <Link
            href={`/cake/create/${uri}/${event_id}/deco`}
            className="font-xs box-border w-full rounded-lg border border-primary bg-primary p-2 text-center font-semibold text-white"
          >
            다음
          </Link>
        </div>
      </section>
    </>
  )
}
