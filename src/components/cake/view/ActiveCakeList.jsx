"use client"
import { useEffect } from "react"

import Image from "next/image"

import useActiveCakes from "@/stores/activeCakes"

import Cake from "./Cake"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"

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
    <div className="relative">
      <Image
        width={392}
        height={413}
        alt="쇼케이스 사진"
        src="/main/showcase.png"
      />

      <ul className="absolute left-0 top-0 grid grid-cols-3 gap-5 px-6 py-4">
        {page[currentPage]?.map((props, idx) => (
          <Cake key={`cake-${props.id}-${idx}`} cake={props} />
        ))}
      </ul>

      {eventId && (
        <div className="flex justify-center items-center pt-5">
          <div className="bg-primary text-white flex items-center rounded-full p-1 text-sm">
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
    </div>
  )
}
