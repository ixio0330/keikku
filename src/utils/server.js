import { cookies } from "next/headers"

export const getUriByCookie = () => {
  const cookieStore = cookies()
  return cookieStore.get("uri")?.value ?? null
}
