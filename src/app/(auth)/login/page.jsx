import Image from "next/image"
import { Chela_One } from "next/font/google"
import { oauthProvider } from "@/constants"

// action
import { loginInWithOauth } from "@/db/auth"

const chelaOne = Chela_One({ weight: ["400"], subsets: ["latin"] })

export default function LoginPage() {
  const actionLogin = async (formData) => {
    "use server"
    await loginInWithOauth(formData.get("provider"))
  }

  return (
    <section className="max-w-content m-auto h-full flex flex-col justify-center items-center gap-10 px-content">
      <div className="relative">
        <Image
          className="absolute -top-20 -left-8"
          src="/balloon-blue.png"
          width={168}
          height={290}
          alt="파란색 풍선"
        />
        <h1 className="relative top-12 text-2xl text-center font-bold z-50 mb-28">
          어서오세요! 특별한 날을 기록하는
          <br /> 케이크샵{" "}
          <span className={`${chelaOne.className} text-primary`}>keikku</span>
          입니다.
        </h1>
        <div className="flex w-full justify-center">
          <Image src="/cake.png" width={320} height={250} alt="케이크" />
        </div>
        <Image
          className="absolute top-0 left-5"
          src="/confetti.png"
          width={360}
          height={424}
          alt="색종이가루"
        />
        <Image
          className="absolute -bottom-4 right-2"
          src="/balloon-yellow.png"
          width={168}
          height={168}
          alt="노란색 풍선"
        />
      </div>
      <form action={actionLogin} className="w-full">
        <button
          type="submit"
          name="provider"
          value={oauthProvider.google}
          className="flex items-center justify-between w-full border border-gray-200 rounded box-border p-1 bg-white font-xs mb-3"
        >
          <Image src="/google.png" width={30} height={30} alt="구글 로고" />
          <p>구글 계정으로 시작하기</p>
          <span></span>
        </button>
        <button
          type="submit"
          name="provider"
          value={oauthProvider.kakao}
          className="flex items-center justify-between w-full border border-kakao rounded box-border p-1 bg-kakao font-xs"
        >
          <Image src="/kakao.png" width={30} height={30} alt="카카오 로고" />
          <p>카카오 계정으로 시작하기</p>
          <span></span>
        </button>
      </form>
    </section>
  )
}
