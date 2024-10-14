import Spinner from "@/components/common/Spinner"
import { useFormStatus } from "react-dom"

export default function Submit() {
  const { pending } = useFormStatus()
  return (
    <>
      <button
        type="submit"
        className="w-full text-white font-semibold border border-primary rounded-lg box-border p-2 bg-primary font-xs mb-6"
      >
        계정 탈퇴
      </button>
      {pending && <Spinner />}
    </>
  )
}
