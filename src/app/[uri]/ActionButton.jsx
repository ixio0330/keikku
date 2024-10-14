"use client"

import Link from "next/link"

// store
import useCake from "@/stores/cake"

export default function ActionButton({ activeEvent, isOwner, uri }) {
  const { updateUri, updateEvent } = useCake()

  return (
    <div className="mt-10 flex flex-col space-y-3 text-center font-semibold">
      {activeEvent ? (
        isOwner ? (
          <button className="m-auto box-border w-full rounded-lg border border-primary bg-primary p-2 text-white">
            내 이벤트 알리기
          </button>
        ) : (
          <Link
            href="/cake/create/shape"
            className="m-auto box-border w-full rounded-lg border border-primary bg-primary p-2 text-white"
            onClick={() => {
              updateUri(uri)
              updateEvent(activeEvent?.id)
            }}
          >
            케이크 선물하기
          </Link>
        )
      ) : (
        <>
          <Link
            href="/event/create"
            className="m-auto box-border w-full rounded-lg border border-primary bg-primary p-2 text-white"
          >
            내 이벤트 만들기
          </Link>
        </>
      )}
    </div>
  )
}
