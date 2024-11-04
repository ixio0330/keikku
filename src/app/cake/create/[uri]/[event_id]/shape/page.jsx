"use client"
import Link from "next/link"
import { useParams } from "next/navigation"

// store
import useCake from "@/stores/cake"

// component
import ColorList from "@/components/cake/make/ColorList"
import Circle from "@/components/cake/make/shape/Circle"
import Rectangle from "@/components/cake/make/shape/Rectangle"
import ShapeList from "@/components/cake/make/ShapeList"
import Tab from "../Tab"

// constants
import { cakeColors, cakeShape } from "@/constants"

export default function CreateCakeShapePage() {
  const params = useParams()
  const uri = params?.uri
  const event_id = params.event_id
  const { cake, updateCakeShape, updateCakeColor } = useCake()

  const genCakeFrame = () => {
    switch (cake.cake_shape) {
      case cakeShape.circle:
        return <Circle color={cake.cake_color} />
      case cakeShape.rectangle:
        return <Rectangle color={cake.cake_color} />
      default:
        return null
    }
  }

  return (
    <>
      {/* 탭 메뉴 */}
      <Tab currentTab="모양" uri={uri} eventId={event_id} />

      {/* 케이크 틀 */}
      <section className="relative m-auto my-10 flex h-80 w-80 items-center justify-center rounded-2xl border bg-background">
        {genCakeFrame()}
      </section>

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
                  className={`h-16 w-16 rounded-full ${cake.cake_shape === "circle" ? "bg-white" : "bg-gray-300"}`}
                />
              ),
            },
            {
              onClick: () => updateCakeShape("rectangle"),
              isSelected: cake.cake_shape === "rectangle",
              Item: () => (
                <div
                  className={`h-16 w-16 rounded-2xl ${cake.cake_shape === "rectangle" ? "bg-white" : "bg-gray-300"}`}
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
            href={`/cake/create/${uri}/${event_id}/text`}
            className="font-xs box-border block w-full rounded-lg border border-primary bg-primary p-2 text-center font-semibold text-white"
          >
            다음
          </Link>
        </div>
      </section>
    </>
  )
}
