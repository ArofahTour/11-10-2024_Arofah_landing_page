import { ChevronDown } from "react-feather";

import { useRef } from "react";

function IteneraryContainer(props) {
  const ChevDownRef = useRef(null);
  return (
    <>
      <div
        className="flex border border-brand-600 border-opacity-5 gap-8 w-[100%] shadow-md shadow-neutral-100 rounded-full items-center justify-between font-urbanist capitalize py-2 pr-4  my-4 cursor-pointer box-border overflow-visible  "
        onClick={() => {
          ChevDownRef.current.classList.toggle("rotate-[180deg]");
        }}
      >
        <div className="rounded-full text-white-100 bg-brand-600 text-2xl px-7 py-4 absolute  left-[4%]">
          {props.number}
        </div>
        <div className="px-6 py-3">.</div>
        <div className="">
          <h2 className="font-bold font-urbanist text-sm">{props.text}</h2>
        </div>
        <ChevronDown
          ref={ChevDownRef}
          className=" w-[3rem] transition duration-200"
        />
      </div>
    </>
  );
}

export default IteneraryContainer;
