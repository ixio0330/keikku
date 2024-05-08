'use client'

import { ChangeEvent, useState } from 'react'
import Image from 'next/image'

const cakeColors = [
  { color: '#fff', className: 'bg-white' },
  { color: '#CE8FFF', className: 'bg-[#CE8FFF]' },
  { color: '#EE9998', className: 'bg-[#EE9998]' },
  { color: '#98C5E8', className: 'bg-[#98C5E8]' },
  { color: '#86D180', className: 'bg-[#86D180]' },
  { color: '#FFC416', className: 'bg-[#FFC416]' },
];

type CakeShape = 'circle' | 'rectangle'

const getShapeStyle = (isSelected: boolean) => isSelected ? "border-[#175428] bg-[#E6F6F4]" : "border-gray-300 bg-white";
const getShapeCakeStyle = (isSelected: boolean) => isSelected ? "bg-white" : "bg-gray-300";
const getColorStyle = (isSelected: boolean) => isSelected ? "border-[#175428]" : "border-transparent";

export default function TabShape({ onClickNext }: { onClickNext: () => void }) {
  const [cakeColor, setCakeColor] = useState('#fff');
  const updateCakeColor = (color: string) => {
    setCakeColor(color);
  };

  const [cakeShape, setCakeShape] = useState<CakeShape>('circle');
  const getCakeFrame = (shape: CakeShape) => {
    switch (shape) {
      case 'circle':
        return <svg width="240" height="165" viewBox="0 0 240 165" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_548_593)">
        <path d="M6 33.6846H233.5V138.038C233.5 143.153 176.347 157.581 134.092 158.068C68.0759 158.828 6 142.398 6 132.598V33.6846Z" fill={cakeColor}/>
        </g>
        <g filter="url(#filter1_d_548_593)">
        <ellipse cx="119.75" cy="33.6848" rx="113.75" ry="28.6848" fill={cakeColor}/>
        </g>
        <defs>
        <filter id="filter0_d_548_593" x="0" y="27.6846" width="239.5" height="136.409" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset/>
        <feGaussianBlur stdDeviation="3"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.429606 0 0 0 0 0.429606 0 0 0 0 0.429606 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_548_593"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_548_593" result="shape"/>
        </filter>
        <filter id="filter1_d_548_593" x="1" y="0" width="237.5" height="67.3696" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset/>
        <feGaussianBlur stdDeviation="2.5"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.620785 0 0 0 0 0.620785 0 0 0 0 0.620785 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_548_593"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_548_593" result="shape"/>
        </filter>
        </defs>
        </svg>
      case 'rectangle':
        return <svg width="240" height="148" viewBox="0 0 240 148" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_573_1008)">
          <rect x="7" y="44" width="226" height="98" rx="5" fill={cakeColor}/>
          </g>
          <g filter="url(#filter1_d_573_1008)">
          <path d="M13.2602 10.6153C13.6884 8.23333 15.7611 6.5 18.1813 6.5H223.177C225.66 6.5 227.766 8.32111 228.125 10.7773L233.164 45.2773C233.605 48.2944 231.266 51 228.217 51H11.979C8.86353 51 6.50667 48.1817 7.05792 45.1153L13.2602 10.6153Z" fill={cakeColor}/>
          </g>
          <defs>
          <filter id="filter0_d_573_1008" x="1" y="38" width="238" height="110" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset/>
          <feGaussianBlur stdDeviation="3"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.429606 0 0 0 0 0.429606 0 0 0 0 0.429606 0 0 0 0.25 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_573_1008"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_573_1008" result="shape"/>
          </filter>
          <filter id="filter1_d_573_1008" x="0.977539" y="0.5" width="238.24" height="56.5" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset/>
          <feGaussianBlur stdDeviation="3"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.429606 0 0 0 0 0.429606 0 0 0 0 0.429606 0 0 0 0.25 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_573_1008"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_573_1008" result="shape"/>
          </filter>
          </defs>
        </svg>
        
    }
  };

  const [customColor, setCustomColor] = useState('');
  const handleChangeCustomColor = (e: ChangeEvent<HTMLInputElement>) => {
    setCustomColor(e.target.value);
    setCakeColor(e.target.value);
  };

  return (
    <div className="flex flex-col space-y-10">
      {/* 케이크 틀 */}
      {/* TODO 테두리 크기 다른 탭이랑 똑같이 하면 어떨지 */}
      <div className="m-auto border rounded-2xl w-72 h-72 bg-[#FFF8EB] flex justify-center items-center">
        { getCakeFrame(cakeShape) }
      </div>

      {/* 모양 */}
      <div>
        <h2 className="font-bold text-lg">모양</h2>
        <ul className="mt-3 flex space-x-5">
          <li 
            className={`flex justify-center items-center border-2 rounded-2xl bg-white w-24 h-24 ${getShapeStyle(cakeShape === "circle")}`}
            onClick={() => setCakeShape("circle")}
          >
            <div className={`w-16 h-16 rounded-full ${getShapeCakeStyle(cakeShape === "circle")}`} />
          </li>
          <li 
            className={`flex justify-center items-center border-2 rounded-2xl bg-white w-24 h-24 ${getShapeStyle(cakeShape === "rectangle")}`}
            onClick={() => setCakeShape("rectangle")}
          >
            <div className={`w-16 h-16 rounded-2xl ${getShapeCakeStyle(cakeShape === "rectangle")}`} />
          </li>
        </ul>
      </div>

      {/* 색상 */}
      <div>
        <h2 className="font-bold text-lg">색상</h2>
        <ul className="flex w-full justify-between">
          {
            cakeColors.map(({ color, className }) => (
              <li
                key={color} 
                onClick={() => updateCakeColor(color)}
                className={`p-[2px] border-2 rounded-full ${getColorStyle(cakeColor === color)}`}
              >
                <div className={`rounded-full w-7 h-7 border ${className}`}/>
              </li>
            ))
          }
          <li className={`relative border-2 rounded-full p-[2px] ${getColorStyle(cakeColor === customColor)}`}>
            {
              !customColor && cakeColor !== customColor && 
              <Image 
                width={28}
                height={28}
                alt="사용자 정의 색상"
                src="/custom-color.png"
                className="w-7 h-7"
              />
            }
            {
              customColor ? 
              <div className="relative z-20 border w-7 h-7 rounded-full overflow-hidden">
                <input 
                  className="bg-white h-10 absolute -top-2 -left-2" type="color"
                  onChange={handleChangeCustomColor} 
                />
              </div> :
              <div className="opacity-0 absolute top-0 left-0 z-20 border w-7 h-7 rounded-full overflow-hidden">
                <input 
                  className="bg-white h-10 absolute -top-2 -left-2" type="color"
                  onChange={handleChangeCustomColor} 
                />
              </div>
            }
          </li>
        </ul>
      </div>

      {/* 버튼 */}
      <div className="flex w-full absolute bottom-0 left-0 py-4">
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