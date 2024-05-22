'use client'

import CakeFrame from '../(components)/CakeFrame';
import ShapeList from '../(components)/ShapeList';
import ColorList from '../(components)/ColorList';
import { useCreateCakeContext, defaultColors } from '@/context/useCreateCake';

const getShapeCakeStyle = (isSelected: boolean) => isSelected ? "bg-white" : "bg-gray-300";

export default function TabShape({ onClickNext }: { onClickNext: () => void }) {
  const { cakeColor, setCakeColor, cakeShape, setCakeShape, getCakeFrame } = useCreateCakeContext();

  return (
    <div className="flex flex-col space-y-10">
      {/* 케이크 틀 */}
      <CakeFrame>
        { getCakeFrame() }
      </CakeFrame>

      {/* 모양 */}
      <div>
        <ShapeList 
          title="모양"
          items={[
            { 
              onClick: () => setCakeShape("circle"),
              isSelected: cakeShape === "circle",
              Item: () => <div className={`w-16 h-16 rounded-full ${getShapeCakeStyle(cakeShape === "circle")}`} />
            },
            { 
              onClick: () => setCakeShape("rectangle"),
              isSelected: cakeShape === "rectangle",
              Item: () => <div className={`w-16 h-16 rounded-2xl ${getShapeCakeStyle(cakeShape === "rectangle")}`} />
            },
          ]}
        />
      </div>

      {/* 색상 */}
      <div>
        <ColorList 
          items={defaultColors} 
          selectColor={cakeColor} 
          setColor={setCakeColor}
        />
      </div>

      {/* 버튼 */}
      <div>
        <button 
          onClick={onClickNext}
          className='w-full text-white font-semibold border border-primary rounded-lg box-border p-2 bg-primary font-xs'
        >
          다음
        </button>
      </div>
    </div>
    
  )
}