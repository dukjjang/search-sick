import React, { Dispatch, SetStateAction } from 'react';
import { RxMagnifyingGlass } from 'react-icons/rx';
import { Sick } from '../../types';

interface Props {
  focusIndex: number;
  setTypedValue: Dispatch<SetStateAction<string>>;
  sick: Sick;
  boldArray: { isBold: boolean; letter: string }[];
  idx: number;
}

export default function SearchItem({
  focusIndex,
  setTypedValue,
  sick,
  boldArray,
  idx,
}: Props) {
  return (
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
      <p className=' whitespace-nowrap text-ellipsis overflow-hidden  '>
        {boldArray.map((letter) => {
          if (letter.isBold === true) return <strong>{letter.letter}</strong>;
          return letter.letter;
        })}
      </p>
    </li>
  );
}
