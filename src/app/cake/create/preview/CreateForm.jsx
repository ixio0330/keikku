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
          className="w-2/5 text-center text-primary bg-white font-semibold border border-primary rounded-lg box-border p-2 bg-primary font-xs"
        >
          이전
        </Link>

        <button className="w-full text-center text-white font-semibold border border-primary rounded-lg box-border p-2 bg-primary font-xs">
          선물하기
        </button>
      </div>
    </form>
  )
}
