import { RxMagnifyingGlass } from 'react-icons/rx';

export default function Search() {
  return (
    <div className={` w-full flex justify-center items-center rounded-lg `}>
      <div className='relative w-[200px]'>
        <label className='inline-block' htmlFor='search'>
          <RxMagnifyingGlass size={20} />
          <input
            id='search'
            className='w-full p-2 rounded-lg border'
            type='text'
          />
        </label>
        <ul className='absolute w-full z-10 top-[45px] border rounded-lg bg-white'>
          <li className='p-1'>결과없음</li>
          <li className='p-1 hover:bg-neutral-100 bg-neutral-50'>결과</li>
        </ul>
      </div>
    </div>
  );
}
