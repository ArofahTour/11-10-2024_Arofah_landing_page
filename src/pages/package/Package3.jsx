import Mainlayout from "../../components/layout/Mainlayout";
import ContactCard from "../../components/ui/organism/ContactCard";

import heroImg from "../../assets/img/package/janPackage.jpeg";
import HeroCard from "../../components/ui/molecules/HeroCard";
import InfoPackage from "../../components/ui/organism/InfoPackage";
import IteneraryContainer from "../../components/ui/organism/IteneraryContainer";
import H2small from "../../components/ui/atoms/H2small";
import TextCard from "../../components/ui/atoms/TextCard";

function Package3() {
  return (
    <>
      <Mainlayout>
        <main className="overflow-hidden">
          <HeroCard src={heroImg} />
          {/* info section */}
          <InfoPackage
            duration={"12 Days"}
            depart={"January 2025"}
            group={"20 people"}
            flight={"Citilink, Saudi Airlines"}
          />

          {/* Facility section */}
          <section className="px-4">
            <H2small h2={"Fasilitas"} />
            <div className="p-4 gap-4 font-urbanist">
              <ul className="list-disc">
                <li>Tiket Pesawat Citilink Palembang - jakarta </li>
                <li>Tiket Pesawat Saudi airlines jakarta - jeddah </li>
                <li>Visa Umroh</li>
                <li>Bus AC</li>
                <li>Hotel Mekkah ⭐4 (Olayan Ajyad/Setaraf)</li>
                <li>Hotel Madinah ⭐4 (Jawharat Al Rasheed/Setaraf) </li>
                <li>Muthowif Bahasa Indonesia</li>
                <li>Citytour Mekkah & Madinah</li>
                <li>Citytour thaif</li>
                <li>Makan 3x Sehari</li>
                <li>Manasik 2x</li>
                <li>perlengkapan muhibbin</li>
                <ul className="list-decimal ml-4">
                  <li>Koper besar 24</li>
                  <li>Koper kecil 16</li>
                  <li>Tas jinjing</li>
                  <li>Bahan seragam</li>
                  <li>Buku Manasik</li>
                  <li>Sal Arofah</li>
                  <li>Bantal Leher</li>
                  <li>Id Card</li>
                  <li>Zam - zam 5 liter</li>
                  <li>ihrom atau mukenah</li>
                </ul>
              </ul>
            </div>

            <div className="mt-12">
              <H2small h2={"Fasilitas belum termasuk"} />
              <div className="p-4 gap-4 font-urbanist">
                <ul className="list-disc">
                  <li>Pasport jika belum ada </li>
                  <li>Kursi Roda</li>
                  <li>⁠Pengeluaran pribadi </li>
                  <li>⁠Loundry</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Itinerary section */}
          <section className="px-4 my-8">
            <H2small h2={"Itinerary"} />
            <IteneraryContainer text={"Hari 1: Palembang - Jakarta - Jeddah"}>
              <TextCard
                p={
                  "Pukul 10:40 Jamaah Arofah sudah berada di Bandara Sultan Mahmud Badaruddin II. Pukul 13:40 dengan mengucapkan BismillahiTawakaltuAlalloh. Kita berangkat menuju Jakarta menggunakan Pesawat Saudi Airlines dan InsyaAllah sampai di Jakarta Pukul 14:50. Kita istirahat dan makan di rest area Airport Jakarta. InsyaAllah Jamaah Arofah berangkat Pukul 19:05 menggunakan Pesawat Saudi Airlines menuju Jeddah. Insya Allah kita akan tiba di Jeddah Pukul 01:05 dan melakukan proses imigrasi. InsyaAllah Jamaah Arofah berangkat menuju Makkah dengan Bus, kemudian menuju Hotel Makkah. Check in Hotel, lanjut Breakfast, Lunch, dan  dinner di hotel."
                }
              />
            </IteneraryContainer>

            <IteneraryContainer text={"Hari 2: umroh pertama"}>
              <TextCard
                p={
                  "Melaksanakan umroh I dibimbing Ustad Muthowif (Thawaf, Sa’i dan Tahalul)."
                }
              />
            </IteneraryContainer>

            <IteneraryContainer text={"Hari 3: City tour kota thaif"}>
              <TextCard
                p={
                  "InsyaAllah jamaah City Tour ke Kota Thaif dan melaksanakan Umroh ke 2. "
                }
              />
            </IteneraryContainer>

            <IteneraryContainer text={"hari 4: City tour luar kota mekkah "}>
              <TextCard
                p={
                  "Kita akan mengunjungi beberapa tempat bersejarah di luar kota mekkah, yaitu: Jabal Tsur, Jabal Rahma, Muzdhalifah, Mina, Al Jamarat (melewati), Masjid Jiranah (melewati), Jabal Nur (melewati).	Setelah itu Jamaah Arofah menuju Hotel untuk Istirahat. Jamaah Arofah Breakfast, Lunch, dan dinner di hotel."
                }
              />
            </IteneraryContainer>

            <IteneraryContainer text={"Hari 5: Tawaf Wada"}>
              <TextCard
                p={
                  "	Jamaah Arofah persiapan Tawaf Wada/Umroh Perpisahan. Mempersiapkan barang bawaan untuk checkout hotel. Berangkat menuju Madinah dengan Bus.	Tiba di Madinah jamaah arofah menuju Hotel. Setelah itu Jamaah Arofah menuju Hotel untuk Istirahat dan memperbanyak ibadah di Masjid Nabawi. Jamaah Arofah Breakfast, lunch dan dinner di hotel"
                }
              />
            </IteneraryContainer>

            <IteneraryContainer text={"Hari 6: Raudah"}>
              <TextCard
                p={
                  "InsyaAllah / bila memungkinkan menuju Raudah sesuai jadwal yang di tentukan Tasreh."
                }
              />
            </IteneraryContainer>

            <IteneraryContainer text={"Hari 7: City tour dalam madinah "}>
              <TextCard
                p={
                  "Kita akan mengunjungi beberapa tempat bersejarah di dalam kota madinah yaitu : Masjid Al-Ghamamah, Masjid Abu Bakar, Masjib Ali Bin Abi Thalib, Makam Baqi, dan Tsaqifah Bani Sa'dah."
                }
              />
            </IteneraryContainer>

            <IteneraryContainer
              text={"Hari 8: Memperbanyak Ibadah di Masjid nabawi"}
            >
              <TextCard
                p={
                  "Jamaah Arofah akan menghabiskan hari ini untuk memperbanyak ibadah di Masjid Nabawi. Luangkan waktu untuk shalat, membaca Al-Qur'an, dan berdoa agar Allah mengabulkan segala hajat dan harapan kita."
                }
              />
            </IteneraryContainer>

            <IteneraryContainer text={"Hari 9: City Tour Luar kota madinah"}>
              <TextCard
                p={
                  "Hari ini kita akan melakukan City Tour Luar kota madinah untuk mengunjungi beberapa tempat bersejarah dan penting yaitu : Masjid Quba, Kebun Kurma, Masjid Qiblatain (melewati), Bukit Uhud Sa'ba Masjid (melewati)."
                }
              />
            </IteneraryContainer>
            <IteneraryContainer text={"Hari 10: Hari bebas"}>
              <TextCard
                p={
                  "Hari bebas Jamaah Arofah (Belanja) / beribadah kembali di Masjid Nabawi.	Jamaah Arofah Breakfast, Lunch, dan dinner di hotel."
                }
              />
            </IteneraryContainer>
            <IteneraryContainer text={"Hari 11: Madinah - Jakarta"}>
              <TextCard
                p={
                  "Jamaah Arofah persiapan  meperbanyak ibadah di masjid Nabawi dan  persiapan menuju Airport Jeddah dengan Bus. Pada Pukul 16:30 dengan menggunakan Pesawat Saudi Airlines kita berangkat menuju Jakarta dan insya Allah tiba pada Pukul 06:20."
                }
              />
            </IteneraryContainer>
            <IteneraryContainer text={"Hari 12: Jakarta - Palembang"}>
              <TextCard
                p={
                  "Pukul 11:50 berangkat dari Jakarta menuju Palembang. InsyaAllah Jamaah Arofah tiba di Palembang Pukul 12:55 dengan mengucapkan syukur Alhamdulillah perjalanan umroh Arofah Tour telah selesai."
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

export default Package3;
