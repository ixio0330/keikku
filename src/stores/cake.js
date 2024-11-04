import { atom, useAtom } from "jotai"

import {
  cakeColors,
  cakeDecoShape,
  cakeOutlineShape,
  cakeShape,
  cakeTextAligns,
  cakeTextColors,
  cakeTextFonts,
} from "@/constants"

const cakeAtom = atom({
  sender_name: null, // 보낸 사람: 익명 사용자는 이름 입력
  message: null, // 작성한 메시지
  cake_shape: cakeShape.circle, // 케이크 모양
  cake_color: cakeColors[0].color, // 케이크 색상
  text_size: 20, // 텍스트 크기
  text_font: cakeTextFonts[0].value, // 텍스트 폰트
  text_styles: [], // 텍스트 스타일 배열
  text_color: cakeTextColors[0].color, // 텍스트 색상
  text_align: cakeTextAligns[1].value, // 텍스트 정렬
  outline_shape: null, // 테두리 모양
  outline_color: null, // 테두리 색상
  deco_shape: null, // 데코 모양
  deco_color: null, // 데코 색상
})

export default function useCake() {
  const [cake, setCake] = useAtom(cakeAtom)

  const resetCake = () => {
    setCake((prev) => ({
      ...prev,
      sender_name: null,
      message: null,
      cake_shape: cakeShape.circle,
      cake_color: cakeColors[0].color,
      text_size: 20,
      text_font: cakeTextFonts[0].value,
      text_styles: [],
      text_color: cakeTextColors[0].color,
      text_align: cakeTextAligns[1].value,
      outline_shape: null,
      outline_color: null,
      deco_shape: null,
      deco_color: null,
    }))
  }

  const updateUri = (uri) => {
    setCake((prev) => ({
      ...prev,
      uri,
    }))
  }

  const updateEvent = (id) => {
    setCake((prev) => ({
      ...prev,
      event_id: id,
    }))
  }

  // 모양
  const updateCakeShape = (shape = cakeShape.circle) => {
    setCake((prev) => ({
      ...prev,
      cake_shape: shape,
    }))
  }

  const updateCakeColor = (color) => {
    setCake((prev) => ({
      ...prev,
      cake_color: color,
    }))
  }

  // 텍스트
  const updateCakeTextColor = (color) => {
    setCake((prev) => ({
      ...prev,
      text_color: color,
    }))
  }

  const updateCakeTextSize = (size) => {
    setCake((prev) => ({
      ...prev,
      text_size: size,
    }))
  }

  const toggleCakeTextStyles = (style) => {
    setCake((prev) => {
      const isStyleIncluded = prev.text_styles.includes(style)

      return {
        ...prev,
        text_styles: isStyleIncluded
          ? prev.text_styles.filter((s) => s !== style)
          : [...prev.text_styles, style],
      }
    })
  }

  const updateCakeTextFont = (font) => {
    setCake((prev) => ({
      ...prev,
      text_font: font,
    }))
  }

  const updateCakeTextAlign = (align) => {
    setCake((prev) => ({
      ...prev,
      text_align: align,
    }))
  }

  // 메시지
  const updateCakeMessage = (message) => {
    setCake((prev) => ({
      ...prev,
      message,
    }))
  }

  // 테두리
  const updateCakeOutlineShape = (shape = cakeOutlineShape.cream1) => {
    setCake((prev) => ({
      ...prev,
      outline_shape: shape === prev.outline_shape ? null : shape,
    }))
  }

  const updateCakeOutlineColor = (color) => {
    setCake((prev) => ({
      ...prev,
      outline_color: color,
    }))
  }

  // 데코
  const updateCakeDecoShape = (shape = cakeDecoShape.cream) => {
    setCake((prev) => ({
      ...prev,
      deco_shape: shape === prev.deco_shape ? null : shape,
    }))
  }

  const updateCakeDecoColor = (color) => {
    setCake((prev) => ({
      ...prev,
      deco_color: color,
    }))
  }

  return {
    cake,
    resetCake,
    updateUri,
    updateEvent,
    updateCakeShape,
    updateCakeColor,
    updateCakeTextColor,
    updateCakeTextSize,
    updateCakeTextAlign,
    updateCakeTextFont,
    toggleCakeTextStyles,
    updateCakeMessage,
    updateCakeOutlineShape,
    updateCakeOutlineColor,
    updateCakeDecoShape,
    updateCakeDecoColor,
  }
}
