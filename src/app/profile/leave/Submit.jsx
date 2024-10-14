import Spinner from "@/components/common/Spinner"
import { useFormStatus } from "react-dom"

export default function Submit() {
  const { pending } = useFormStatus()
  return (
    <>
      <button
        type="submit"
        className="font-xs mb-6 box-border w-full rounded-lg border border-primary bg-primary p-2 font-semibold text-white"
      >
        계정 탈퇴
      </button>
      {pending && <Spinner />}
    </>
  )
}
