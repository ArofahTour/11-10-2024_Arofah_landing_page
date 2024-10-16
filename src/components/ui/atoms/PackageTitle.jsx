function PackageTitle(props) {
  return (
    <>
      <div className=" text-[1rem] font-urbanist p-4 text-neutral-700 mt-4">
        <h3 className="text-2xl font-bold ">{props.title}</h3>
        <p className="mt-2">Depart: {props.depart}</p>
      </div>
    </>
  );
}

export default PackageTitle;
