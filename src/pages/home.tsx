import { useState } from 'react';
import Search from '../components/Search';
import SearchList from '../components/SearchList';
import useSearch from '../hooks/useSearch';

export default function Home() {
  const [typedValue, setTypedValue] = useState('');
  const [focusIndex, setFocusIndex] = useState(0);
  const { sicks, search, isLoading } = useSearch({
    staleTime: 200000,
    cacheTime: 300000,
  });
  return (
    <main className=' fixed w-full h-full pt-20 md:px-5 bg-[#CAE9FF] '>
      <header className=' flex flex-col justify-center items-center w-full mb-5 gap-3 text-[1.25rem] lg:text-[2.125rem] font-bold'>
        <h2 className='m-auto'>국내 모든 임상시험 검색하고</h2>
        <h2> 온라인으로 참여하기</h2>
      </header>
      <div className=' w-full max-sm:focus-within:absolute md:focus-within:top-0 focus-within:right-0 flex bottom-0 justify-center focus-within:bg-white h-full md:h-fit'>
        <div
          role='presentation'
          className='flex fixed max-sm:mx-4 max-sm:focus-within:flex-row md:focus-within:top-auto focus-within:top-0 md:focus-within:h-fit focus-within:w-full max-w-[500px] focus-within:rounded-none md:focus-within:rounded-3xl md:w-[500px] bg-white rounded-3xl lg:text-lg border-b '
        >
          <Search
            sicks={sicks}
            search={search}
            focusIndex={focusIndex}
            setFocusIndex={setFocusIndex}
            typedValue={typedValue}
            setTypedValue={setTypedValue}
          />
          {typedValue && (
            <SearchList
              sicks={sicks}
              setTypedValue={setTypedValue}
              focusIndex={focusIndex}
              isLoading={isLoading}
            />
          )}
        </div>
      </div>
    </main>
  );
}
