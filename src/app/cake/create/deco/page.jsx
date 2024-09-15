"use client"

// store
import useCake from "@/stores/cake"

// component
import Tab from "../Tab"

export default function CreateCakeDecoPage() {
  const { cake } = useCake()

  return (
    <>
      <Tab currentTab="데코" />

      <section></section>
    </>
  )
}
