import Mainlayout from "../../components/layout/Mainlayout";
import HeroCard from "../../components/ui/molecules/HeroCard";

import InfoPackage from "../../components/ui/organism/InfoPackage";

import heroImg from "../../assets/img/package/package_2.jpeg";
import FacilityReguler from "../../components/ui/organism/FacilityReguler";

import IteneraryContainer from "../../components/ui/organism/IteneraryContainer";
import TextCard from "../../components/ui/atoms/TextCard";
import H2small from "../../components/ui/atoms/H2small";
import FacilityMilad from "../../components/ui/organism/FacilityMilad";
import ContactCard from "../../components/ui/organism/ContactCard";

function Package2() {
  return (
    <>
      <Mainlayout>
        <main className="overflow-hidden">
          <HeroCard src={heroImg} top={"-10%"} />
          {/* info section */}
          <InfoPackage
            duration={"12 Days"}
            flight={"Qatar airways"}
            group={"10 people"}
            depart={"Februari 2025"}
          />

          {/* facility section */}
          <FacilityMilad />

          {/* itinerary section */}
          {/* Itinerary section */}
          <section className="px-4 my-8">
            <H2small h2={"Itinerary"} />
            <IteneraryContainer
              text={"Hari 1 - 2: Palembang - Jakarta - Jeddah - Madinah"}
            >
              <TextCard
                p={
                  "Jamaah Arofah berkumpul di Bandara Sultan Mahmud Badaruddin II. Dengan mengucapkan Bismillahi Tawakkaltu 'Alallah, kita berangkat menuju Jakarta menggunakan Pesawat Citilink. Setibanya di Jakarta, kita istirahat dan makan di Hotel Jakarta. Pada hari ke-2, InsyaAllah kita berangkat ke Jeddah menggunakan Pesawat Saudi Airlines. Setelah proses imigrasi di Bandara Jeddah, kita menuju Makkah dengan bus dan langsung menuju Hotel Madinah."
                }
              />
            </IteneraryContainer>

            <IteneraryContainer text={"Hari 3: Ziarah ke Raudah"}>
              <TextCard
                p={
                  "insyaAllah / bila memungkinkan menuju Raudah sesuai jadwal yang di tentukan Tasreh.."
                }
              />
            </IteneraryContainer>

            <IteneraryContainer text={"Hari 4:City tour dalam madinah"}>
              <TextCard
                p={
                  "Kita akan mengunjungi beberapa tempat bersejarah di Madinah, yaitu: Masjid Al-Ghamamah, Masjid Abu Bakar, Masjid Ali Bin Abi Thalib, Makam Baqi, Tsaqifah Bani Sa'dah "
                }
              />
            </IteneraryContainer>

            <IteneraryContainer text={"Hari 5: City Tour luar Madinah"}>
              <TextCard
                p={
                  "Hari ini, kita akan melakukan city tour luar Madinah, dengan mengunjungi: Masjid Quba, Kebun Kurma, Masjid Qiblatain (melewati), Bukit Uhud, Sab'a Masjid (melewati)"
                }
              />
            </IteneraryContainer>

            <IteneraryContainer text={"Hari 6: City Tour Luar Madinah"}>
              <TextCard
                p={
                  "Hari ini, kita akan melakukan city tour luar Madinah, dengan mengunjungi: Masjid Quba, Kebun Kurma, Masjid Qiblatain (melewati), Bukit Uhud, Sab'a Masjid (melewati)"
                }
              />
            </IteneraryContainer>

            <IteneraryContainer text={"Hari 7: Hari Bebas"}>
              <TextCard
                p={
                  "Jamaah dapat memilih untuk beribadah di Masjid Nabawi atau berbelanja di sekitar Madinah."
                }
              />
            </IteneraryContainer>

            <IteneraryContainer text={"Hari 8: Madinah - Mekkah"}>
              <TextCard
                p={
                  "Jamaah Arofah akan bersiap untuk shalat subuh berjamaah di Masjid Nabawi. Setelah shalat, jamaah mempersiapkan barang bawaan untuk checkout dari hotel. Kita berangkat menuju Mekkah dengan bus, dan mengambil miqot di Bir Ali. Setibanya di Mekkah, jamaah akan melaksanakan Umroh pertama (Thawaf, Sa'i, dan Tahalul) yang akan dipandu oleh Ustad Muthowif. Setelah umroh, jamaah menuju hotel untuk istirahat. Jamaah Arofah akan menikmati sarapan, makan siang, dan makan malam di hotel."
                }
              />
            </IteneraryContainer>

            <IteneraryContainer text={"Hari 9: City Tour Luar Mekkah"}>
              <TextCard
                p={
                  "Hari ini kita akan melakukan City Tour Luar Mekkah untuk mengunjungi beberapa tempat bersejarah dan penting: Jabal Tsur: Tempat di mana Nabi Muhammad SAW dan Abu Bakar bersembunyi selama hijrah, Jabal Rahmah: Tempat yang terkenal sebagai lokasi pertemuan Adam dan Hawa, Muzdalifah: Tempat jamaah berhenti dan mengumpulkan batu untuk pelaksanaan ibadah, Mina: Lokasi pelaksanaan ibadah Haji yang sangat penting, Al Jamarat (melewati): Tempat pelaksanaan jumrah, Masjid Jiranah (melewati): Masjid yang dikenal sebagai tempat niat Umroh, Jabal Nur (melewati): Tempat di mana Nabi Muhammad SAW menerima wahyu pertama."
                }
              />
            </IteneraryContainer>

            <IteneraryContainer text={"Hari 10: Umroh ke 2"}>
              <TextCard
                p={
                  "Umroh ke 2 dibimbing ustadz Muthowif(Thawaf,Sa'i dan tahalul)"
                }
              />
            </IteneraryContainer>
            <IteneraryContainer
              text={"Hari 11: Tawaf wada, Mekkah - Thaif - Jeddah - Jakarta "}
            >
              <TextCard
                p={
                  "Jamaah Arofah persiapan Tawaf Wada/Umroh Perpisahan.	Insya Allah berangkat menuju kota Thaif menggunakan kereta cepat mengunjungi masjid ali bin abi thalib,mengunjungi tempat parfum bunga mawar, melihat pemandangan gunung , naik telefric dan makan nasi kebuli, persiapan menuju Airport Jeddah dengan Bus. Pada hari terakhir dengan menggunakan Pesawat Saudi Airlines kita berangkat menuju Jakarta dan insya Allah tiba."
                }
              />
            </IteneraryContainer>
            <IteneraryContainer text={"Hari 12: Jakarta - palembang "}>
              <TextCard
                p={
                  "Jberangkat dari Jakarta menuju Palembang. InsyaAllah Jamaah Arofah tiba di Palembang dengan mengucapkan syukur Alhamdulillah perjalanan umroh Arofah Tour telah selesai."
                }
              />
            </IteneraryContainer>
          </section>

          <ContactCard />
        </main>
      </Mainlayout>
    </>
  );
}

export default Package2;
