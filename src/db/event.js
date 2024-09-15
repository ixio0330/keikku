"use server"

import createSupabase from "@/supabase"
import { getUriByCookie } from "@/utils/server"
import { T_USERS, T_EVENTS } from "@/constants"

export const createEvent = async ({ name, description, date }) => {
  const uri = getUriByCookie()
  if (uri === null) {
    return { success: false, message: "로그인이 필요해요" }
  }

  const supabase = createSupabase()

  const { data: userData, error: userError } = await supabase
    .from(T_USERS)
    .select("id")
    .eq("uri", uri)
    .single()
  if (userError) {
    return { success: false, message: "존재하지 않는 사용자에요" }
  }

  const { error: eventError } = await supabase
    .from(T_EVENTS)
    .insert([{ user_id: userData.id, category_id: 1, name, description, date }])
  if (eventError) {
    return {
      success: false,
      message: "오류가 발생했어요 잠시후 다시 시도해주세요",
    }
  }

  return { success: true }
}
