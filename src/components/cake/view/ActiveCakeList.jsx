"use client"
import { useEffect } from "react"

import useActiveCakes from "@/stores/activeCakes"

import Image from "next/image"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import Cake from "./Cake"

export default function ActiveCakeList({ eventId }) {
  const {
    fetchTotalPages,
    fetchActiveCakes,
    setCurrentPage,
    page,
    currentPage,
    totalPages,
  } = useActiveCakes()

  useEffect(() => {
    fetchTotalPages(eventId)
    fetchActiveCakes(eventId)
  }, [])

  useEffect(() => {
    fetchActiveCakes(eventId)
  }, [currentPage])

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  return (
    <section className="relative">
      <div className="relative flex flex-col items-center justify-center">
        <ul className="flex items-end justify-center">
          <Image width={61} height={94} alt="모자 사진" src="/main/cap01.png" />
          <Image width={56} height={96} alt="모자 사진" src="/main/cap02.png" />
          <Image
            width={61}
            height={109}
            alt="모자 사진"
            src="/main/cap03.png"
          />
          <Image width={92} height={92} alt="상자 사진" src="/main/box.png" />
          <Image
            width={79}
            height={155}
            alt="케이크 상태 사진"
            src="/main/status.png"
          />
          <Image
            width={38}
            height={72}
            alt="초 사진"
            src="/main/candle.png"
            className="ml-1"
          />
        </ul>
        <div className="relative">
          <Image
            width={392}
            height={413}
            alt="쇼케이스 사진"
            src="/main/showcase.png"
          />
          <ul className="absolute left-0 top-0 grid h-full w-full grid-cols-3 gap-5 px-6 py-4">
            {page[currentPage]?.map((props, idx) => (
              <Cake key={`cake-${props.id}-${idx}`} cake={props} />
            ))}
          </ul>
        </div>
      </div>

      {eventId && 0 < totalPages && (
        <div className="flex items-center justify-center pt-5">
          <div className="flex items-center rounded-full bg-primary p-1 text-sm text-white">
            <button
              className="p-1"
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
            >
              <IoIosArrowBack size={20} />
            </button>
            <p className="w-8 text-center">
              {currentPage}/{totalPages}
            </p>
            <button
              className="p-1"
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              <IoIosArrowForward size={20} />
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
