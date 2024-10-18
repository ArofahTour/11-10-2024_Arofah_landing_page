function PackageImg(props) {
  return (
    <>
      <div className="w-[100%] h-[15rem] overflow-hidden relative">
        <img
          src={props.src}
          alt={props.alt}
          className={`absolute w-full h-[${props.h}] top-[-13%] left-[0%]`}
        />
      </div>
    </>
  );
}

export default PackageImg;
