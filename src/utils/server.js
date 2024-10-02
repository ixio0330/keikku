import { cookies } from "next/headers"

export const getUriByCookie = () => {
  const cookieStore = cookies()
  return cookieStore.get("uri")?.value ?? null
}

export const getUserIdByCookie = () => {
  const cookieStore = cookies()
  return cookieStore.get("user")?.value ?? null
}
