import Carrot from "./deco/Carrot"
import Cream from "./deco/Cream"
import Flower from "./deco/Flower"
import Heart from "./deco/Heart"
import Line from "./deco/Line"
import Sprinkles from "./deco/Sprinkles"

import CreamOne from "./outline/CreamOne"
import CreamThree from "./outline/CreamThree"
import CreamTwo from "./outline/CreamTwo"

import {
  miniCakeShapeStyle,
  cakeOutlineShape,
  cakeDecoShape,
  cakeTextFonts,
} from "@/constants"

import { shortenString } from "@/utils/string"

export default function Cake({ cake }) {
  const getTextStyle = () =>
    cake.message && (
      <div
        className={`overflow-hidden absolute z-20 w-full h-full flex justify-center items-center ${cakeTextFonts.find(({ value }) => cake.text_font === value).className}`}
        style={{
          ...miniCakeShapeStyle[cake.cake_shape],
          color: cake.text_color,
          fontSize: `${cake.text_size / 5}px`,
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
    <li className="relative">
      <div className="relative m-auto border rounded-2xl w-[90px] h-[90px] bg-white flex justify-center items-center">
        <div
          style={{
            ...miniCakeShapeStyle[cake.cake_shape],
            backgroundColor: cake.cake_color,
          }}
        />
        {getTextStyle()}
        {getOutlineStyle()}
        {getDecoStyle()}
      </div>
      <p className="absolute -bottom-3 bg-white rounded-full shadow w-full max-w-36 text-center py-1 border border-stone-400">
        {shortenString(cake.sender_name)}
      </p>
    </li>
  )
}
