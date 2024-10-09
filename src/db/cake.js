"use server"

import createSupabase from "@/supabase"
import { getUserInfoFromCookie } from "@/utils/cookie"
import { T_CAKES } from "@/constants"

export const createCake = async (data) => {
  if (!data?.event_id) {
    return {
      success: false,
      message: "이벤트 아이디가 없어서 케이크를 선물할 수 없어요",
    }
  }

  const sender_id = getUserInfoFromCookie()?.id
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

export async function getCakeTotalCount(event_id) {
  const supabase = createSupabase()
  const { count } = await supabase
    .from(T_CAKES)
    .select("*", { count: "exact", head: true })
    .eq("event_id", event_id)
  return count
}

export const getCakesWithPagination = async ({
  event_id,
  page = 1,
  limit = 9,
} = {}) => {
  const supabase = createSupabase()

  const start = (parseInt(page) - 1) * parseInt(limit)
  const end = start + parseInt(limit) - 1

  const { data, error } = await supabase
    .from(T_CAKES)
    .select(
      "id, sender_id, sender_name, message, cake_shape, cake_color, text_size, text_styles, text_color, text_align, text_font, outline_shape, outline_color, deco_shape, deco_color, created_at",
    )
    .eq("event_id", event_id)
    .order("created_at", { ascending: false })
    .range(start, end)

  if (error) {
    return {
      success: false,
      message: "케이크 조회 중 오류가 발생했어요",
    }
  }

  return {
    success: true,
    data,
  }
}
