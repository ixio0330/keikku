'use client'

import Image from "next/image";
import { ChangeEvent, MouseEventHandler, useState } from 'react'

const editorList = [
  {
    src: "/bold.png",
    alt: "볼드체",
    value: "bold",
  },
  {
    src: "/underline.png",
    alt: "밑줄",
    value: "underline",
  },
  {
    src: "/italic.png",
    alt: "기울이기",
    value: "italic",
  },
  {
    src: "/align-left.png",
    alt: "왼쪽 정렬",
    value: "align-left",
  },
  {
    src: "/align-center.png",
    alt: "가운데 정렬",
    value: "align-center",
  },
  {
    src: "/align-right.png",
    alt: "오른쪽 정렬",
    value: "align-right",
  },
];
const fontStyleList = [
  {
    text: "고딕1 (한국어)",
    value: "gothic01-ko",
    className: "",
  },
  {
    text: "고딕2 (한국어)",
    value: "gothic02-ko",
    className: "",
  },
  {
    text: "손글씨1 (한국어)",
    value: "hand01-ko",
    className: "",
  },
  {
    text: "손글씨2 (한국어)",
    value: "hand02-ko",
    className: "",
  },
  {
    text: "고딕1 (영어)",
    value: "gothic01-en",
    className: "",
  },
  {
    text: "고딕2 (영어)",
    value: "gothic02-en",
    className: "",
  },
  {
    text: "손글씨1 (영어)",
    value: "hand01-en",
    className: "",
  },
  {
    text: "손글씨2 (영어)",
    value: "hand02-en",
    className: "",
  },
];
const textColors = [
  { color: '#fff', className: 'bg-white' },
  { color: '#1F2227', className: 'bg-[#1F2227]' },
  { color: '#61666C', className: 'bg-[#61666C]' },
  { color: '#950E0E', className: 'bg-[#950E0E]' },
  { color: '#175444', className: 'bg-[#175444]' },
  { color: '#001582', className: 'bg-[#001582]' },
];

const isInclude = (isInclude: boolean) => isInclude ? "border-[#175428]" : "border-transparent";
const getColorStyle = (isSelected: boolean) => isSelected ? "border-[#175428]" : "border-transparent";

export default function TabText({ onClickPrev, onClickNext }: { onClickPrev: () => void, onClickNext: () => void }) {
  const [ editor, setEditor ] = useState<Set<string>>(new Set());
  const addEditorItem = (value: string) => {
    if (editor.has(value)) {
      const newEditorItems = new Set(editor);
      newEditorItems.delete(value)
      setEditor(newEditorItems);
    } else {
      const newEditorItems = new Set(editor);
      newEditorItems.add(value);
      setEditor(newEditorItems);
    }
  }

  const [textColor, setCakeColor] = useState('#fff');
  const updateTextColor = (color: string) => {
    setCakeColor(color);
  };
  const [customColor, setCustomColor] = useState('');
  const handleChangeCustomColor = (e: ChangeEvent<HTMLInputElement>) => {
    setCustomColor(e.target.value);
    setCakeColor(e.target.value);
  };

  const [inputPosition, setInputPosition] = useState({ x: 0, y: 0 });
  const handleClickCake: MouseEventHandler<HTMLDivElement> = (e) => {
    const { clientX, clientY } = e.nativeEvent;
    setInputPosition({ x: clientX, y: clientY });
  };


  const [text, setText] = useState("");
  const updateText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const [fontSize, setFontSize] = useState(20);

  return (
    <div className="flex flex-col space-y-10">
      {/* 케이크 틀 */}
      <div className="m-auto border rounded-2xl w-80 h-80 bg-[#FFF8EB] flex justify-center items-center">
        <div 
          onClick={handleClickCake}
          className="relative w-64 h-64 rounded-full bg-[#B0D5FF] overflow-hidden" 
        >
          <textarea
            onClick={e => e.stopPropagation()}
            className={`w-auto absolute resize-none bg-white border-transparent outline-none focus:border-black`} style={{ left: inputPosition.x - 644, top: inputPosition.y - 152, fontSize }} 
          />
        </div>
      </div>
      
      {/* 서체 */}
      <div>
        <h2 className="font-bold text-lg">서체</h2>
        {/* 서체 / 사이즈 */}
        <ul className="flex justify-between items-center my-3">
          <li className="w-8/12">
            <select 
              className="bg-white border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-[#175428] focus:border-[#175428] block w-full p-2.5 outline-none"
              >
              {
                fontStyleList.map(({ text, value, className }) => (
                  <option key={`font-family-${value}`} value={value}>{text}</option>
                ))
              }
            </select>
          </li>
          <li className="w-3/12">
            <select 
              className="bg-white border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-[#175428] focus:border-[#175428] block w-full p-2.5 outline-none"
              value={fontSize}
              onChange={e => setFontSize(Number(e.target.value))}
            >
              {
                Array(11).fill(0).map((_, idx) => (
                  <option key={`font-size-${idx + 20}`} value={idx + 20}>{idx + 20}pt</option>
                ))
              }
            </select>
          </li>
        </ul>
        {/* 에디터 */}
        <ul className="mt-5 flex justify-between">
          {
            editorList.map(({ src, alt, value }) => (
              <li 
                key={value}
                className={`p-[6px] border-2 rounded-full ${isInclude(editor.has(value))}`}
                onClick={() => addEditorItem(value)}
              >
                <Image 
                  src={src}
                  alt={alt}
                  width={20} 
                  height={20} 
                  className="w-auto h-auto"
                />
              </li>
            ))
          }
        </ul>
      </div>

      {/* 색상  */}
      <div>
        <h2 className="font-bold text-lg">색상</h2>
        <ul className="mt-3 flex w-full justify-between">
          {
            textColors.map(({ color, className }) => (
              <li
                key={color} 
                onClick={() => updateTextColor(color)}
                className={`p-[2px] border-2 rounded-full ${getColorStyle(textColor === color)}`}
              >
                <div className={`rounded-full w-7 h-7 border ${className}`}/>
              </li>
            ))
          }
          <li className={`relative border-2 rounded-full p-[2px] ${getColorStyle(textColor === customColor)}`}>
            {
              !customColor && textColor !== customColor && 
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
                  className="bg-white h-10 absolute -top-2 -left-2" value="color"
                  onChange={handleChangeCustomColor} 
                />
              </div> :
              <div className="opacity-0 absolute top-0 left-0 z-20 border w-7 h-7 rounded-full overflow-hidden">
                <input 
                  className="bg-white h-10 absolute -top-2 -left-2" value="color"
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