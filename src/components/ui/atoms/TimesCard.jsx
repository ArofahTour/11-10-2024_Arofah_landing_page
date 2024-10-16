import { Clock } from "react-feather";

function TimesCard(props) {
  return (
    <>
      <div className="absolute bg-brand-600 text-white-100 w-[60%] top-[50%] left-2 py-2 px-4 rounded-full flex items-center gap-2 justify-center ">
        <Clock />
        <p className="font-semibold font-urbanist">{props.time}</p>
      </div>
    </>
  );
}

export default TimesCard;
