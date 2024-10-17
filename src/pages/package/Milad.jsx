import Mainlayout from "../../components/layout/Mainlayout";
import HeroCard from "../../components/ui/molecules/HeroCard";

import InfoPackage from "../../components/ui/organism/InfoPackage";

import heroImg from "../../assets/img/clock.jpg";
import FacilityReguler from "../../components/ui/organism/FacilityReguler";

import IteneraryContainer from "../../components/ui/organism/IteneraryContainer";
import TextCard from "../../components/ui/atoms/TextCard";
import H2small from "../../components/ui/atoms/H2small";
import FacilityMilad from "../../components/ui/organism/FacilityMilad";

function Milad() {
  return (
    <>
      <Mainlayout>
        <main>
          <HeroCard src={heroImg} h1={"Milad"} top={"-10%"} />
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

            <IteneraryContainer
              text={"Hari 3: Memperbanyak Ibadah di Masjid Nabawi"}
            >
              <TextCard
                p={
                  "Jamaah Arofah diharapkan memperbanyak ibadah di Masjid Nabawi sepanjang hari."
                }
              />
            </IteneraryContainer>

            <IteneraryContainer
              text={"Hari 4: Ziarah ke Raudhah (Jika Dijadwalkan)"}
            >
              <TextCard
                p={
                  "InsyaAllah, jika memungkinkan dan sesuai jadwal Tasreh, kita akan mengunjungi Raudhah. "
                }
              />
            </IteneraryContainer>

            <IteneraryContainer text={"Hari 5: City Tour Dalam Madinah"}>
              <TextCard
                p={
                  "Kita akan mengunjungi beberapa tempat bersejarah di Madinah, yaitu: Masjid Al-Ghamamah, Masjid Abu Bakar, Masjid Ali Bin Abi Thalib, Makam Baqi, Tsaqifah Bani Sa'dah"
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

            <IteneraryContainer
              text={"Hari 9: Memperbanyak Ibadah di Masjidil Haram"}
            >
              <TextCard
                p={
                  "Jamaah Arofah akan menghabiskan hari ini untuk memperbanyak ibadah di Masjidil Haram. Luangkan waktu untuk shalat, membaca Al-Qur'an, dan berdoa agar Allah mengabulkan segala hajat dan harapan kita."
                }
              />
            </IteneraryContainer>

            <IteneraryContainer text={"Hari 10: City Tour Luar Mekkah"}>
              <TextCard
                p={
                  "Hari ini kita akan melakukan City Tour Luar Mekkah untuk mengunjungi beberapa tempat bersejarah dan penting: Jabal Tsur: Tempat di mana Nabi Muhammad SAW dan Abu Bakar bersembunyi selama hijrah, Jabal Rahmah: Tempat yang terkenal sebagai lokasi pertemuan Adam dan Hawa, Muzdalifah: Tempat jamaah berhenti dan mengumpulkan batu untuk pelaksanaan ibadah, Mina: Lokasi pelaksanaan ibadah Haji yang sangat penting, Al Jamarat (melewati): Tempat pelaksanaan jumrah, Masjid Jiranah (melewati): Masjid yang dikenal sebagai tempat niat Umroh, Jabal Nur (melewati): Tempat di mana Nabi Muhammad SAW menerima wahyu pertama."
                }
              />
            </IteneraryContainer>
            <IteneraryContainer text={"Hari 11: Umroh Kedua"}>
              <TextCard
                p={
                  "Pada hari ini, Jamaah Arofah akan melaksanakan Umroh kedua. Dipandu oleh Ustad Muthowif, jamaah akan melakukan: Thawaf: Mengelilingi Ka'bah sebanyak tujuh kali. Sa'i: Berjalan antara bukit Safa dan Marwah. Tahalul: Memotong sebagian rambut sebagai tanda selesainya ibadah Umroh."
                }
              />
            </IteneraryContainer>
            <IteneraryContainer
              text={"Hari 13: Mekkah - Thaif - Jeddah - Jakarta"}
            >
              <TextCard
                p={
                  "Jamaah Arofah akan mempersiapkan Tawaf Wada atau Umroh Perpisahan sebagai ungkapan rasa syukur sebelum meninggalkan Mekkah. Setelah itu, InsyaAllah kita akan berangkat menuju Thaif menggunakan kereta cepat. Di Thaif, kita akan mengunjungi: Masjid Ali Bin Abi Thalib: Masjid bersejarah yang memiliki nilai spiritual tinggi. Tempat Parfum Bunga Mawar: Di sini, kita dapat melihat dan membeli parfum yang terkenal. Pemandangan Gunung: Nikmati keindahan alam pegunungan di Thaif. Naik Teleferik: Mengalami pemandangan yang menakjubkan dari ketinggian. Makan Nasi Kebuli: Menikmati hidangan khas yang lezat. Setelah menjelajahi Thaif, kita akan bersiap menuju Bandara Jeddah menggunakan bus untuk penerbangan kembali. Pada hari terakhir di Arab Saudi, kita akan terbang menggunakan Pesawat Saudi Airlines menuju Jakarta, dan InsyaAllah tiba di Jakarta."
                }
              />
            </IteneraryContainer>
            <IteneraryContainer text={"Hari 14: Jakarta - Palembang"}>
              <TextCard
                p={
                  "Pada hari ke-14, Jamaah Arofah akan melanjutkan perjalanan dari Jakarta menuju Palembang. InsyaAllah, Jamaah Arofah akan tiba di Palembang dengan selamat. Marilah kita mengucapkan syukur Alhamdulillah atas selesainya perjalanan Umroh bersama Arofah Tour."
                }
              />
            </IteneraryContainer>
          </section>
        </main>
      </Mainlayout>
    </>
  );
}

export default Milad;
