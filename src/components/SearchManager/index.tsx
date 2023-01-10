import { RxMagnifyingGlass } from 'react-icons/rx';

export default function Search() {
  return (
    <div className={` w-full flex justify-center items-center `}>
      <div className='flex justify-center items-center relative border rounded-lg w-[200px]'>
        <div className=''>
          <RxMagnifyingGlass size={20} />
        </div>
        <label className='' htmlFor='search'>
          <input id='search' className='w-full p-2 rounded-lg ' type='text' />
        </label>
        <ul className='absolute w-full z-10 top-[45px] border rounded-lg bg-white'>
          <li className='p-1'>결과없음</li>
          <li className='p-1 hover:bg-neutral-100 bg-neutral-50'>결과</li>
        </ul>
      </div>
    </div>
  );
}
