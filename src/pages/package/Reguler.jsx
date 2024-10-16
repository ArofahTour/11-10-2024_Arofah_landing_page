import Mainlayout from "../../components/layout/Mainlayout";
import HeroCard from "../../components/ui/molecules/HeroCard";

import InfoPackage from "../../components/ui/organism/InfoPackage";
import H2small from "../../components/ui/atoms/H2small";

import heroImg from "../../assets/img/camel.jpg";

import IteneraryContainer from "../../components/ui/organism/IteneraryContainer";

function Reguler() {
  return (
    <>
      <Mainlayout>
        <main>
          <HeroCard src={heroImg} h1={"Reguler"} />
          {/* info section */}
          <InfoPackage
            duration={"9 Days"}
            depart={"januari 2025"}
            group={"20 people"}
            flight={"INDIGO"}
          />

          {/* Facility section */}
          <section className="px-4">
            <H2small h2={"Fasilitas"} />

            <div className=" p-4 gap-4 font-urbanist">
              <ul className="list-disc ">
                <li>Tiket Pesawat INDIGO </li>
                <li>Visa Umroh</li>
                <li>Bus AC</li>
                <li>Hotel Mekkah</li>
                <li>Hotel Madinah </li>
                <li>Muthowif Bahasa Indonesia</li>
                <li>Citytour Mekkah & Madinah</li>
                <li>Makan 3x Sehari</li>
                <li>Manasik 2x</li>
                <li>perlengkapan muhibbin</li>
                <ul className="list-decimal ml-4">
                  <li>Sarung Arofah Koper 24</li>
                  <li>Bahan seragam</li>
                  <li>Buku Manasik</li>
                  <li>Sal Arofah</li>
                  <li>Id Card</li>
                  <li>Zam - zam 5 liter</li>
                </ul>
              </ul>
            </div>
          </section>

          <section className="px-4 my-8">
            <H2small h2={"Itinerary"} />

            <IteneraryContainer
              text={"Hari 1: Palembang - Jakarta - Jeddah - Madinah"}
              number={"1"}
            />
            <IteneraryContainer
              text={"Hari 2: Madinah (Ziarah Dalam)"}
              number={"2"}
            />
            <IteneraryContainer
              text={"Hari 3: Madinah (Raudhah - Sesuai Jadwal Tasreh)"}
              number={"3"}
            />
            <IteneraryContainer
              text={"Hari 4: Madinah (Ziarah Luar)"}
              number={"4"}
            />
            <IteneraryContainer
              text={"Hari 5: Madinah - Mekkah (Umroh Pertama)"}
              number={"5"}
            />
            <IteneraryContainer text={"Hari 6: Mekkah"} number={"6"} />
            <IteneraryContainer
              text={"Hari 7: Mekkah (Ziarah Luar & Umroh Kedua)"}
              number={"7"}
            />
            <IteneraryContainer
              text={"Hari 8: Mekkah - Jeddah - Jakarta"}
              number={"8"}
            />
            <IteneraryContainer
              text={"Hari 9: Jakarta - Palembang"}
              number={"9"}
            />
          </section>
        </main>
      </Mainlayout>
    </>
  );
}

export default Reguler;
