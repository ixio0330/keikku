// store
import useCake from "@/stores/cake"

import DecoCarrot, { Carrot } from "./deco/DecoCarrot"
import DecoCream, { Cream } from "./deco/DecoCream"
import DecoFlower, { Flower } from "./deco/DecoFlower"
import DecoHeart, { Heart } from "./deco/DecoHeart"
import DecoLine, { Line } from "./deco/DecoLine"
import DecoSprinkles, { Sprinkles } from "./deco/DecoSprinkles"

import CreamOne from "./outline/CreamOne"
import CreamThree from "./outline/CreamThree"
import CreamTwo from "./outline/CreamTwo"

import { cakeShapeStyle, cakeOutlineShape, cakeDecoShape } from "@/constants"

export default function CakeFrame() {
  const { cake } = useCake()

  const getOutlineStyle = () => {
    switch (cake.outline_shape) {
      case cakeOutlineShape.cream1:
        return <CreamOne color={cake.outline_color} shape={cake.cake_shape} />
      case cakeOutlineShape.cream2:
        return <CreamTwo color={cake.outline_color} shape={cake.cake_shape} />
      case cakeOutlineShape.cream3:
        return <CreamThree color={cake.outline_color} shape={cake.cake_shape} />
      default:
        return null
    }
  }

  const getDecoStyle = () => {
    switch (cake.deco_shape) {
      case cakeDecoShape.cream:
        return <Cream color={cake.deco_color} />
      case cakeDecoShape.line:
        return <Line />
      case cakeDecoShape.sprinkles:
        return <Sprinkles />
      case cakeDecoShape.heart:
        return <Heart color={cake.deco_color} />
      case cakeDecoShape.flower:
        return <Flower />
      case cakeDecoShape.carrot:
        return <Carrot />
    }
  }

  return (
    <section className="relative m-auto border rounded-2xl w-80 h-80 bg-background flex justify-center items-center my-10">
      <div
        style={{
          ...cakeShapeStyle[cake.cake_shape],
          backgroundColor: cake.cake_color,
        }}
      />
      {getOutlineStyle()}
      {getDecoStyle()}
    </section>
  )
}
