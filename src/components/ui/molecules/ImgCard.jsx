function ImgCard({ img, onClick }) {
  return (
    <>
      <div
        onClick={onClick}
        className=" rounded-md w-[7rem] h-[7rem] cursor-pointer transition duration-200  hover:opacity-80 overflow-hidden"
      >
        <img src={img} alt="jamaah-arofah" className=" w-full object-cover" />
      </div>
    </>
  );
}

export default ImgCard;
