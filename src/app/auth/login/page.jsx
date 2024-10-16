import { oauthProvider } from "@/constants"
import { Chela_One } from "next/font/google"
import Image from "next/image"
import { FcGoogle } from "react-icons/fc"
import { RiKakaoTalkFill, RiTwitterXFill } from "react-icons/ri"

// action
import { loginInWithOauth } from "@/db/auth"

const chelaOne = Chela_One({ weight: ["400"], subsets: ["latin"] })

export default function LoginPage() {
  const actionLogin = async (formData) => {
    "use server"
    await loginInWithOauth(formData.get("provider"))
  }

  return (
    <section className="m-auto flex h-full max-w-content flex-col items-center justify-center gap-10 px-content">
      <div className="relative">
        <Image
          className="absolute -left-8 -top-20"
          src="/auth/balloon-blue.png"
          width={168}
          height={290}
          alt="파란색 풍선"
        />
        <h1 className="relative top-12 z-50 mb-28 text-center text-2xl font-bold">
          어서오세요! 특별한 날을 기록하는
          <br /> 케이크샵{" "}
          <span className={`${chelaOne.className} text-primary`}>keikku</span>
          입니다.
        </h1>
        <div className="flex w-full justify-center">
          <Image src="/auth/cake.png" width={320} height={250} alt="케이크" />
        </div>
        <Image
          className="absolute left-5 top-0"
          src="/auth/confetti.png"
          width={360}
          height={424}
          alt="색종이가루"
        />
        <Image
          className="absolute -bottom-4 right-2"
          src="/auth/balloon-yellow.png"
          width={168}
          height={168}
          alt="노란색 풍선"
        />
      </div>
      <form
        action={actionLogin}
        className="flex w-full flex-col gap-3 font-semibold"
      >
        <button
          type="submit"
          name="provider"
          value={oauthProvider.google}
          className="font-xs box-border flex w-full items-center justify-between rounded-lg border border-gray-200 bg-white p-2"
        >
          <div className="flex h-5 w-5 items-center justify-center rounded-full">
            <FcGoogle size={24} />
          </div>
          <p>구글로 시작하기</p>
          <span></span>
        </button>
        <button
          type="submit"
          name="provider"
          value={oauthProvider.twitter}
          className="font-xs box-border flex w-full items-center justify-between rounded-lg border border-black bg-black p-2 text-white"
        >
          <div className="flex h-5 w-5 items-center justify-center rounded-full">
            <RiTwitterXFill size={24} />
          </div>
          <p>트위터로 시작하기</p>
          <span></span>
        </button>
        <button
          type="submit"
          name="provider"
          value={oauthProvider.kakao}
          className="font-xs box-border flex w-full items-center justify-between rounded-lg border border-kakao bg-kakao p-2"
        >
          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#FFE300]">
            <RiKakaoTalkFill color="#1E1E1E" size={24} />
          </div>
          <p>카카오로 시작하기</p>
          <span></span>
        </button>
      </form>
    </section>
  )
}
