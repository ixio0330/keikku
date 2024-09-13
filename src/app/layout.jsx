import localFont from "next/font/local"
import "./globals.css"

const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
})

export const metadata = {
  title: "케이꾸",
  description: "케이꾸",
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className={`${pretendard.variable}`}>{children}</body>
    </html>
  )
}
