import Mainlayout from "../components/layout/Mainlayout";
import ContactCard from "../components/ui/organism/ContactCard";
import HeroCard from "../components/ui/molecules/HeroCard";

import img1 from "../assets/img/makkah-2.jpg";
import packageImg1 from "../assets/img/package/package_1.jpeg";
import packageImg2 from "../assets/img/package/package_2.jpeg";
import packageImg3 from "../assets/img/package/janPackage.jpeg";
import packageImg4 from "../assets/img/package/december.jpg";

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
          <HeroCard src={img1} className="top-[-10%]" top={"0%"} />
          {/* paket 1 */}
          <DivCard>
            <PackageImg src={packageImg1} alt={"package-img"} />
            <TimesCard time={"9 Hari"} />
            <PackageTitle
              title={"Reguler"}
              depart={"Depart: Januari 2025"}
              p={"4"}
            />
            <PackagePrice price={"20.9jt"} link={"/paket/reguler"} />
          </DivCard>

          {/* paket 2 */}
          <DivCard>
            <PackageImg src={packageImg2} alt={"package-img"} />
            <TimesCard time={"12 Hari"} />
            <PackageTitle
              title={"Milad"}
              depart={"Depart: February 2025"}
              p={"4"}
            />
            <PackagePrice price={"34.5jt"} link={"/paket/milad"} />
          </DivCard>

          {/* paket 3 */}
          <DivCard>
            <PackageImg src={packageImg3} alt={"package-img"} />
            <TimesCard time={"12 Hari"} />
            <PackageTitle
              title={"Paket umroh plus taif"}
              depart={"Depart: January 2025"}
              p={"4"}
            />
            <PackagePrice price={"35.5jt"} link={"/paket/paket-3"} />
          </DivCard>

          {/* paket 4 */}
          <DivCard>
            <PackageImg src={packageImg4} alt={"package-img"} />
            <TimesCard time={"12 Hari"} />
            <PackageTitle
              title={"Paket Umroh Reguler Desember"}
              depart={"Depart: January 2025"}
              p={"4"}
            />
            <PackagePrice price={"35.5jt"} link={"/paket/paket-4"} />
          </DivCard>

          <ContactCard />
        </main>
      </Mainlayout>
    </>
  );
}

export default Paket;
