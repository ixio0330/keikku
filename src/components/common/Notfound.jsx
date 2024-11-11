import { getUserInfoFromCookie } from "@/utils/cookie"
import Link from "next/link"

export default function Notfound({ message = "페이지를 찾을 수 없어요" }) {
  const userInfo = getUserInfoFromCookie()

  return (
    <>
      <section className="bg-background">
        <div className="m-auto flex min-h-screen max-w-content flex-col items-center justify-center gap-3 bg-background px-content pb-10">
          <h1 className="text-2xl font-bold">404</h1>
          <p className="text-2xl">{message}</p>
          <Link
            href={`/${userInfo?.uri}` ?? "/auth/login"}
            className="font-xs box-border block w-full rounded-lg border border-primary bg-primary p-2 text-center font-semibold text-white"
          >
            홈으로
          </Link>
        </div>
      </section>
    </>
  )
}
