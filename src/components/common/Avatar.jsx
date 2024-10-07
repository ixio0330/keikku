import { FcGoogle } from "react-icons/fc"
import { RiTwitterXFill } from "react-icons/ri"
import { SiKakao } from "react-icons/si"
import { PiUserCircle } from "react-icons/pi"

import { oauthProvider } from "@/constants"

export default function Avatar({ provider }) {
  switch (provider) {
    case oauthProvider.google:
      return (
        <div className="bg-white w-10 h-10 rounded-full flex justify-center items-center">
          <FcGoogle size={24} />
        </div>
      )
    case oauthProvider.kakao:
      return (
        <div className="bg-[#FFE300] w-10 h-10 rounded-full flex justify-center items-center">
          <SiKakao color="#1E1E1E" size={24} />
        </div>
      )
    case oauthProvider.twitter:
      return (
        <div className="bg-black w-10 h-10 rounded-full flex justify-center items-center">
          <RiTwitterXFill size={20} />
        </div>
      )
    default:
      return (
        <div className="bg-black w-10 h-10 rounded-full flex justify-center items-center">
          <PiUserCircle size={40} />
        </div>
      )
  }
}

export function BigAvatar({ provider }) {
  switch (provider) {
    case oauthProvider.google:
      return (
        <div className="bg-white w-16 h-16 rounded-full flex justify-center items-center">
          <FcGoogle size={32} />
        </div>
      )
    case oauthProvider.kakao:
      return (
        <div className="bg-[#FFE300] w-16 h-16 rounded-full flex justify-center items-center">
          <SiKakao color="#1E1E1E" size={32} />
        </div>
      )
    case oauthProvider.twitter:
      return (
        <div className="bg-black w-16 h-16 rounded-full flex justify-center items-center text-white">
          <RiTwitterXFill size={28} />
        </div>
      )
  }
}
