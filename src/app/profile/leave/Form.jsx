"use client"

import Select from "@/components/common/Select"
import { removeUser } from "@/db/auth"
import { useRouter } from "next/navigation"
import Submit from "./Submit"

export default function Form({ username, options }) {
  const router = useRouter()
  const actionLeave = async (formData) => {
    const { success, message, data } = await removeUser({
      leave_category_id:
        formData.get("reason") === "none" ? null : formData.get("reason"),
    })
    if (!success) {
      window.alert(message)
      return
    }

    window.alert(data)
    router.replace("/auth/login")
  }

  return (
    <form action={actionLeave} className="flex flex-col gap-5">
      <label>
        <p>{username}님의 탈퇴 이유가 궁금해요.</p>
        <Select
          name="reason"
          required
          options={[
            { value: "none", name: "탈퇴 사유를 선택해주세요." },
            ...options,
          ]}
        />
      </label>

      <Submit />
    </form>
  )
}
