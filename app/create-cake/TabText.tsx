'use client'

import Image from "next/image";
import { useState } from 'react'

const editorList = [
  {
    src: "/bold.png",
    alt: "볼드체",
    type: "bold",
  },
  {
    src: "/underline.png",
    alt: "밑줄",
    type: "underline",
  },
  {
    src: "/italic.png",
    alt: "기울이기",
    type: "italic",
  },
  {
    src: "/align-left.png",
    alt: "왼쪽 정렬",
    type: "align-left",
  },
  {
    src: "/align-center.png",
    alt: "가운데 정렬",
    type: "align-center",
  },
  {
    src: "/align-right.png",
    alt: "오른쪽 정렬",
    type: "align-right",
  },
];

const isInclude = (isInclude: boolean) => isInclude ? "bg-gray-400" : "bg-white";

export default function TabText({ onClickPrev, onClickNext }: { onClickPrev: () => void, onClickNext: () => void }) {
  const [ editor, setEditor ] = useState<Set<string>>(new Set());

  const addEditorItem = (type: string) => {
    if (editor.has(type)) {
      const newEditorItems = new Set(editor);
      newEditorItems.delete(type)
      setEditor(newEditorItems);
    } else {
      const newEditorItems = new Set(editor);
      newEditorItems.add(type);
      setEditor(newEditorItems);
    }
  }

  return (
    <div className="flex flex-col space-y-10">
      <div className="m-auto border rounded-2xl w-80 h-80 bg-[#FFF8EB] flex justify-center items-center">
        <div className="w-64 h-64 rounded-full bg-white" />
      </div>
      <section>
        <h2 className="font-bold text-lg">모양</h2>
        <ul className="py-3 flex justify-between">
          {
            editorList.map(({ src, alt, type }) => (
              <li 
                key={type}
                className={`${isInclude(editor.has(type))}`}
                onClick={() => addEditorItem(type)}
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
      </section>
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