import { atom, useAtom } from "jotai"

import { cakeColors, cakeShape, cakeOutlineShape } from "@/constants"

const cakeAtom = atom({
  uri: null, // 사용자 uri
  event_id: null, // 이벤트 ID
  sender_id: null, // 보낸 사람: 로그인한 사용자는 id 입력
  sender_name: null, // 보낸 사람: 익명 사용자는 이름 입력
  message: null, // 작성한 메시지
  cake_shape: cakeShape.circle, // 케이크 모양
  cake_color: cakeColors[0].color, // 케이크 색상
  text_size: null, // 텍스트 크기
  text_styles: [], // 텍스트 스타일 배열
  text_color: null, // 텍스트 색상
  text_align: null, // 텍스트 정렬
  outline_shape: null, // 테두리 모양
  outline_color: null, // 테두리 색상
  deco_shape: null, // 데코 모양
  deco_color: null, // 데코 색상
})

export default function useCake() {
  const [cake, setCake] = useAtom(cakeAtom)

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

  const updateCakeOutlineShape = (shape = cakeOutlineShape.cream1) => {
    setCake((prev) => ({
      ...prev,
      outline_shape: shape,
    }))
  }

  const updateCakeOutlineColor = (color) => {
    setCake((prev) => ({
      ...prev,
      outline_color: color,
    }))
  }

  return {
    cake,
    updateUri,
    updateEvent,
    updateCakeShape,
    updateCakeColor,
    updateCakeOutlineShape,
    updateCakeOutlineColor,
  }
}
