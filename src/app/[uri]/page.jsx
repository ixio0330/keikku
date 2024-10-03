import Link from "next/link"
import Image from "next/image"

// db
import { getActiveEventByUri } from "@/db/event"
import { isExistUser } from "@/db/auth"

// util
import { getUriFromCookie } from "@/utils/cookie"

// component
import { IoMdMenu, IoMdCalendar } from "react-icons/io"
import ActionButton from "./ActionButton"
export default async function KeikkuPage({ params }) {
  const uri = params.uri
  const isActiveUser = await isExistUser(uri)

  if (isActiveUser === false) {
    return <div>존재하지 않는 사용자에요.</div>
  }

  const activeEvent = await getActiveEventByUri(uri)
  const isOwner = uri === getUriFromCookie()

  return (
    <>
      <header className="fixed top-0 inset-x-0 mx-auto max-w-content w-full px-content h-16 flex items-center justify-between bg-background z-50">
        <button className="text-primary">
          <IoMdMenu size={28} />
        </button>
        <h1>
          <Image
            src="/app/logo.png"
            alt="케이꾸 로고"
            width={127}
            height={35}
          />
        </h1>
        <Image src="/app/cake.png" alt="케이크" width={40} height={40} />
      </header>

      <main className="max-w-content px-content m-auto mt-16 min-h-[calc(100vh-64px)] bg-background pb-10">
        <div className="pt-5 pb-10 relative overflow-hidden">
          {activeEvent ? (
            <div className="space-y-1">
              <p className="text-sm">
                {activeEvent.username}님이 진행중인 이벤트에요!
              </p>
              <p className="font-bold text-xl">{activeEvent.name}</p>
              <div className="text-gray-400 text-sm flex items-center gap-2">
                <IoMdCalendar size={20} />
                <p>{activeEvent.date}</p>
                {activeEvent.category && (
                  <>
                    <div className="w-px h-4 bg-gray-400" />
                    <p>{activeEvent.category}</p>
                  </>
                )}
              </div>
              {isOwner && (
                <Link
                  href={{
                    pathname: "/event/update",
                    query: { id: activeEvent.id },
                  }}
                  className="inline-block text-white bg-primary px-2 py-px rounded-full"
                >
                  수정하기
                </Link>
              )}
            </div>
          ) : (
            <div className="text-xl">
              <p>현재 진행 중인</p>
              <p>이벤트가 없어요 ;(</p>
            </div>
          )}
          <ul className="flex space-x-6 absolute -right-8 top-5">
            <li>
              <Image
                width={80}
                height={80}
                alt="이미지1"
                src="/main/img01.png"
              />
            </li>
            <li>
              <Image
                width={80}
                height={80}
                alt="이미지2"
                src="/main/img02.png"
              />
            </li>
          </ul>
        </div>
        <div className="relative pt-[118px]">
          <ul className="absolute -top-5 left-0 flex items-end justify-between">
            <Image
              width={61}
              height={94}
              alt="모자 사진"
              src="/main/cap01.png"
            />
            <Image
              width={56}
              height={96}
              alt="모자 사진"
              src="/main/cap02.png"
            />
            <Image
              width={61}
              height={109}
              alt="모자 사진"
              src="/main/cap03.png"
            />
            <Image width={92} height={92} alt="상자 사진" src="/main/box.png" />
            <Image
              width={79}
              height={155}
              alt="케이크 상태 사진"
              src="/main/status.png"
            />
            <Image
              width={38}
              height={72}
              alt="초 사진"
              src="/main/candle.png"
              className="ml-1"
            />
          </ul>

          {/* 쇼케이스 */}
          <Image
            width={392}
            height={413}
            alt="쇼케이스 사진"
            src="/main/showcase.png"
          />
        </div>

        <ActionButton activeEvent={activeEvent} isOwner={isOwner} uri={uri} />
      </main>
    </>
  )
}
