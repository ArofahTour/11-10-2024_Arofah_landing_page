import { useRef } from "react";

function DivCardSm({ Children }) {
  const ChevDownRef = useRef(null);
  return (
    <>
      <div
        className="flex border border-brand-600 border-opacity-5 gap-4 w-[100%] shadow-md shadow-neutral-100 rounded-full items-center justify-center font-urbanist capitalize py-2 pr-4  my-4 cursor-pointer box-border overflow-visible  "
        onClick={() => {
          ChevDownRef.current.classList.toggle("rotate-[180deg]");
        }}
      >
        {Children}
      </div>
    </>
  );
}

export default DivCardSm;
