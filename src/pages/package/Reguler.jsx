import React from "react";
import Mainlayout from "../../components/layout/Mainlayout";
import HeroCard from "../../components/ui/molecules/HeroCard";
import InfoPackage from "../../components/ui/organism/InfoPackage";
import H2small from "../../components/ui/atoms/H2small";
import heroImg from "../../assets/img/camel.jpg";
import IteneraryContainer from "../../components/ui/organism/IteneraryContainer";
import TextCard from "../../components/ui/atoms/TextCard";
import DataAos from "../../components/ui/molecules/DataAos";
import FacilityReguler from "../../components/ui/organism/FacilityReguler";

function Reguler() {
  <DataAos />;
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
          <FacilityReguler />

          {/* Itinerary section */}
          <section className="px-4 my-8">
            <H2small h2={"Itinerary"} />
            <IteneraryContainer
              text={"Hari 1: Palembang - Jakarta - Jeddah - Madinah"}
            >
              <TextCard
                p={
                  "Kita akan berkumpul di Bandara Sultan Mahmud Badaruddin II Palembang untuk penerbangan menuju Jakarta, dilanjutkan penerbangan internasional ke Jeddah. Setelah tiba di Jeddah, kita akan melanjutkan perjalanan ke Madinah. Setibanya di Madinah, check-in hotel untuk istirahat. "
                }
              />
            </IteneraryContainer>

            <IteneraryContainer text={"Hari 2: Madinah (Ziarah Dalam)"}>
              <TextCard
                p={
                  "Hari ini kita akan melaksanakan ziarah dalam di sekitar Masjid Nabawi, termasuk mengunjungi makam Rasulullah SAW, Raudhah, dan Makam Baqi'. Setelah ziarah, waktu bebas untuk memperbanyak ibadah di Masjid Nabawi. "
                }
              />
            </IteneraryContainer>

            <IteneraryContainer
              text={"Hari 3: Madinah (Raudhah - Sesuai Jadwal Tasreh)"}
            >
              <TextCard
                p={
                  "Sesuai jadwal tasreh yang diberikan, kita akan masuk ke Raudhah untuk melaksanakan shalat dan berdoa di tempat yang sangat mustajab ini. Setelah itu, waktu bebas untuk beribadah. "
                }
              />
            </IteneraryContainer>

            <IteneraryContainer text={"Hari 4: Madinah (Ziarah Luar)"}>
              <TextCard
                p={
                  "Hari ini kita akan melakukan ziarah ke beberapa tempat bersejarah di luar kota Madinah, seperti Masjid Quba, Masjid Qiblatain, Jabal Uhud, dan Kebun Kurma. Setelah itu kembali ke hotel untuk beristirahat dan ibadah."
                }
              />
            </IteneraryContainer>

            <IteneraryContainer
              text={"Hari 5: Madinah - Mekkah (Umroh Pertama)"}
            >
              <TextCard
                p={
                  "Setelah shalat subuh dan sarapan, kita akan bertolak menuju Mekkah. Dalam perjalanan, kita akan berhenti di Bir Ali untuk mengambil miqat (niat umroh). Setibanya di Mekkah, kita akan langsung melaksanakan ibadah umroh pertama (thawaf, sa'i, dan tahallul). "
                }
              />
            </IteneraryContainer>

            <IteneraryContainer text={"Hari 6: Mekkah"}>
              <TextCard
                p={
                  "Tiba di Jakarta, kita akan melanjutkan penerbangan domestik ke Palembang. Setibanya di Palembang, acara umroh kita selesai. Terima kasih telah mempercayakan perjalanan umroh ini bersama PT Arofah Perdana Mandiri. "
                }
              />
            </IteneraryContainer>

            <IteneraryContainer
              text={"Hari 7: Mekkah (Ziarah Luar & Umroh Kedua)"}
            >
              <TextCard
                p={
                  "Hari ini kita akan melakukan ziarah luar ke tempat-tempat bersejarah seperti Jabal Nur, Jabal Rahmah, Muzdalifah, dan Mina. Setelah itu, kita akan mengambil miqat untuk melaksanakan umroh kedua."
                }
              />
            </IteneraryContainer>

            <IteneraryContainer text={"Hari 8: Mekkah - Jeddah - Jakarta"}>
              <TextCard
                p={
                  "Setelah menyelesaikan seluruh rangkaian ibadah di Mekkah, kita akan berangkat menuju Jeddah untuk penerbangan kembali ke Jakarta. Tiba di Jeddah, kita akan singgah sejenak di Corniche dan Masjid Terapung."
                }
              />
            </IteneraryContainer>

            <IteneraryContainer text={"Hari 9: Jakarta - Palembang"}>
              <TextCard
                p={
                  "Tiba di Jakarta, kita akan melanjutkan penerbangan domestik ke Palembang. Setibanya di Palembang, acara umroh kita selesai. Terima kasih telah mempercayakan perjalanan umroh ini bersama PT Arofah Perdana Mandiri. "
                }
              />
            </IteneraryContainer>
          </section>
        </main>
      </Mainlayout>
    </>
  );
}

export default Reguler;
