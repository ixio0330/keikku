"use client"

import Link from "next/link"
import { useState } from "react"

export default function AgreementCheck() {
  const [checkAll, setCheckAll] = useState(false)
  const [checkAge, setCheckAge] = useState(false)
  const [checkTerms, setCheckTerms] = useState(false)

  const handleCheckAll = () => {
    const newValue = !checkAll
    setCheckAll(newValue)
    setCheckAge(newValue)
    setCheckTerms(newValue)
  }

  const handleCheckAge = () => {
    const newValue = !checkAge
    setCheckAge(newValue)
    if (!newValue || !checkTerms) {
      setCheckAll(false)
    } else {
      setCheckAll(true)
    }
  }

  const handleCheckTerms = () => {
    const newValue = !checkTerms
    setCheckTerms(newValue)
    if (!newValue || !checkAge) {
      setCheckAll(false)
    } else {
      setCheckAll(true)
    }
  }
  return (
    <div className="flex flex-col space-y-2 text-xs [&>label]:flex [&>label]:items-center">
      <label>
        <input
          type="checkbox"
          className="accent-primary"
          checked={checkAll}
          onChange={handleCheckAll}
          required
        />
        <span className="ml-1">전체 동의</span>
      </label>
      <hr />
      <label>
        <input
          type="checkbox"
          className="accent-primary"
          checked={checkAge}
          onChange={handleCheckAge}
          required
        />
        <span className="mx-1 text-red-500">(필수)</span>
        14세 이상입니다.
      </label>
      <label>
        <input
          type="checkbox"
          className="accent-primary"
          checked={checkTerms}
          onChange={handleCheckTerms}
          required
        />
        <span className="mx-1 text-red-500">(필수)</span>
        <Link
          href="https://equal-dragon-59f.notion.site/12154d562f878042b8f7f4326125d9a1"
          target="_blank"
          className="mr-1 text-stone-700 underline"
        >
          이용약관
        </Link>
        및
        <Link
          href="https://equal-dragon-59f.notion.site/12154d562f87803d935ec73d7e262205"
          target="_blank"
          className="ml-1 text-stone-700 underline"
        >
          개인정보처리방침
        </Link>
        에 동의합니다.
      </label>
    </div>
  )
}
