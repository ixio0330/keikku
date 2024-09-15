"use client"

// store
import useCake from "@/stores/cake"

// component
import Tab from "../Tab"

export default function CreateCakeOutlinePage() {
  const { cake } = useCake()

  return (
    <>
      <Tab currentTab="테두리" />

      <section></section>
    </>
  )
}
