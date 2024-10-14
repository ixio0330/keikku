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
      <form action={actionLogin} className="w-full">
        <button
          type="submit"
          name="provider"
          value={oauthProvider.google}
          className="font-xs mb-3 box-border flex w-full items-center justify-between rounded border border-gray-200 bg-white p-1"
        >
          <Image
            src="/logo/google.png"
            width={30}
            height={30}
            alt="구글 로고"
          />
          <p>구글 계정으로 시작하기</p>
          <span></span>
        </button>
        <button
          type="submit"
          name="provider"
          value={oauthProvider.kakao}
          className="font-xs box-border flex w-full items-center justify-between rounded border border-kakao bg-kakao p-1"
        >
          <Image
            src="/logo/kakao.png"
            width={30}
            height={30}
            alt="카카오 로고"
          />
          <p>카카오 계정으로 시작하기</p>
          <span></span>
        </button>
      </form>
    </section>
  )
}
