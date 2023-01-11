import { ChangeEvent, useState, useEffect, KeyboardEvent } from 'react';
import { RxMagnifyingGlass } from 'react-icons/rx';
import { VscClose } from 'react-icons/vsc';

import useDebounce from '../../hooks/useDebounce';
import useSearch from '../../hooks/useSearch';

export default function Search() {
  const [typedValue, setTypedValue] = useState('');
  const [focusIndex, setFocusIndex] = useState(0);
  const debouncedSearchValue = useDebounce(typedValue, 300);

  const { sicks, search, isLoading } = useSearch({
    staleTime: 200000,
    cacheTime: 300000,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (typedValue.length === 0) setFocusIndex(0);
    setTypedValue(e.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLElement>) => {
    if (e.nativeEvent.isComposing) return;

    if (e.key === 'ArrowDown' && focusIndex < sicks.length)
      setFocusIndex(focusIndex + 1);
    if (e.key === 'ArrowUp' && focusIndex > 1) setFocusIndex(focusIndex - 1);
  };

  useEffect(() => {
    search(debouncedSearchValue);
  }, [debouncedSearchValue]);

  return (
    <div
      role='presentation'
      className='flex max-sm:focus-within:flex-row  fixed md:focus-within:top-auto focus-within:top-0 md:focus-within:h-fit focus-within:w-full max-w-[500px] focus-within:rounded-none md:focus-within:rounded-3xl  md:w-[500px] bg-white rounded-3xl lg:text-lg z-10 border-b '
    >
      <label
        className=' peer/label flex w-full pl-3  md:border-0'
        htmlFor='search'
      >
        <div className=' flex justify-center items-center'>
          <RxMagnifyingGlass size={24} opacity='0.7' />
        </div>
        <input
          id='search'
          required
          onChange={handleChange}
          autoComplete='off'
          onBlur={() => setFocusIndex(0)}
          className=' peer w-full p-3 lg:p-4 roundeh-lg '
          type='text'
          onKeyDown={handleKeyDown}
        />
        <ul className='peer-focus:block hidden peer-invalid:invisible absolute w-full z-10 top-[60px] right-0 left-0 lg:top-[70px] p-3 border rounded-lg bg-white overflow-hidden'>
          {isLoading ? (
            <div className='flex justify-center'>
              <div className='lds-dual-ring '> </div>
            </div>
          ) : (
            <>
              {!sicks.length && <li className='p-1'>검색어없음</li>}
              {sicks.map((sick, idx) => (
                <li
                  key={Math.random() * 10}
                  className={`${
                    focusIndex === idx + 1 && 'bg-gray-200'
                  } flex gap-3 p-1 hover:bg-neutral-100 bg-neutral-50 `}
                >
                  <RxMagnifyingGlass size={24} opacity='0.7' />
                  {sick.sickNm}
                </li>
              ))}
            </>
          )}
        </ul>
      </label>
      <button
        type='button'
        className=' peer-invalid:hidden  flex justify-center items-center w-20  '
      >
        <VscClose size={20} />
      </button>
      <div className='flex justify-center items-center w-24 bg-[#1976D2] text-white  rounded-r-3xl peer-focus-within/label:rounded-none md:peer-focus-within/label:rounded-r-3xl  '>
        검색
      </div>
    </div>
  );
}
