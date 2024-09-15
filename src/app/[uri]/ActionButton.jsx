"use client"

import Link from "next/link"

// store
import useCake from "@/stores/cake"

export default function ActionButton({ activeEvent, isOwner }) {
  const { updateEvent } = useCake()

  return (
    <div className="flex flex-col text-center font-semibold space-y-3 mt-10">
      {activeEvent ? (
        isOwner ? (
          <button className="m-auto w-full text-white border border-primary rounded-lg box-border p-2 bg-primary">
            내 이벤트 알리기
          </button>
        ) : (
          <Link
            href="/cake/create/shape"
            className="m-auto w-full text-white border border-primary rounded-lg box-border p-2 bg-primary"
            onClick={() => updateEvent(activeEvent?.id)}
          >
            케이크 선물하기
          </Link>
        )
      ) : (
        <>
          <Link
            href="/event/create"
            className="m-auto w-full text-white border border-primary rounded-lg box-border p-2 bg-primary"
          >
            내 이벤트 만들기
          </Link>
        </>
      )}
    </div>
  )
}
