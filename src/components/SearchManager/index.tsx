import { useState } from 'react';
import { RxMagnifyingGlass } from 'react-icons/rx';

export default function Search() {
  const [editMode, setEditMode] = useState(false);

  const handleEditMode = () => {
    setEditMode(!editMode);
  };

  return (
    <div
      role='presentation'
      onClick={handleEditMode}
      className={` flex justify-center items-center `}
    >
      <div className='relative w-[500px] bg-white rounded-3xl lg:text-lg'>
        <div className='peer flex justify-center pl-4 rounded-3xl overflow-hidden '>
          <label className=' flex w-full' htmlFor='search'>
            <div className=' flex justify-center items-center'>
              <RxMagnifyingGlass size={24} opacity='0.7' />
            </div>
            <input id='search' className='w-full p-4 roundeh-lg ' type='text' />
          </label>
          <button
            className='w-24 bg-[#1976D2] text-white whitespace-nowrap'
            type='button'
          >
            검색
          </button>
        </div>
        <ul className='absolute [peer:nth-child(even)>input]:focus:bg-red-400  w-full z-10 top-[90px] border rounded-lg bg-white overflow-hidden'>
          <li className='p-1'>결과없음</li>
          <li className='p-1 hover:bg-neutral-100 bg-neutral-50'>결과</li>
        </ul>
      </div>
    </div>
  );
}
