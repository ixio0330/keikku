import { MdOutlineTextFormat, MdFormatBold } from "react-icons/md"
import {
  LuItalic,
  LuAlignLeft,
  LuAlignJustify,
  LuAlignRight,
} from "react-icons/lu"

export const oauthProvider = {
  google: "google",
  kakao: "kakao",
  twitter: "twitter",
}

// 테이블명
export const T_EVENT_CATEGORIES = "event_categories"
export const T_EVENTS = "events"
export const T_USERS = "users"

// 케이크 탭
export const cakeTabs = [
  {
    id: "shape",
    name: "모양",
    href: "/cake/create/shape",
  },
  {
    id: "text",
    name: "텍스트",
    href: "/cake/create/text",
  },
  {
    id: "outline",
    name: "테두리",
    href: "/cake/create/outline",
  },
  {
    id: "deco",
    name: "데코",
    href: "/cake/create/deco",
  },
]

export const cakeShape = Object.freeze({
  circle: "circle",
  rectangle: "rectangle",
})

export const cakeOutlineShape = Object.freeze({
  cream1: "cream1",
  cream2: "cream2",
  cream3: "cream3",
})

export const cakeDecoShape = Object.freeze({
  cream: "cream",
  line: "line",
  sprinkles: "sprinkles",
  heart: "heart",
  flower: "flower",
  carrot: "carrot",
})

export const cakeShapeStyle = Object.freeze({
  circle: {
    width: "256px",
    height: "256px",
    borderRadius: "50%",
  },
  rectangle: {
    width: "224px",
    height: "224px",
    borderRadius: "30px",
  },
})

// 케이크, 테두리, 데코, 색상
export const cakeColors = [
  { color: "white" },
  { color: "#CE8FFF" },
  { color: "#EE9998" },
  { color: "#98C5E8" },
  { color: "#86D180" },
  { color: "#FFC416" },
]

// 텍스트 색상
export const cakeTextColors = [
  { color: "#1F2227" },
  { color: "white" },
  { color: "#61666C" },
  { color: "#950E0E" },
  { color: "#175444" },
  { color: "#001582" },
]

export const cakeTextStyles = [
  {
    Icon: <MdFormatBold size={20} />,
    value: "bold",
  },
  {
    Icon: <MdOutlineTextFormat size={20} />,
    value: "underline",
  },
  {
    Icon: <LuItalic />,
    value: "italic",
  },
]

export const cakeTextAligns = [
  {
    Icon: <LuAlignLeft />,
    value: "start",
  },
  {
    Icon: <LuAlignJustify />,
    value: "center",
  },
  {
    Icon: <LuAlignRight />,
    value: "end",
  },
]

// 텍스트 폰트
export const cakeTextFonts = [
  {
    text: "고딕1 (한국어)",
    value: "gothic01-ko",
    className: "",
  },
  {
    text: "고딕2 (한국어)",
    value: "gothic02-ko",
    className: "",
  },
  {
    text: "손글씨1 (한국어)",
    value: "hand01-ko",
    className: "",
  },
  {
    text: "손글씨2 (한국어)",
    value: "hand02-ko",
    className: "",
  },
]
