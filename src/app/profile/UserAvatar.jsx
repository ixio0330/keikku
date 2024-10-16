"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import { useFormStatus } from "react-dom"

// db
import { updateUsername } from "@/db/auth"

// component
import { BigAvatar } from "@/components/common/Avatar"
import Input from "@/components/common/Input"
import Modal from "@/components/common/Modal"
import { PiPencilSimple } from "react-icons/pi"

export default function UserAvatar({ userInfo }) {
  const router = useRouter()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const actionUpdateUsername = async (formData) => {
    const { success, message } = await updateUsername(formData.get("name"))
    if (success === false) {
      window.alert(message)
      return
    }

    router.refresh()
    setIsModalOpen(false)
  }

  return (
    <>
      <div className="flex items-center gap-3 py-5">
        <BigAvatar provider={userInfo.provider} />
        <div className="flex items-center gap-3">
          <p className="text-xl">
            <b>{userInfo.name}</b>님
          </p>
          <button onClick={() => setIsModalOpen(true)}>
            <PiPencilSimple size={20} />
          </button>
        </div>
      </div>
      <Modal open={isModalOpen}>
        <h3 className="pb-5 text-center text-lg font-bold">이름 변경하기</h3>
        <form action={actionUpdateUsername} className="space-y-5">
          <label>
            <p className="text font-bold">이름</p>
            <Input
              type="text"
              name="name"
              placeholder="이름을 입력해주세요."
              maxLength={10}
              required
              defaultValue={userInfo.name}
            />
          </label>
          <div className="flex gap-5">
            <button
              onClick={(e) => {
                e.preventDefault()
                setIsModalOpen(false)
              }}
              className="font-xs box-border w-1/2 rounded-lg border border-stone-400 bg-white p-2 text-center font-semibold text-stone-400"
            >
              취소
            </button>

            <Submit />
          </div>
        </form>
      </Modal>
    </>
  )
}

function Submit() {
  const { pending } = useFormStatus()

  return (
    <button
      type="submit"
      disabled={pending}
      className="font-xs box-border w-1/2 rounded-lg border border-primary bg-primary p-2 text-center font-semibold text-white"
    >
      {pending ? "저장중..." : "저장"}
    </button>
  )
}
