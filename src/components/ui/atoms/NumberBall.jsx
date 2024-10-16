function NumberBall(props) {
  return (
    <>
      <div className="rounded-full text-white-100 bg-brand-600 text-2xl px-7 py-4 absolute  left-[4%]">
        {props.text}
      </div>
    </>
  );
}

export default NumberBall;
