import Mainlayout from "../../components/layout/Mainlayout";
import HeroCard from "../../components/ui/molecules/HeroCard";

import InfoPackage from "../../components/ui/organism/InfoPackage";

import heroImg from "../../assets/img/clock.jpg";

function Milad() {
  return (
    <>
      <Mainlayout>
        <main>
          <HeroCard src={heroImg} h1={"Milad"} top={"-10%"} />
          {/* info section */}
          <InfoPackage
            duration={"9 Days"}
            type={"reguler"}
            group={"20 people"}
            guide={"include"}
          />

          {/*  */}
        </main>
      </Mainlayout>
    </>
  );
}

export default Milad;
