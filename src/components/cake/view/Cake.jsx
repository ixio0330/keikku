import { Carrot } from "../make/deco/DecoCarrot"
import { Cream } from "../make/deco/DecoCream"
import { Flower } from "../make/deco/DecoFlower"
import { Heart } from "../make/deco/DecoHeart"
import { Line } from "../make/deco/DecoLine"
import { Sprinkles } from "../make/deco/DecoSprinkles"

import CreamOne from "./outline/CreamOne"
import CreamThree from "./outline/CreamThree"
import CreamTwo from "./outline/CreamTwo"

import {
  miniCakeShapeStyle,
  cakeOutlineShape,
  cakeDecoShape,
  cakeTextFonts,
} from "@/constants"

export default function Cake({ cake }) {
  const getTextStyle = () =>
    cake.message && (
      <div
        className={`overflow-hidden absolute z-20 w-full h-full flex justify-center items-center ${cakeTextFonts.find(({ value }) => cake.text_font === value).className}`}
        style={{
          ...miniCakeShapeStyle[cake.cake_shape],
          color: cake.text_color,
          fontSize: `${cake.text_size / 3}px`,
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
    <li className="relative m-auto border rounded-2xl w-24 h-24 bg-background flex justify-center items-center">
      <div
        style={{
          ...miniCakeShapeStyle[cake.cake_shape],
          backgroundColor: cake.cake_color,
        }}
      />
      {getTextStyle()}
      {getOutlineStyle()}
      {getDecoStyle()}
    </li>
  )
}
