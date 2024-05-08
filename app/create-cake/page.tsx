'use client'

import { BsChevronLeft } from 'react-icons/bs'
import { useState } from 'react'
import TabShape from './TabShape'
import TabText from './TabText'
import TabOutline from './TabOutline'
import TabDeco from './TabDeco'

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

  const getTabContent = () => {
    switch (currentTab) {
      case 'shape':
        return <TabShape onClickNext={() => setCurrentTab("text")} />
      case 'text':
        return <TabText onClickPrev={() => setCurrentTab("shape")} onClickNext={() => setCurrentTab("outline")} />
      case 'outline':
        return <TabOutline onClickPrev={() => setCurrentTab("text")} onClickNext={() => setCurrentTab("deco")} />
      case 'deco':
        return <TabDeco onClickPrev={() => setCurrentTab("outline")} onClickNext={() => console.log("완성!")} />
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
      </section>
    </div>
  )
}
