'use client'

import CakeFrame from './CakeFrame';
import ShapeList from './ShapeList';
import ColorList from './ColorList';
import CreamOne from "./(outline)/CreamOne";
import { useCreateCakeContext, CakeOutline } from '@/context/useCreateCake';
import { defaultColors } from "./colors";

export default function TabOutline({ onClickPrev, onClickNext }: { onClickPrev: () => void, onClickNext: () => void }) {
  const { cakeColor, outline, setOutline, outlineColor, setOutlineColor } = useCreateCakeContext();
  const getOutlineSvg = (outline: CakeOutline) => {
    switch (outline) {
      case "cream1":
        return <CreamOne color={outlineColor} />
      case "cream2":
        return null
      case "cream3":
        return null
    }
  };

  return (
    <div className="flex flex-col space-y-10">
      <CakeFrame>
        <div className={`w-64 h-64 rounded-full ${cakeColor === 'white' ? 'bg-white' : `bg-[${cakeColor}]`}`} />
        { getOutlineSvg(outline) }
      </CakeFrame>

      {/* 모양 */}
      <div>
        <ShapeList 
          title="모양"
          items={[
            { 
              onClick: () => setOutline("cream1"),
              isSelected: outline === "cream1",
              Item: () => <svg width="98" height="86" viewBox="0 0 98 86" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50.8594 8.07531C50.9154 15.4743 55.8123 32.5047 74.9519 41.4348C94.0915 50.3649 90.8144 56.2428 83.1981 61.8197C78.4904 63.3485 84.0501 71.5691 64.9302 72.4827C57.1325 74.2708 55.742 77.0903 42.2118 73.3866C28.2801 77.1129 14.0888 67.9428 7.97476 58.2397C-5.91325 36.1988 30.7779 15.6131 50.8594 8.07531Z" fill="#FFFEF6"/>
                <path d="M50.2267 8.29579C21.8825 29.1132 33.6919 60.3069 42.6328 73.5097C31.6131 74.3015 20.5258 52.7293 23.7718 38.9615C28.893 17.2402 50.6615 6.45149 50.2267 8.29579Z" fill="#F4F1DA"/>
                <path d="M50.9845 8.97493C32.1258 33.3362 52.3459 59.2251 65.2429 72.2783C55.3447 74.0902 39.173 58.2297 37.3318 43.4985C34.4268 20.2573 50.7378 7.00158 50.9845 8.97493Z" fill="#F4F1DA"/>
                <path d="M51.3132 9.46423C40.8787 36.2983 66.0125 50.5228 81.977 63.1691C79.8429 62.6809 65.6023 63.897 58.2707 54.9022C38.4613 30.5987 50.4957 7.42417 51.3132 9.46423Z" fill="#F4F1DA"/>
              </svg>
            },
            { 
              onClick: () => setOutline("cream2"),
              isSelected: outline === "cream2",
              Item: () => <svg width="69" height="68" viewBox="0 0 69 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M33.0001 0.5C37.0001 1.5 37.0001 2.5 39.0001 4C41.0001 5.5 70.5001 22.5 68.2098 46.4372C65.7308 72.3471 4 75.5 0.500005 47C-2.99999 18.5 26.9348 11.1266 32.5001 6.5C38.0653 1.8734 33.0001 0.5 33.0001 0.5Z" fill="#D9D9D9"/>
              </svg>
            },
            { 
              onClick: () => setOutline("cream3"),
              isSelected: outline === "cream3",
              Item: () => <svg width="127" height="58" viewBox="0 0 127 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M65.8478 11.2394C72.3974 -2.56153 81.9294 -1.33295 92.4556 2.76055C96.2028 5.58455 106.198 0.71385 113.8 12.9943C118.937 17.786 123.449 18.2574 122.572 27.614C132.513 36.0934 123.991 46.7166 112.046 52.1744C84.9118 64.5719 7.70996 53.5007 0 39.5C6.7304 38.759 37.4963 30.9305 43.5 21.5C46.9728 16.0449 63.4476 16.297 65.8478 11.2394Z" fill="#F3F4F5"/>
                <path d="M20.7264 36.2076C66.1477 44.026 100.246 26.3368 116.488 15.673C122.856 21.7404 103.298 35.021 80.4939 38.8459C44.516 44.8805 17.6717 36.7199 20.7264 36.2076Z" fill="#DADCDF"/>
                <path d="M14.6587 34.5395C62.4164 35.3946 77.121 16.0941 92.4022 3.04532C92.3376 4.5268 99.2661 13.4344 87.0049 20.1237C53.876 38.1978 11.5852 35.5121 14.6587 34.5395Z" fill="#DADCDF"/>
                <path d="M14.7565 40.1864C58.0349 55.8068 103.208 43.0339 120.898 35C126.148 42.2203 95.967 53 72.9632 53C36.6704 53 11.675 40.1864 14.7565 40.1864Z" fill="#DADCDF"/>
              </svg>
            },
          ]}
        />
      </div>

      {/* 색상 */}
      <div>
        <ColorList 
          items={defaultColors} 
          selectColor={outlineColor} 
          setColor={setOutlineColor}
        />
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