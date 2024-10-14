import { useFormStatus } from "react-dom"
import Spinner from "@/components/common/Spinner"

export default function Submit() {
  const { pending } = useFormStatus()
  return (
    <>
      <button
        type="submit"
        className="font-xs mb-6 box-border w-full rounded-lg border border-primary bg-primary p-2 font-semibold text-white"
      >
        케이크 만들러 가기
      </button>
      {pending && <Spinner />}
    </>
  )
}
