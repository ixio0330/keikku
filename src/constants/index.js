import { adultkid, nanumPen, pretendard, yeongdeoSea } from "@/app/fonts"
import {
  LuAlignJustify,
  LuAlignLeft,
  LuAlignRight,
  LuItalic,
} from "react-icons/lu"
import { MdFormatBold, MdOutlineTextFormat } from "react-icons/md"
import { PiCake, PiGift, PiUser } from "react-icons/pi"

export const oauthProvider = {
  google: "google",
  kakao: "kakao",
  twitter: "twitter",
}

// 테이블명
export const T_EVENT_CATEGORIES = "event_categories"
export const T_EVENTS = "events"
export const T_USERS = "users"
export const T_CAKES = "cakes"
export const T_LEAVES = "leaves"
export const T_LEAVE_CATEGORIES = "leave_categories"

// 케이크 탭
export const cakeTabs = [
  {
    id: "shape",
    name: "모양",
    href: "shape",
  },
  {
    id: "text",
    name: "텍스트",
    href: "text",
  },
  {
    id: "outline",
    name: "테두리",
    href: "outline",
  },
  {
    id: "deco",
    name: "데코",
    href: "deco",
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

// 케이크 사이즈
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

// 미니 케이크 사이즈
export const miniCakeShapeStyle = Object.freeze({
  circle: {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
  },
  rectangle: {
    width: "64px",
    height: "64px",
    borderRadius: "8px",
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
    text: "나눔펜체",
    value: "nanum-pen",
    className: nanumPen.className,
  },
  {
    text: "영덕바다체",
    value: "yeongdeo-sea",
    className: yeongdeoSea.className,
  },
  {
    text: "프리텐다드",
    value: "pretendard",
    className: pretendard.className,
  },
  {
    text: "어른아이체",
    value: "adultkid",
    className: adultkid.className,
  },
]

export const appMenus = [
  {
    href: "/profile",
    name: "마이페이지",
    isRequiredAuth: true,
    Icon: PiUser,
  },
  {
    href: "/give",
    name: "받은 케이크",
    isRequiredAuth: true,
    Icon: PiCake,
  },
  {
    href: "/receive",
    name: "선물한 케이크",
    isRequiredAuth: true,
    Icon: PiGift,
  },
]

export const profileMenus = [
  {
    href: "https://equal-dragon-59f.notion.site/13c54d562f8780738838c487113e20fd",
    name: "공지사항",
    target: "_blank",
  },
  {
    href: "https://equal-dragon-59f.notion.site/13c54d562f878010a4a5e69140d04bf0",
    name: "이용약관/개인정보처리방침",
    target: "_blank",
  },
  {
    href: "https://equal-dragon-59f.notion.site/13c54d562f8780f69c3ef81a6444c1ee",
    name: "자주 묻는 질문",
    target: "_blank",
  },
  // {
  //   href: "/profile/app",
  //   name: "앱정보",
  // },
]
