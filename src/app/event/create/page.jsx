import Image from "next/image"
import Link from "next/link"

// component
import { MdHomeFilled } from "react-icons/md"
import Input from "@/components/Input"
import Textarea from "@/components/Textarea"

export default function CreateEventPage() {
  return (
    <>
      <header className="fixed top-0 inset-x-0 mx-auto max-w-content w-full px-content h-16 flex items-center justify-between bg-background z-50">
        <Link href="/uri">
          <MdHomeFilled size={28} />
        </Link>
        <h1 className="text-lg font-bold">새로운 이벤트</h1>
        <Image src="/app/cake.png" alt="케이크" width={40} height={40} />
      </header>

      <main className="max-w-content px-content m-auto mt-16 min-h-[calc(100vh-64px)] bg-background py-5">
        <form className="flex flex-col gap-10">
          <label>
            <p className="text-lg font-bold">어떤 이벤트인가요?</p>
            <Input
              type="text"
              name="name"
              placeholder="디데이의 이름을 입력해주세요."
              maxLength={16}
            />
          </label>

          <label>
            <p className="text-lg font-bold">이벤트 날짜를 알려 주세요.</p>
            <Input type="date" name="date" />
          </label>

          <label className="space-y-2">
            <p className="text-lg font-bold">
              이벤트에 대해 간단하게 설명해 주세요.
            </p>
            <Textarea
              name="description"
              placeholder="다른 이용자들이 알 수 있도록 이벤트에 대해 알려 주세요."
              maxLength={100}
            />
          </label>

          <button
            type="submit"
            className="w-full font-semibold text-white border border-primary rounded-lg box-border p-2 bg-primary"
          >
            이벤트 만들기
          </button>
        </form>
      </main>
    </>
  )
}
