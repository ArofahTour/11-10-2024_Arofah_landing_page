function HeroCard(props) {
  return (
    <>
      <section className="pt-[6rem]">
        <div className="overflow-hidden h-[20rem] relative flex items-center justify-center">
          <div className="bg-[rgba(0,0,0,0.5)] w-full h-full absolute z-[1]"></div>
          <img
            src={props.src}
            alt="hero-img"
            className={
              `absolute left-[0%] z[-1] min-[390px]:top-[-10%]` + props.top
            }
          />
          <h1 className="absolute text-5xl font-gilda text-white-100 z-[2] text-center">
            {props.h1}
          </h1>
        </div>
      </section>
    </>
  );
}

export default HeroCard;
