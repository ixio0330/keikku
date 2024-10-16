import { getLeaveCategories } from "@/db/leave"
import { getUserInfoFromCookie } from "@/utils/cookie"
import Form from "./Form"

export default async function LeavePage() {
  const userInfo = getUserInfoFromCookie()
  const { data } = await getLeaveCategories()

  return (
    <div className="bg-background">
      <div className="m-auto min-h-screen max-w-content px-content pb-10">
        <header className="flex h-16 items-center justify-center text-xl font-bold">
          계정 탈퇴
        </header>
        <main className="space-y-5">
          <h1 className="text-lg font-bold">
            <p>
              <span className="text-primary">{userInfo?.name}</span>님을 볼 수
              있는{" "}
            </p>
            <p>마지막이라니 아쉬워요😢</p>
          </h1>
          <div className="space-y-5 rounded-lg bg-white p-5 text-sm text-stone-500">
            <p>
              계정을 삭제하면 선물 받은 케이크, 선물한 케이크 등 모든 활동
              정보가 삭제되며 복구가 불가능합니다.
            </p>
            <p>
              재가입을 하더라도 탈퇴 전의 계정정보 및 서비스 정보는 복구되지
              않아요.
            </p>
          </div>

          <Form username={userInfo?.name} options={data ?? []} />
        </main>
      </div>
    </div>
  )
}
