// store
import useCake from "@/stores/cake"

import { Carrot } from "./deco/DecoCarrot"
import { Cream } from "./deco/DecoCream"
import { Flower } from "./deco/DecoFlower"
import { Heart } from "./deco/DecoHeart"
import { Line } from "./deco/DecoLine"
import { Sprinkles } from "./deco/DecoSprinkles"

import CreamOne from "./outline/CreamOne"
import CreamThree from "./outline/CreamThree"
import CreamTwo from "./outline/CreamTwo"

import {
  cakeShapeStyle,
  cakeOutlineShape,
  cakeDecoShape,
  cakeTextFonts,
} from "@/constants"

export default function CakeFrame({ children }) {
  const { cake } = useCake()

  const getTextStyle = () =>
    cake.message && (
      <div
        className={`overflow-hidden absolute z-20 w-full h-full flex justify-center items-center ${cakeTextFonts.find(({ value }) => cake.text_font === value).className}`}
        style={{
          ...cakeShapeStyle[cake.cake_shape],
          color: cake.text_color,
          fontSize: `${cake.text_size}px`,
          textAlign: cake.text_align,
          fontWeight: cake.text_styles.includes("bold") ? "bold" : "normal",
          textDecoration: cake.text_styles.includes("underline")
            ? "underline"
            : "none",
          fontStyle: cake.text_styles.includes("italic") ? "italic" : "normal",
        }}
      >
        <div className="w-full p-5">
          {cake.message?.split("\n").map((sentence, idx) => (
            <p key={`message-${idx}`}>{sentence}</p>
          ))}
        </div>
      </div>
    )

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
      {children ?? getTextStyle()}
      {getOutlineStyle()}
      {getDecoStyle()}
    </section>
  )
}
