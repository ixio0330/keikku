import Image from 'next/image'
import { ChangeEvent, useState } from 'react';

const getColorStyle = (isSelected: boolean) => isSelected ? "border-primary" : "border-transparent";

export interface ColorListProps {
  items: { color: string; }[];
  selectColor: string;
  setColor: React.Dispatch<React.SetStateAction<string>>;
}

export default function ColorList({items, selectColor, setColor}: ColorListProps) {
  const isUsedCustomColor = !items.find(({ color }) => color === selectColor);
  const [customColor, setCustomColor] = useState(isUsedCustomColor ? selectColor : '');
  const handleChangeCustomColor = (e: ChangeEvent<HTMLInputElement>) => {
    setCustomColor(e.target.value);
    setColor(e.target.value);
  };

  return (
    <>
      <h2 className="font-bold text-lg">색상</h2>
      <ul className="mt-3 flex w-full justify-between">
        {
          items.map(({ color }: { color: string; }) => (
            <li
              key={color} 
              onClick={() => setColor(color)}
              className={`p-[2px] border-2 rounded-full ${getColorStyle(selectColor === color)}`}
            >
              <div className="rounded-full w-7 h-7 border" style={{ backgroundColor: color }} />
            </li>
          ))
        }
        <li className={`relative border-2 rounded-full p-[2px] ${getColorStyle(selectColor === customColor)}`}>
          {
            !customColor && selectColor !== customColor && 
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
                defaultValue={customColor}
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
    </>
  )
}