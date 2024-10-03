"use server"

import createSupabase from "@/supabase"
import { getUserIdFromCookie } from "@/utils/cookie"
import { T_CAKES } from "@/constants"

export const createCake = async (data) => {
  if (!data?.event_id) {
    return {
      success: false,
      message: "이벤트 아이디가 없어서 케이크를 선물할 수 없어요",
    }
  }

  const sender_id = getUserIdFromCookie()
  if (String(data?.sender_name) === "" && !sender_id) {
    return { success: false, message: "이름을 입력하거나 로그인을 해주세요" }
  }

  const supabase = createSupabase()

  const { error: eventError } = await supabase
    .from(T_CAKES)
    .insert([{ ...data, sender_id }])
  if (eventError) {
    console.log(eventError)
    return {
      success: false,
      message: "오류가 발생했어요. 잠시후 다시 시도해주세요",
    }
  }

  return { success: true }
}
