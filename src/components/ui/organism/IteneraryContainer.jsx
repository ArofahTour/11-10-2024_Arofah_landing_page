import React from "react";
import { useState, useRef } from "react";
import { ChevronDown } from "react-feather";

function IteneraryContainer({ text, children }) {
  const [showTextCard, setShowTextCard] = useState(false); // State untuk visibilitas TextCard
  const ChevDownRef = useRef(null);

  const handleClick = () => {
    // Toggle antara true/false untuk mengatur tampilan TextCard
    setShowTextCard(!showTextCard);
    ChevDownRef.current.classList.toggle("rotate-[180deg]"); // Animasi chevron
  };

  return (
    <>
      <div
        data-aos="fade-right"
        className="grid grid-cols-[70%,30%] border border-brand-600 border-opacity-5 gap-8 w-[100%] shadow-md shadow-neutral-100 rounded-full items-center justify-between font-urbanist capitalize py-4 px-6 my-4 cursor-pointer box-border overflow-visible"
        onClick={handleClick}
      >
        <div className="text-left col-span-1">
          <h2 className="font-bold font-urbanist text-sm text-neutral-900">
            {text}
          </h2>
        </div>
        <ChevronDown
          ref={ChevDownRef}
          className="w-[3rem] transition duration-200 col-span-1 text-brand-600"
        />
      </div>

      {/* Pass "showTextCard" state sebagai props untuk kontrol animasi */}
      {<div>{React.cloneElement(children, { show: showTextCard })}</div>}
    </>
  );
}

export default IteneraryContainer;
