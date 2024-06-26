'use client'

import CakeFrame from '../(components)/CakeFrame';
import ShapeList from '../(components)/ShapeList';
import ColorList from '../(components)/ColorList';
import { useCreateCakeContext, cakeShapeStyle, defaultColors } from '@/context/useCreateCake';

export default function TabOutline({ onClickPrev, onClickNext }: { onClickPrev: () => void, onClickNext: () => void }) {
  const { cakeShape, cakeColor, outlineColor, setOutlineColor, getOutlineStyle, outlineShapeList } = useCreateCakeContext();

  return (
    <div className="flex flex-col space-y-10">
      <CakeFrame>
        <div 
          className={`${cakeShapeStyle[cakeShape]}`} 
          style={{ ...cakeShapeStyle[cakeShape], backgroundColor: cakeColor }}
        />
        { getOutlineStyle() }
      </CakeFrame>

      {/* 모양 */}
      <div>
        <ShapeList 
          title="모양"
          items={outlineShapeList}
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
      <div className="flex pb-5">
        <button
          onClick={onClickPrev} 
          className='w-3/5 text-primary font-semibold border border-primary rounded-lg box-border p-2 bg-white font-xs mr-4'
        >
          이전
        </button>
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