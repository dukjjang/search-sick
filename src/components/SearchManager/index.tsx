import { useRef } from "react";
import { RxMagnifyingGlass } from "react-icons/rx";

export default function Search() {
  const searchRef = useRef<HTMLInputElement>(null);

  const handleEditMode = () => {};

  return (
    <div
      role="presentation"
      onClick={handleEditMode}
      className=" md:flex-col md:flex fixed md:focus-within:top-auto focus-within:top-0 md:focus-within:h-fit focus-within:w-full max-w-[500px] focus-within:h-full focus-within:rounded-none md:focus-within:rounded-3xl  md:w-[500px] bg-white rounded-3xl lg:text-lg "
    >
      <label className="flex w-full pl-3 border-b md:border-0" htmlFor="search">
        <div className=" flex justify-center items-center">
          <RxMagnifyingGlass size={24} opacity="0.7" />
        </div>
        <input
          id="search"
          autoComplete="off"
          ref={searchRef}
          className=" peer w-full p-3 lg:p-4 roundeh-lg "
          type="text"
        />

        <ul
          className={` peer-focus:block hidden absolute w-full z-10 top-[60px] right-0 left-0 lg:top-[70px] border rounded-lg bg-white overflow-hidden`}
        >
          <li className="p-1">결과없음</li>
          <li className="p-1 hover:bg-neutral-100 bg-neutral-50">결과</li>
        </ul>
        <div
          id="searchButton"
          className="flex justify-center items-center w-24 bg-[#1976D2] text-white whitespace-nowrap peer-focus:rounded-none md:peer-focus:rounded-r-3xl rounded-r-3xl"
        >
          검색
        </div>
      </label>
    </div>
  );
}
