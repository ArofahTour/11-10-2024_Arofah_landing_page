function PackageImg(props) {
  return (
    <>
      <div className="w-[100%] h-[15rem] overflow-hidden relative">
        <img
          src={props.src}
          alt={props.alt}
          className="absolute w-full top-[-13%] left-[0%]"
        />
      </div>
    </>
  );
}

export default PackageImg;
