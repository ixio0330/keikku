"use client"

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
        <span className="text-red-500 mx-1">(필수)</span>
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
        <span className="text-red-500 mx-1">(필수)</span>
        이용약관 및 개인정보 수집 이용에 동의합니다.
      </label>
    </div>
  )
}
