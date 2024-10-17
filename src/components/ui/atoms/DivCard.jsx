import DataAos from "../molecules/DataAos";

function DivCard({ children }) {
  <DataAos />;
  return (
    <>
      <div
        className={`w-[90%] relative bg-white  m-auto my-8 rounded-md overflow-hidden shadow-[5px_5px_10px_-5px_rgba(0,0,0,0.3)] shadow-neutral-300 cursor-pointer transition duration-100 `}
        data-aos="fade-right"
      >
        {children}
      </div>
    </>
  );
}

export default DivCard;
