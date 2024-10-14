"use client"

import { useRouter } from "next/navigation"
import Link from "next/link"

// db
import { createCake } from "@/db/cake"

// store
import useCake from "@/stores/cake"
import useActiveCakes from "@/stores/activeCakes"

// component
import Input from "@/components/common/Input"

export default function CreateForm({ isGuest = true }) {
  const router = useRouter()
  const { cake, resetCake } = useCake()
  const { addNewCake } = useActiveCakes()

  const actionCreateCake = async (formData) => {
    const createForm = { ...cake }
    delete createForm.uri

    const { success, message, data } = await createCake({
      ...createForm,
      sender_name: formData.get("sender_name"),
    })

    if (success === false) {
      window.alert(message)
      return
    }

    addNewCake(data)
    resetCake()
    router.push(`/${cake.uri}`)
  }

  return (
    <form action={actionCreateCake} className="space-y-10">
      {isGuest && (
        <div className="space-y-3">
          <label>
            <p className="text-lg font-bold">From.</p>
            <Input
              type="text"
              name="sender_name"
              placeholder="선물하는 분의 이름을 알려주세요"
              maxLength={16}
              required
            />
          </label>
        </div>
      )}
      <div className="flex gap-5 pb-10">
        <Link
          href="/cake/create/deco"
          className="font-xs box-border w-2/5 rounded-lg border border-primary bg-primary bg-white p-2 text-center font-semibold text-primary"
        >
          이전
        </Link>

        <button className="font-xs box-border w-full rounded-lg border border-primary bg-primary p-2 text-center font-semibold text-white">
          선물하기
        </button>
      </div>
    </form>
  )
}
