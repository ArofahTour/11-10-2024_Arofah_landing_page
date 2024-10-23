import DataAos from "../molecules/DataAos";

function PackageTitle(props) {
  <DataAos />;
  return (
    <>
      <div
        className={`text-[1rem] font-urbanist p-${props.p} px-${props.px} text-neutral-700 mt-4`}
      >
        <h3 className="text-2xl font-bold ">{props.title}</h3>
        <p className="mt-2">{props.depart}</p>
      </div>
    </>
  );
}

export default PackageTitle;
