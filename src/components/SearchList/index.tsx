import { Dispatch, SetStateAction } from 'react';
import { RxMagnifyingGlass } from 'react-icons/rx';
import { Sick } from '../../types';

interface Props {
  sicks: Sick[];
  setTypedValue: Dispatch<SetStateAction<string>>;
  focusIndex: number;
  isLoading: boolean;
}

export default function SearchList({
  sicks,
  setTypedValue,
  focusIndex,
  isLoading,
}: Props) {
  return (
    <ul className='peer-focus-within/label:block hidden peer-invalid/label:invisible absolute w-full z-10 top-[60px] right-0 left-0 lg:top-[70px] p-3 border rounded-lg bg-white overflow-hidden'>
      {sicks.map((sick, idx) => (
        <li
          role='presentation'
          key={Math.random() * 10}
          onMouseDown={(e) => e.preventDefault()}
          onClick={() => setTypedValue(sick.sickNm)}
          className={`${
            focusIndex === idx + 1 && 'bg-gray-200'
          } flex gap-3 p-1 hover:bg-gray-200 bg-neutral-50 `}
        >
          <RxMagnifyingGlass size={24} opacity='0.7' />
          {sick.sickNm}
        </li>
      ))}
      {!sicks.length && !isLoading && <li className='p-1'>검색어없음</li>}
      {isLoading && (
        <div className='flex justify-center '>
          <div className='lds-dual-ring '> </div>
        </div>
      )}
    </ul>
  );
}
