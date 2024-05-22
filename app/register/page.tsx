'use client'

import { useState } from 'react'

export default function Register() {
  const [checkAll, setCheckAll] = useState(false);
  const [checkAge, setCheckAge] = useState(false);
  const [checkTerms, setCheckTerms] = useState(false);

  const handleCheckAll = () => {
    const newValue = !checkAll;
    setCheckAll(newValue);
    setCheckAge(newValue);
    setCheckTerms(newValue);
  };

  const handleCheckAge = () => {
    const newValue = !checkAge;
    setCheckAge(newValue);
    if (!newValue || !checkTerms) {
      setCheckAll(false);
    } else {
      setCheckAll(true);
    }
  };

  const handleCheckTerms = () => {
    const newValue = !checkTerms;
    setCheckTerms(newValue);
    if (!newValue || !checkAge) {
      setCheckAll(false);
    } else {
      setCheckAll(true);
    }
  };

  return (
    <section className='bg-background'>
      <div className='w-96 min-h-screen m-auto px-5 flex flex-col justify-between'>
        <div className='pt-12'>
          <h1 className='mb-9 text-2xl font-bold'>
            선물해 줄 친구에게 <br/>
            당신의 이름을 <br/>
            알려주세요
          </h1>
          <form>
            <input className='w-full text-sm bg-transparent outline-none border-b border-primary py-2 mb-4' type='text' placeholder='닉네임' />
            <div className='flex flex-col space-y-2 text-xs [&>label]:flex [&>label]:items-center'>
              <label>
                <input 
                  type='checkbox' 
                  className='accent-primary'
                  checked={checkAll}
                  onChange={handleCheckAll}
                />
                <span className='ml-1'>전체 동의</span>
              </label>
              <hr />
              <label>
                <input 
                  type='checkbox' 
                  className='accent-primary'
                  checked={checkAge}
                  onChange={handleCheckAge}
                />
                <span className='text-red-500 mx-1'>(필수)</span> 
                14세 이상입니다.
              </label>
              <label>
                <input 
                  type='checkbox' 
                  className='accent-primary'
                  checked={checkTerms}
                  onChange={handleCheckTerms}
                />
                <span className='text-red-500 mx-1'>(필수)</span>
                이용약관 및 개인정보 수집 이용에 동의합니다.
              </label>
            </div>
          </form>
        </div>
        <button className='w-full text-white font-semibold border border-primary rounded-lg box-border p-2 bg-primary font-xs mb-6'>
          케이크 만들러 가기
        </button>
      </div>
    </section>
  )
}
