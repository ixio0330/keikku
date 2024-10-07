import { cookies } from "next/headers"

export const setUriInCookie = (uri = "") => {
  try {
    const cookieStore = cookies()
    cookieStore.set("keikku-uri", uri)
    return true
  } catch (err) {
    return false
  }
}

export const getUriFromCookie = () => {
  try {
    const cookieStore = cookies()
    return cookieStore.get("keikku-uri")?.value ?? null
  } catch (err) {
    return null
  }
}

export const setUserIdInCookie = (id = 0) => {
  try {
    const cookieStore = cookies()
    cookieStore.set("keikku-user", id)
    return true
  } catch (err) {
    return false
  }
}

export const getUserIdFromCookie = () => {
  try {
    const cookieStore = cookies()
    return cookieStore.get("keikku-user")?.value ?? null
  } catch (err) {
    return false
  }
}

export const resetCookie = () => {
  try {
    const cookieStore = cookies()
    cookieStore.delete("keikku-uri")
    cookieStore.delete("keikku-user")
    return true
  } catch (err) {
    return false
  }
}
