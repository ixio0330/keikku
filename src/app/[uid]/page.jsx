import Image from "next/image"
import Link from "next/link"
import { IoMdMenu, IoMdCalendar } from "react-icons/io"

export default function KeikkuPage() {
  const activeEvent = null

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
        <div className="mt-10 pb-10 relative overflow-hidden">
          <div className="text-2xl flex flex-col -space-y-1">
            {activeEvent ? (
              <>
                <p>
                  <b>{"닉네임"}</b> 님의 기념일의
                </p>
                <p>
                  <span className="text-primary font-bold">{"n"}일</span>{" "}
                  남았어요!
                </p>
              </>
            ) : (
              <>
                <p>현재 진행 중인</p>
                <p>이벤트가 없어요 ;(</p>
              </>
            )}
          </div>
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
        <div className="flex flex-col text-center font-semibold space-y-3 mt-10">
          {activeEvent ? (
            <>
              <button className="m-auto w-full text-white border border-primary rounded-lg box-border p-2 bg-primary">
                내 이벤트 알리기
              </button>
            </>
          ) : (
            <>
              <Link
                href="/event/create"
                className="m-auto w-full text-white border border-primary rounded-lg box-border p-2 bg-primary"
              >
                내 이벤트 만들기
              </Link>
            </>
          )}
        </div>
      </main>
    </>
  )
}
