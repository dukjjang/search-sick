import { Dispatch, SetStateAction } from "react";
import { RxMagnifyingGlass } from "react-icons/rx";

interface Props {
  focusIndex: number;
  typedValue: string;
  setTypedValue: Dispatch<SetStateAction<string>>;
  sick: string;
  idx: number;
}

export default function SearchItem({
  focusIndex,
  setTypedValue,
  sick,
  idx,
  typedValue,
}: Props) {
  const boldedSick = sick
    .split(new RegExp(`(${typedValue})`, "gi"))
    .map((text: string) => {
      if (text === typedValue) return <strong>{text}</strong>;
      return text;
    });

  return (
    <li
      role="presentation"
      key={Math.random() * 10}
      onMouseDown={(e) => e.preventDefault()}
      onClick={() => setTypedValue(sick)}
      className={`${
        focusIndex === idx + 1 && "bg-sky-100"
      } flex gap-3 p-1 hover:bg-blue-100 bg-neutral-50 cursor-pointer `}
    >
      <RxMagnifyingGlass size={24} opacity="0.7" />
      <p className=" whitespace-nowrap text-ellipsis overflow-hidden  ">
        {boldedSick}
      </p>
    </li>
  );
}
