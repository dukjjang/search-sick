import { Dispatch, SetStateAction } from "react";
import { Sick } from "../../types";
import SearchItem from "../SearchItem";

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
  return (
    <ul
      className={` ${
        focusIndex > 10 && "invisible"
      } peer-focus-within/label:block hidden h-[330px] peer-invalid/label:invisible absolute w-full z-10 top-[60px] right-0 left-0 lg:top-[70px] p-3 border rounded-lg bg-white overflow-hidden `}
    >
      <p className="text-sm mb-3 opacity-60">추천 검색어</p>
      {typedValue &&
        !isLoading &&
        focusIndex < 10 &&
        sicks.map((sick, idx) => (
          <SearchItem
            key={Math.random() * 10}
            sick={sick.sickNm}
            idx={idx}
            setTypedValue={setTypedValue}
            focusIndex={focusIndex}
            typedValue={typedValue}
          />
        ))}
      {!isLoading && typedValue.length > 0 && <li>검색어 없음</li>}
      {isLoading && typedValue.length > 0 && (
        <div className="flex justify-center ">
          <div className="lds-dual-ring "> </div>
        </div>
      )}
      {/* {!sicks.length && !isLoading && <li className='p-1'>검색어없음</li>}
      {isLoading && typedValue && (
        <div className='flex justify-center '>
          <div className='lds-dual-ring '> </div>
        </div>
      )} */}
    </ul>
  );
}
