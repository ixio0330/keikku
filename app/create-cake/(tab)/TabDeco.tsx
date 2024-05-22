import CakeFrame from '../(components)/CakeFrame';
import ColorList from "../(components)/ColorList";
import ShapeList from "../(components)/ShapeList";
import { useCreateCakeContext, cakeShapeStyle, defaultColors } from '@/context/useCreateCake';

export default function TabDeco({ onClickPrev, onClickNext }: { onClickPrev: () => void, onClickNext: () => void }) {
  const { cakeShape, cakeColor, decoColor, setDecoColor, decoShapeList, getOutlineStyle, getDecoStyle } = useCreateCakeContext();

  return (
    <div className="flex flex-col space-y-10">
      {/* 케이크 틀 */}
      <CakeFrame>
        <div 
          className={`${cakeShapeStyle[cakeShape]}`} 
          style={{ ...cakeShapeStyle[cakeShape], backgroundColor: cakeColor }}
        />
        { getOutlineStyle() }
        { getDecoStyle() }
      </CakeFrame>

      {/* 모양 */}
      <div>
        <ShapeList
          title="모양"
          items={decoShapeList}
        />
      </div>

      {/* 색상 */}
      <div>
        {
          // deco !== "line" && deco !== "sprinkles" && deco !== "flower" && deco !== "carrot" &&
          <ColorList 
            items={defaultColors} 
            selectColor={decoColor} 
            setColor={setDecoColor}
          />
        }
      </div>

      <div className="flex">
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