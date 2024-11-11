"use client"

import Select from "@/components/common/Select"
import Textarea from "@/components/common/Textarea"
import { removeUser } from "@/db/auth"
import { useRouter } from "next/navigation"
import { useState } from "react"
import toast from "react-hot-toast"
import Submit from "./Submit"

export default function Form({ username, options }) {
  const router = useRouter()
  const [option, setOption] = useState()
  const actionLeave = async (formData) => {
    const { success, message, data } = await removeUser({
      leave_category_id:
        formData.get("reason") === "none" ? null : formData.get("reason"),
      description: formData.get("description") ?? null,
    })
    if (!success) {
      toast(message, {
        icon: "❗️",
      })
      return
    }

    toast(data, {
      icon: "👋",
    })
    router.replace("/auth/login")
  }

  return (
    <form action={actionLeave} className="flex flex-col gap-5">
      <label className="space-y-2">
        <p>{username}님의 탈퇴 이유가 궁금해요.</p>
        <Select
          value={option}
          onChange={(e) => setOption(e.target.value)}
          name="reason"
          required
          options={[
            { value: "none", name: "탈퇴 사유를 선택해주세요." },
            ...options,
          ]}
        />
      </label>

      {options?.find(({ value }) => value == option)?.enable_description && (
        <Textarea
          name="description"
          placeholder="탈퇴 사유를 간단하게 작성 부탁드려요. 주신 의견은 서비스의 질을 높이는 데 큰 도움이 돼요."
          maxLength={100}
        />
      )}
      <Submit />
    </form>
  )
}
