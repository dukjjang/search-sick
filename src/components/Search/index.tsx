import { useRef, ChangeEvent, useState, useEffect } from 'react';
import { RxMagnifyingGlass } from 'react-icons/rx';
import useDebounce from '../../hooks/useDebounce';
import useSearch from '../../hooks/useSearch';

export default function Search() {
  const [typedValue, setTypedValue] = useState('');
  const { sicks, search, isLoading } = useSearch({
    staleTime: 100000,
    cacheTime: 300000,
  });
  const searchRef = useRef<HTMLInputElement>(null);

  console.log(isLoading);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTypedValue(e.target.value);
  };

  const debouncedSearchValue = useDebounce(typedValue, 300);

  useEffect(() => {
    search(debouncedSearchValue);
  }, [debouncedSearchValue]);

  return (
    <div
      role='presentation'
      className=' md:flex-col md:flex fixed md:focus-within:top-auto focus-within:top-0 md:focus-within:h-fit focus-within:w-full max-w-[500px] focus-within:h-full focus-within:rounded-none md:focus-within:rounded-3xl  md:w-[500px] bg-white rounded-3xl lg:text-lg '
    >
      <label className='flex w-full pl-3 border-b md:border-0' htmlFor='search'>
        <div className=' flex justify-center  items-center'>
          <RxMagnifyingGlass size={24} opacity='0.7' />
        </div>
        <input
          id='search'
          required
          onChange={handleChange}
          autoComplete='off'
          ref={searchRef}
          className=' peer w-full p-3 lg:p-4 roundeh-lg '
          type='text'
        />

        <ul className='peer-focus:block hidden peer-invalid:invisible absolute w-full z-10 top-[60px] right-0 left-0 lg:top-[70px] border rounded-lg bg-white overflow-hidden'>
          {isLoading ? (
            <div className='flex justify-center'>
              <li className='lds-dual-ring '> </li>
            </div>
          ) : (
            <>
              {!sicks.length && <li className='p-1'>결과없음</li>}
              {sicks.map((sick) => (
                <li
                  key={Math.random() * 10}
                  className='p-1 hover:bg-neutral-100 bg-neutral-50'
                >
                  {sick.sickNm}
                </li>
              ))}
            </>
          )}
        </ul>
        <div
          id='searchButton'
          className='flex justify-center items-center w-24 bg-[#1976D2] text-white whitespace-nowrap peer-focus:rounded-none md:peer-focus:rounded-r-3xl rounded-r-3xl'
        >
          검색
        </div>
      </label>
    </div>
  );
}
