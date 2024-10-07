import { MdOutlineTextFormat, MdFormatBold } from "react-icons/md"
import {
  LuItalic,
  LuAlignLeft,
  LuAlignJustify,
  LuAlignRight,
} from "react-icons/lu"
import { PiCake, PiGift, PiUser } from "react-icons/pi"
import {
  Nanum_Pen_Script,
  Nanum_Gothic,
  Dongle,
  Gowun_Dodum,
  Single_Day,
} from "next/font/google"

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

const nanumPen = Nanum_Pen_Script({ subsets: ["latin"], weight: ["400"] })
const dongle = Dongle({ subsets: ["latin"], weight: ["400", "700"] })
const singleDay = Single_Day({ subsets: ["latin"], weight: ["400"] })
const nanumGothic = Nanum_Gothic({ subsets: ["latin"], weight: ["400", "700"] })
const gowunDodum = Gowun_Dodum({ subsets: ["latin"], weight: ["400"] })

// 텍스트 폰트
export const cakeTextFonts = [
  {
    text: "나눔펜체",
    value: "nanum-pen",
    className: nanumPen.className,
  },
  {
    text: "동글",
    value: "dongle",
    className: dongle.className,
  },
  {
    text: "싱글데이",
    value: "single-day",
    className: singleDay.className,
  },
  {
    text: "나눔고딕",
    value: "nanum-gothic",
    className: nanumGothic.className,
  },
  {
    text: "고운돋움",
    value: "gowun-dodum",
    className: gowunDodum.className,
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
    href: "/profile/notice",
    name: "공지사항",
  },
  {
    href: "/profile/policy",
    name: "개인정보 처리방침 / 이용약관",
  },
  {
    href: "/profile/faq",
    name: "자주 묻는 질문",
  },
  {
    href: "/profile/app",
    name: "앱정보",
  },
]
