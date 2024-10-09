import { cookies } from "next/headers"
import { genToken, getVerifyToken } from "@/libs/jwt"

export const setUserInfoInCookie = (userInfo) => {
  try {
    const token = genToken(userInfo)
    const cookieStore = cookies()
    cookieStore.set("keikku-token", token)
    return true
  } catch (err) {
    return false
  }
}

export const getUserInfoFromCookie = () => {
  try {
    const cookieStore = cookies()
    const token = cookieStore.get("keikku-token")?.value
    if (!token) {
      return null
    }
    return getVerifyToken(token)
  } catch (err) {
    return null
  }
}

export const resetCookie = () => {
  try {
    const cookieStore = cookies()
    cookieStore.delete("keikku-token")
    return true
  } catch (err) {
    return false
  }
}
