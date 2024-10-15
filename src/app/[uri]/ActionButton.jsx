"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

// store
import Avatar from "@/components/common/Avatar"
import Modal from "@/components/common/Modal"
import useCake from "@/stores/cake"

export default function ActionButton({
  activeEvent,
  username,
  isOwner,
  uri,
  domain,
}) {
  const { updateUri, updateEvent } = useCake()
  const pathname = usePathname()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const onClickCopyToClipboard = async () => {
    try {
      await window.navigator.clipboard.writeText(`${domain}${pathname}`)
      window.alert("클립보드에 링크가 복사되었어요")
    } catch (err) {
      window.alert("링크를 복사하지 못했어요 :( 다시 시도해주세요")
    }
  }

  const onClickShareToTwitter = () => {
    const eventURL = encodeURIComponent(`${domain}${pathname}`)
    const twitterUrl = `https://twitter.com/intent/tweet?text=${eventURL}`
    window.open(twitterUrl, "_blank")
    setIsModalOpen(false)
  }

  const onClickShareToKakao = () => {
    const { Kakao } = window

    Kakao.Share.createCustomButton({
      container: "#kakaotalk-sharing-btn",
      templateId: Number(process.env.NEXT_PUBLIC_KAKAO_TEMPLATE_ID),
      templateArgs: {
        USERNAME: username,
        REGI_WEB_DOMAIN: domain,
        URI: uri,
      },
    })
  }

  return (
    <div className="mt-10 flex flex-col gap-3 text-center font-semibold">
      {activeEvent ? (
        isOwner ? (
          <>
            <button
              onClick={() => setIsModalOpen(true)}
              className="m-auto box-border w-full rounded-lg border border-primary bg-primary p-2 text-white"
            >
              내 이벤트 알리기
            </button>
            <Modal
              open={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              className="space-y-5 text-sm font-normal"
            >
              <h3 className="text-lg font-bold">친구에게 공유하기</h3>
              <div className="flex items-center justify-center gap-5">
                <button
                  id="kakaotalk-sharing-btn"
                  onClick={onClickShareToKakao}
                  className="flex flex-col items-center justify-center gap-1"
                >
                  <Avatar provider="kakao" />
                  <p>카카오톡</p>
                </button>
                <button
                  onClick={onClickShareToTwitter}
                  className="flex flex-col items-center justify-center gap-1"
                >
                  <Avatar provider="twitter" />
                  <p>X</p>
                </button>
              </div>

              <div className="flex">
                <p className="w-10/12 overflow-hidden text-ellipsis whitespace-nowrap border bg-stone-100 px-2 py-1">
                  {domain}
                  {pathname}
                </p>
                <button
                  onClick={onClickCopyToClipboard}
                  className="flex-grow border border-l-0"
                >
                  복사
                </button>
              </div>
            </Modal>
          </>
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
