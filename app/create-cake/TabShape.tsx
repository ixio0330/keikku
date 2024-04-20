'use client'

import { ChangeEvent, useState } from 'react'
import Image from 'next/image'
import { BsCheck2 } from 'react-icons/bs'

const cakeColors = [
  { color: '#fff', className: 'bg-white' },
  { color: '#CE8FFF', className: 'bg-[#CE8FFF]' },
  { color: '#EE9998', className: 'bg-[#EE9998]' },
  { color: '#98C5E8', className: 'bg-[#98C5E8]' },
  { color: '#86D180', className: 'bg-[#86D180]' },
  { color: '#FFC416', className: 'bg-[#FFC416]' },
];

type CakeShape = 'circle' | 'rectangle'

export default function TabShape() {
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
        <filter id="filter0_d_548_593" x="0" y="27.6846" width="239.5" height="136.409" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset/>
        <feGaussianBlur stdDeviation="3"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.429606 0 0 0 0 0.429606 0 0 0 0 0.429606 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_548_593"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_548_593" result="shape"/>
        </filter>
        <filter id="filter1_d_548_593" x="1" y="0" width="237.5" height="67.3696" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
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
        return null
    }
  };

  const [customColor, setCustomColor] = useState('');
  const handleChangeCustomColor = (e: ChangeEvent<HTMLInputElement>) => {
    setCustomColor(e.target.value);
    setCakeColor(e.target.value);
  }

  return (
    <div className="flex flex-col space-y-10">
      {/* 케이크 틀 */}
      <div className="m-auto border rounded-2xl w-72 h-72 bg-[#FFF8EB] flex justify-center items-center">
        { getCakeFrame(cakeShape) }
      </div>

      {/* 모양 */}
      <div>
        <h2 className="font-bold text-lg">모양</h2>
        <ul className="flex">
          <li className="border rounded-2xl bg-white w-24 h-24"></li>
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
                className={`rounded-full w-7 h-7 border ${className} flex justify-center items-center`}>
                {
                  color === cakeColor && <BsCheck2 size={20} />
                }
              </li>
            ))
          }
          <li className="relative">
            {
              customColor ? 
              <div className="relative z-20 border w-7 h-7 rounded-full overflow-hidden">
                <input 
                  className="bg-white h-10 absolute -top-2 -left-2" type="color"
                  onChange={handleChangeCustomColor} 
                />
              </div> :
              <div className="opacity-0 relative z-20 border w-7 h-7 rounded-full overflow-hidden">
                <input 
                  className="bg-white h-10 absolute -top-2 -left-2" type="color"
                  onChange={handleChangeCustomColor} 
                />
            </div>
            }
            {
              !customColor && cakeColor !== customColor && <Image 
                width={28}
                height={28}
                alt="사용자 정의 색상"
                src="/custom-color.png"
                className="absolute top-0 left-0 z-10"
              />
            }
            {
              cakeColor === customColor && <BsCheck2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30" size={20} />
            }
          </li>
        </ul>
      </div>
    </div>
    
  )
}