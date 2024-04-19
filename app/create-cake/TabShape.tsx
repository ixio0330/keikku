'use client'

import { useState } from 'react'

export default function TabShape() {
  const [cakeColor, setCakeColor] = useState('#fff');

  return (
    <div className="flex flex-col space-y-10">
      {/* 케이크 틀 */}
      <div className="m-auto border rounded-2xl w-72 h-72 bg-[#FFF8EB] flex justify-center items-center">
        <svg width="240" height="165" viewBox="0 0 240 165" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      </div>

      {/* 모양 */}
      <div>
        <h2 className="font-bold text-lg">모양</h2>
        <ul className="flex">
          <li className="border rounded-2xl w-24 h-24"></li>
        </ul>
      </div>

      {/* 색상 */}
      <div>
        <h2 className="font-bold text-lg">색상</h2>
        <ul className="flex">
          <li className="border rounded-full w-7 h-7"></li>
        </ul>
      </div>
    </div>
    
  )
}