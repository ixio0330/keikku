"use client"

// store
import useCake from "@/stores/cake"

// component
import Tab from "../Tab"

export default function CreateCakeTextPage() {
  const { cake } = useCake()

  return (
    <>
      <Tab currentTab="텍스트" />

      <section></section>
    </>
  )
}
