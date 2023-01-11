import { Dispatch, SetStateAction } from 'react';
import { Sick } from '../../types';
import SearchItem from '../SearchItem';

interface Props {
  sicks: Sick[];
  typedValue: string;
  setTypedValue: Dispatch<SetStateAction<string>>;
  focusIndex: number;
  isLoading: boolean;
}

export default function SearchList({
  sicks,
  typedValue,
  setTypedValue,
  focusIndex,
  isLoading,
}: Props) {
  const checkIsBold = (letter: string) => {
    const isBold = typedValue.toLowerCase().includes(letter.toLowerCase());
    if (isBold) return { isBold: true, letter };
    return { isBold: false, letter };
  };
  return (
    <ul className='peer-focus-within/label:block hidden h-[330px] peer-invalid/label:invisible absolute w-full z-10 top-[60px] right-0 left-0 lg:top-[70px] p-3 border rounded-lg bg-white overflow-hidden'>
      <p className='text-sm mb-3 opacity-60'>추천 검색어</p>
      {typedValue &&
        !isLoading &&
        sicks.map((sick, idx) => {
          const boldArray = sick.sickNm
            .split('')
            .map((letter) => checkIsBold(letter));
          return (
            <SearchItem
              key={Math.random() * 10}
              sick={sick}
              idx={idx}
              setTypedValue={setTypedValue}
              focusIndex={focusIndex}
              boldArray={boldArray}
            />
          );
        })}
      {!sicks.length && !isLoading && <li className='p-1'>검색어없음</li>}
      {isLoading && typedValue && (
        <div className='flex justify-center '>
          <div className='lds-dual-ring '> </div>
        </div>
      )}
    </ul>
  );
}
