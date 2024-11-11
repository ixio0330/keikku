import Spinner from "@/components/common/Spinner"
import Link from "next/link"
import { useFormStatus } from "react-dom"

export default function Submit() {
  const { pending } = useFormStatus()
  return (
    <div className="flex gap-5">
      <Link
        href="/profile"
        className="font-xs box-border w-2/5 rounded-lg border border-primary bg-primary bg-white p-2 text-center font-semibold text-primary"
      >
        돌아가기
      </Link>
      <button
        type="submit"
        className="font-xs box-border w-full rounded-lg border border-primary bg-primary p-2 font-semibold text-white"
      >
        계정 탈퇴
      </button>
      {pending && <Spinner />}
    </div>
  )
}
