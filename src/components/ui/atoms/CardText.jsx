function CardText(props) {
  return (
    <>
      <div className="font-urbanist">
        <h3 className="font-semibold text-xl text-neutral-700">{props.h3}</h3>
        <p className=" text-brand-600">{props.p}</p>
      </div>
    </>
  );
}

export default CardText;
