import { Clock, Users, Navigation, Book, Calendar } from "react-feather";
import CardText from "../atoms/CardText";

function InfoPackage(props) {
  return (
    <>
      <section className="my-12 px-8 grid grid-cols-2 gap-4">
        <div className="">
          <div className="flex gap-2 items-center my-4 ">
            <Clock className="text-orange-500" />
            <CardText h3={"Duration"} p={props.duration} />
          </div>
          <div className="flex gap-2 items-center my-4">
            <Users className="text-orange-500" />
            <CardText h3={"Group size"} p={props.group} />
          </div>
        </div>

        <div className="">
          <div className="flex gap-2 items-center my-4">
            <Navigation className="text-orange-500" />
            <CardText h3={"Flight"} p={props.flight} />
          </div>
          <div className="flex gap-2 items-center my-4">
            <Calendar className="text-orange-500" />
            <CardText h3={"Depart"} p={props.depart} />
          </div>
        </div>
      </section>
    </>
  );
}

export default InfoPackage;
