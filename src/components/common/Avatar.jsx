import { FcGoogle } from "react-icons/fc"
import { RiKakaoTalkFill, RiTwitterXFill } from "react-icons/ri"

import { BiSolidUser } from "react-icons/bi"

import { oauthProvider } from "@/constants"

export default function Avatar({ provider }) {
  switch (provider) {
    case oauthProvider.google:
      return (
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
          <FcGoogle size={24} />
        </div>
      )
    case oauthProvider.kakao:
      return (
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFE300]">
          <RiKakaoTalkFill color="#1E1E1E" size={24} />
        </div>
      )
    case oauthProvider.twitter:
      return (
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black">
          <RiTwitterXFill size={20} />
        </div>
      )
    default:
      return (
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-stone-400">
          <BiSolidUser size={20} />
        </div>
      )
  }
}

export function BigAvatar({ provider }) {
  switch (provider) {
    case oauthProvider.google:
      return (
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
          <FcGoogle size={32} />
        </div>
      )
    case oauthProvider.kakao:
      return (
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FFE300]">
          <RiKakaoTalkFill color="#1E1E1E" size={32} />
        </div>
      )
    case oauthProvider.twitter:
      return (
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white">
          <RiTwitterXFill size={28} />
        </div>
      )
  }
}
