import Mainlayout from "../components/layout/Mainlayout";
import ContactCard from "../components/ui/organism/ContactCard";
import HeroCard from "../components/ui/molecules/HeroCard";

import img1 from "../assets/img/makkah-2.jpg";
import packageImg1 from "../assets/img/10-2024/package_1.jpeg";
import packageImg2 from "../assets/img/10-2024/package_2.jpeg";

import DataAos from "../components/ui/molecules/DataAos";

import { Clock } from "react-feather";
import { ArrowRight } from "react-feather";

import DivCard from "../components/ui/atoms/DivCard";
import PackageImg from "../components/ui/atoms/PackageImg";
import TimesCard from "../components/ui/atoms/TimesCard";
import PackageTitle from "../components/ui/atoms/PackageTitle";
import PackagePrice from "../components/ui/atoms/PackagePrice";

function Paket() {
  <DataAos />;
  return (
    <>
      <Mainlayout>
        <main className="overflow-hidden">
          <HeroCard img={img1} className="top-[-10%]" h1={"Paket Umroh kami"} />

          <DivCard>
            <PackageImg src={packageImg1} alt={"package-img"} />
            <TimesCard time={"9 Hari"} />
            <PackageTitle title={"Reguler"} depart={"Januari 2025"} />
            <PackagePrice price={"20.9jt"} />
          </DivCard>

          <DivCard>
            <PackageImg src={packageImg2} alt={"package-img"} />
            <TimesCard time={"12 Hari"} />
            <PackageTitle title={"Milad"} depart={"February 2025"} />
            <PackagePrice price={"34.5jt"} />
          </DivCard>

          <ContactCard />
        </main>
      </Mainlayout>
    </>
  );
}

export default Paket;
