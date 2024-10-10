import { atom, useAtom } from "jotai"

import { getCakesWithPagination, getCakeTotalCount } from "@/db/cake"

const activeCakesAtom = atom({
  currentPage: 1,
  page: {
    1: null,
  },
  totalPages: 0,
  totalCakes: 0,
  loading: true,
  pageSize: 9,
})

export default function useActiveCakes() {
  const [{ currentPage, page, totalPages, loading, pageSize }, setActiveCakes] =
    useAtom(activeCakesAtom)

  // 페이지 총 개수 조회
  const fetchTotalPages = async (event_id) => {
    if (totalPages !== 0) {
      return
    }

    try {
      const count = await getCakeTotalCount(event_id)
      setActiveCakes((prev) => ({
        ...prev,
        totalPages: Math.ceil(count / pageSize),
        totalCakes: count,
      }))
    } catch (err) {
      window.alert(err.data)
    }
  }

  // 케이크 조회
  const fetchActiveCakes = async (event_id) => {
    if (page[currentPage]) {
      return
    }

    if (!loading) {
      setActiveCakes((prev) => ({
        ...prev,
        loading: true,
      }))
    }

    try {
      const { data } = await getCakesWithPagination({
        event_id,
        page: currentPage,
        limit: pageSize,
      })
      setActiveCakes((prev) => ({
        ...prev,
        page: {
          ...prev.page,
          [currentPage]: data,
        },
      }))
    } catch (err) {
      window.alert(err.data)
    } finally {
      setActiveCakes((prev) => ({
        ...prev,
        loading: false,
      }))
    }
  }

  // 현재 페이지 업데이트
  const setCurrentPage = (currentPage) => {
    setActiveCakes((prev) => ({
      ...prev,
      currentPage,
    }))
  }

  // 상태 초기화
  const resetActiveCakes = () => {
    setActiveCakes({
      currentPage: 1,
      page: {
        1: null,
      },
      totalPages: 0,
      loading: true,
      pageSize: 10,
    })
  }

  // 케이크 추가
  const addNewCake = (newCake) => {
    setActiveCakes((prev) => {
      const newTotalCakes = prev.totalCakes + 1
      const newTotalPages = Math.ceil(newTotalCakes / pageSize)

      const allCakes = [newCake].concat(...Object.values(prev.page))
      const newPages = {
        1: allCakes.slice(0, pageSize),
      }

      return {
        totalCakes: newTotalCakes,
        totalPages: newTotalPages,
        currentPage: 1,
        page: newPages,
      }
    })
  }

  return {
    page,
    currentPage,
    totalPages,
    loading,
    setCurrentPage,
    fetchActiveCakes,
    fetchTotalPages,
    resetActiveCakes,
    addNewCake,
  }
}
