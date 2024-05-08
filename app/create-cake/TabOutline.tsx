export default function TabText({ onClickPrev, onClickNext }: { onClickPrev: () => void, onClickNext: () => void }) {
  return (
    <div className="flex flex-col space-y-10">
      <div className="m-auto border rounded-2xl w-80 h-80 bg-[#FFF8EB] flex justify-center items-center">
        
      </div>
      <div className="flex w-full absolute bottom-0 left-0 py-4">
        <button
          onClick={onClickPrev} 
          className='w-3/5 text-[#175428] font-semibold border border-[#175428] rounded-lg box-border p-2 bg-white font-xs mr-4'
        >
          이전
        </button>
        <button 
          onClick={onClickNext}
          className='w-full text-white font-semibold border border-[#175428] rounded-lg box-border p-2 bg-[#175428] font-xs'
        >
          다음
        </button>
      </div>
    </div>
  )
}