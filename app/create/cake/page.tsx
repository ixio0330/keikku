'use client'

import { useState } from 'react'

import CreateLayout from '@/components/layout/CreateLayout'
import TabShape from './(tab)/TabShape'
import TabText from './(tab)/TabText'
import TabOutline from './(tab)/TabOutline'
import TabDeco from './(tab)/TabDeco'
import { CreateCakeProvider } from '@/context/useCreateCake'

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

export default function CreateCakePage() {
  const [currentTab, setCurrentTab] = useState<TabList>('shape');
  const updateCurrentTab = (tab: TabList) => {
    setCurrentTab(tab);
  };
  const getTabTextColor = (result: boolean) => result ? 'text-primary border-primary' : 'text-gray-400 border-transparent';

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
    <CreateCakeProvider>
      <CreateLayout title="케이크 제작">
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
      </CreateLayout>
    </CreateCakeProvider>
  )
}
