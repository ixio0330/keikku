import { useFormStatus } from "react-dom"
import Spinner from "@/components/common/Spinner"

export default function Submit() {
  const { pending } = useFormStatus()
  return (
    <>
      <button
        type="submit"
        className="w-full text-white font-semibold border border-primary rounded-lg box-border p-2 bg-primary font-xs mb-6"
      >
        케이크 만들러 가기
      </button>
      {pending && <Spinner />}
    </>
  )
}
