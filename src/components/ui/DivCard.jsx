function DivCard({ children }) {
  return (
    <>
      <div className="w-[80%] bg-white  m-auto my-8 rounded-md overflow-hidden shadow-[5px_5px_10px_-5px_rgba(0,0,0,0.3)] shadow-neutral-300 cursor-pointer transition duration-100 hover:shadow-black hover:opacity-[80%] hover:scale-[90%] hover:shadow-[0_0_30px_-5px_rgba(0,0,0,0.3)]">
        {children}
      </div>
    </>
  );
}

export default DivCard;
