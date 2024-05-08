export default function TabText() {
  return (
    <div className="flex w-full absolute bottom-0 left-0 py-4">
      <button className='w-3/5 text-[#175428] font-semibold border border-[#175428] rounded-lg box-border p-2 bg-white font-xs mr-4'>
        이전
      </button>
      <button className='w-full text-white font-semibold border border-[#175428] rounded-lg box-border p-2 bg-[#175428] font-xs'>
        다음
      </button>
    </div>
  )
}