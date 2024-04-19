'use client'

import { BsChevronLeft } from 'react-icons/bs'
import { useState } from 'react'
import TabShape from './TabShape'

type TabList = 'shape' | 'text' | 'outline' | 'deco'
const tabList: { id: TabList; text: string }[] = [
  {
    id: 'shape',
    text: '모양'
  },
  {
    id: 'text',
    text: '텍스트'
  },
  {
    id: 'outline',
    text: '테두리'
  },
  {
    id: 'deco',
    text: '데코'
  },
];


export default function CreateCake() {
  const [currentTab, setCurrentTab] = useState<TabList>('shape');
  const updateCurrentTab = (tab: TabList) => {
    setCurrentTab(tab);
  };
  const getTabTextColor = (result: boolean) => result ? 'text-[#175428] border-[#175428]' : 'text-gray-400 border-transparent';

  const [shape, setShape] = useState('');
  const [text, setText] = useState('');
  const [outline, setOutline] = useState('');
  const [deco, setDeco] = useState('');

  const getTabContent = () => {
    switch (currentTab) {
      case 'shape':
        return <TabShape />
      case 'text':
        return <div>텍스트 선택 컴포넌트</div>
      case 'outline':
        return <div>테두리 선택 컴포넌트</div>
      case 'deco':
        return <div>데코 선택 컴포넌트</div>
    }
  };

  return (
    <div className='w-96 px-3 m-auto border-box min-h-screen relative'>
      <header className='py-3.5 flex justify-between items-center'>
        <BsChevronLeft />
        <h1 className='text-lg font-bold'>케이크 제작</h1>
        <span></span>
      </header>
      <section>
        <ul className='py-3.5 flex justify-between items-center text-lg font-bold text-gray-400'>
          {
            tabList.map(({ id, text }) => (
              <li 
                className={`${getTabTextColor(currentTab === id)} w-full text-center border-b-2 cursor-pointer`}
                key={id}
                onClick={() => updateCurrentTab(id)}
              >
                {text}
              </li>
            ))
          }
        </ul>
        {getTabContent()}
        <div className="flex w-full absolute bottom-0 left-0 py-4">
          <button className='w-3/5 text-[#175428] font-semibold border border-[#175428] rounded-lg box-border p-2 bg-white font-xs mr-4'>
            이전
          </button>
          <button className='w-full text-white font-semibold border border-[#175428] rounded-lg box-border p-2 bg-[#175428] font-xs'>
            다음
          </button>
        </div>
      </section>
    </div>
  )
}
