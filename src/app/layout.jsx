import KakaoScript from "@/components/script/KakaoScript"
import localFont from "next/font/local"
import "./globals.css"

const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
})

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  minimumScale: 1,
}

const metadataBase = new URL(process.env.DOMAIN)

export const metadata = {
  title: "케이꾸",
  description: "일상을 특별하게, 케이꾸",
  author: "케이꾸팀",
  openGraph: {
    title: "케이꾸",
    site_name: "케이꾸",
    url: metadataBase,
    description: "일상을 특별하게, 케이꾸",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "케이꾸",
      },
    ],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className={`${pretendard.variable}`}>{children}</body>
      <KakaoScript />
    </html>
  )
}
