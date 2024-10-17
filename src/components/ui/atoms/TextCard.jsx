import { useRef } from "react";

function TextCard({ show, p }) {
  const TextCardRef = useRef(null);

  return (
    <div
      ref={TextCardRef}
      className={`${
        show ? "max-h-[500px] scale-y-100" : "max-h-0 scale-y-0"
      } duration-300 ease-in-out w-[90%] px-4 py-2 relative bg-white m-auto rounded-md overflow-hidden shadow-[5px_5px_10px_-5px_rgba(0,0,0,0.3)] shadow-neutral-300 transition-all origin-top`}
    >
      <p>{p}</p>
    </div>
  );
}

export default TextCard;
