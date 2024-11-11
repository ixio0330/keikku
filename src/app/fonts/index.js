import { Nanum_Pen_Script } from "next/font/google"
import localFont from "next/font/local"

export const pretendard = localFont({
  src: "./PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
})

export const nanumPen = Nanum_Pen_Script({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  adjustFontFallback: false,
})

export const yeongdeoSea = localFont({
  src: "./YeongdeokSea.ttf",
  display: "swap",
  weight: "45 920",
})

export const adultkid = localFont({
  src: "./Adultkid.ttf",
  display: "swap",
  weight: "45 920",
})
