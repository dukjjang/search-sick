import { useRef, useState } from 'react';
import { RxMagnifyingGlass } from 'react-icons/rx';

export default function Search() {
  const [editMode, setEditMode] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);

  const handleEditMode = () => {
    setEditMode(!editMode);
  };

  return (
    <div
      role='presentation'
      onClick={handleEditMode}
      className='  md:flex relative w-full h-full md:w-[500px] bg-white md:rounded-3xl lg:text-lg '
    >
      <label className='flex w-full pl-3 border-b md:border-0' htmlFor='search'>
        <div className=' flex justify-center items-center'>
          <RxMagnifyingGlass size={24} opacity='0.7' />
        </div>
        <input
          id='search'
          ref={searchRef}
          className=' peer w-full p-3 lg:p-4 roundeh-lg '
          type='text'
        />
        <ul
          className={` peer-focus:block hidden  absolute w-full z-10 top-[60px] left-0 lg:top-[70px] border rounded-lg bg-white overflow-hidden`}
        >
          <li className='p-1'>결과없음</li>
          <li className='p-1 hover:bg-neutral-100 bg-neutral-50'>결과</li>
        </ul>
        <button
          className='w-24 bg-[#1976D2] text-white whitespace-nowrap md:rounded-r-3xl'
          type='button'
        >
          검색
        </button>
      </label>
    </div>
  );
}
