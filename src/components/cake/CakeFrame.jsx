import DecoCarrot from "./deco/DecoCarrot"
import DecoCream from "./deco/DecoCream"
import DecoFlower from "./deco/DecoFlower"
import DecoHeart from "./deco/DecoHeart"
import DecoLine from "./deco/DecoLine"
import DecoSprinkles from "./deco/DecoSprinkles"

import CreamOne from "./outline/CreamOne"
import CreamThree from "./outline/CreamThree"
import CreamTwo from "./outline/CreamTwo"

import { cakeShape, cakeOutlineShape, cakeDecoShape } from "@/constants"

export default function CakeFrame({ cakeColor, outline, deco }) {
  const getOutlineStyle = () => {
    switch (outline) {
      case cakeOutlineShape.cream1:
        return <CreamOne color={outlineColor} shape={cakeShape} />
      case cakeOutlineShape.cream2:
        return <CreamTwo color={outlineColor} shape={cakeShape} />
      case cakeOutlineShape.cream3:
        return <CreamThree color={outlineColor} shape={cakeShape} />
      default:
        return null
    }
  }

  const getDecoStyle = () => {
    switch (deco) {
      case cakeDecoShape.cream:
        return <DecoCream color={decoColor} />
      case cakeDecoShape.line:
        return <DecoLine />
      case cakeDecoShape.sprinkles:
        return <DecoSprinkles />
      case cakeDecoShape.heart:
        return <DecoHeart color={decoColor} />
      case cakeDecoShape.flower:
        return <DecoFlower />
      case cakeDecoShape.carrot:
        return <DecoCarrot />
      default:
        return null
    }
  }

  return (
    <section className="relative m-auto border rounded-2xl w-80 h-80 bg-background flex justify-center items-center my-10">
      <div
        className={`${cakeShapeStyle[cakeShape]}`}
        style={{ ...cakeShapeStyle[cakeShape], backgroundColor: cakeColor }}
      />
      {getOutlineStyle()}
      {getDecoStyle()}
    </section>
  )
}
