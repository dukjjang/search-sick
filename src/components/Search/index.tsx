import {
  ChangeEvent,
  useEffect,
  KeyboardEvent,
  Dispatch,
  SetStateAction,
} from 'react';
import { RxMagnifyingGlass } from 'react-icons/rx';
import { VscClose } from 'react-icons/vsc';

import useDebounce from '../../hooks/useDebounce';
import { Sick } from '../../types';

interface Props {
  sicks: Sick[];
  typedValue: string;
  focusIndex: number;
  search: (query: string) => void;
  setTypedValue: Dispatch<SetStateAction<string>>;
  setFocusIndex: Dispatch<SetStateAction<number>>;
}

export default function Search({
  sicks,
  typedValue,
  setFocusIndex,
  focusIndex,
  search,
  setTypedValue,
}: Props) {
  const debouncedSearchValue = useDebounce(typedValue, 300);
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
    <label
      className=' peer/label flex w-full pl-3 md:border-0'
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
        value={typedValue}
        onBlur={() => setFocusIndex(0)}
        className=' peer w-full py-3 pl-3 lg:p-4 roundeh-lg '
        placeholder='질환명을 입력해주세요'
        type='text'
        onKeyDown={handleKeyDown}
      />
      <button
        type='button'
        onClick={() => setTypedValue('')}
        className=' flex justify-center w-fit px-3 items-center peer-invalid:invisible '
      >
        <VscClose size={19} />
      </button>
      <div className='flex justify-center items-center w-24 bg-[#1976D2] text-white rounded-r-3xl max-sm:peer-focus:rounded-none '>
        검색
      </div>
    </label>
  );
}
