import Link from "next/link"

// db
import { isExistUser } from "@/db/auth"
import { getActiveEventByUri } from "@/db/event"

// util
import { getUserInfoFromCookie } from "@/utils/cookie"

// component
import AppHeader from "@/components/app/Header"
import ActiveCakeList from "@/components/cake/view/ActiveCakeList"
import Notfound from "@/components/common/Notfound"
import ActionButton from "./ActionButton"

export default async function KeikkuPage({ params }) {
  const uri = params.uri
  const isActiveUser = await isExistUser(uri)

  if (isActiveUser === false) {
    return <Notfound message="탈퇴한 사용자에요" />
  }

  const { data: activeEvent } = await getActiveEventByUri(uri)

  const userInfo = getUserInfoFromCookie()
  const isOwner = uri === userInfo?.uri

  return (
    <div className="bg-background">
      <AppHeader userInfo={userInfo} />
      <main className="m-auto mt-16 min-h-[calc(100vh-64px)] max-w-content bg-background pb-10">
        <section className="relative overflow-hidden px-content">
          {activeEvent ? (
            <div className="space-y-2">
              <p className="text-sm">
                {activeEvent.username}님이 진행중인 이벤트에요!
              </p>
              <p className="text-xl font-bold">{activeEvent.name}</p>
              <div className="flex items-center gap-2 text-sm">
                <p className="text-gray-400">{activeEvent.date}</p>
                <p className="text-[#FF6341]">{activeEvent.category}</p>
              </div>
              {isOwner && (
                <Link
                  href={{
                    pathname: "/event/update",
                    query: { id: activeEvent.id },
                  }}
                  className="inline-block rounded-lg border border-primary bg-white px-2 py-[2px] text-sm text-primary"
                >
                  이벤트 수정
                </Link>
              )}
            </div>
          ) : (
            <div className="text-xl">
              <p>현재 진행 중인</p>
              <p>이벤트가 없어요 ;(</p>
            </div>
          )}
        </section>

        {/* 쇼케이스 */}
        <ActiveCakeList eventId={activeEvent?.id} />

        <ActionButton activeEvent={activeEvent} isOwner={isOwner} uri={uri} />
      </main>
    </div>
  )
}
