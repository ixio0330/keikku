"use client"

import Modal from "@/components/common/Modal"
import Select from "@/components/common/Select"
import Spinner from "@/components/common/Spinner"
import Textarea from "@/components/common/Textarea"
import { removeUser } from "@/db/auth"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useFormStatus } from "react-dom"
import toast from "react-hot-toast"

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

function Submit() {
  const { pending } = useFormStatus()
  const [isModalOpen, setIsModalOpen] = useState()
  return (
    <div className="flex gap-5">
      <Link
        href="/profile"
        className="font-xs box-border w-2/5 rounded-lg border border-primary bg-primary bg-white p-2 text-center font-semibold text-primary"
      >
        돌아가기
      </Link>
      <button
        onClick={() => setIsModalOpen(true)}
        className="font-xs box-border w-full rounded-lg border border-primary bg-primary p-2 font-semibold text-white"
      >
        계정 탈퇴
      </button>

      <Modal open={isModalOpen}>
        <div className="space-y-5">
          <p className="p-5 text-center">계정을 탈퇴하시겠어요?</p>
          <div className="flex gap-5">
            <button
              type="button"
              disabled={pending}
              onClick={() => setIsModalOpen(false)}
              className="font-xs box-border w-1/2 rounded-lg border border-stone-400 bg-white p-2 text-center font-semibold text-stone-400"
            >
              취소
            </button>
            <button
              type="submit"
              disabled={pending}
              className="font-xs box-border w-full rounded-lg border border-primary bg-primary p-2 text-center font-semibold text-white"
            >
              저장
            </button>
            {pending && <Spinner />}
          </div>
        </div>
      </Modal>
    </div>
  )
}
