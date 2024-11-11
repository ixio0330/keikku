"use server"

import { T_LEAVE_CATEGORIES } from "@/constants"
import createSupabase from "@/supabase"

export const getLeaveCategories = async () => {
  const supabase = createSupabase()

  const { data, error } = await supabase
    .from(T_LEAVE_CATEGORIES)
    .select("id , description, enable_description")
    .order("id")

  if (error) {
    return {
      success: false,
      message: "카테고리 목록을 가져오지 못했어요 새로고침을 해주세요",
    }
  }

  return {
    success: true,
    data: data.map(({ id, description, enable_description }) => ({
      value: id,
      name: description,
      enable_description: enable_description,
    })),
  }
}
