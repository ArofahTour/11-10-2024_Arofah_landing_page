import Mainlayout from "../components/layout/Mainlayout";
import ContactCard from "../components/ui/organism/ContactCard";
import HeroCard from "../components/ui/molecules/HeroCard";

import img1 from "../assets/img/makkah.jpg";

import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";

function Facility() {
  return (
    <>
      <Mainlayout>
        <main className="overflow-hidden">
          <HeroCard img={img1} className="top-[-10%]" />
          <h1 className="text-5xl font-gilda text-center my-8">Fasilitas</h1>

          <div className="">
            <h1>Fasilitas yang Termasuk dalam Paket Umroh dan Haji</h1>
            <ul>
              <li>
                Tiket pesawat Palembang – Jakarta – Jedda PP + Free Airport Tax
                (Garuda / Garuda International / Saudi Airlines)
              </li>
              <li>
                Akomodasi hotel berbintang sesuai paket (1 kamar untuk 4 orang)
              </li>
              <li>Visa Umroh</li>
              <li>Transportasi Bus AC selama di tanah suci</li>
              <li>Makan 3x sehari</li>
              <li>Manasik</li>
              <li>Buku Manasik</li>
              <li>Bahan Seragam Umroh</li>
              <li>Beregok / Jilbab, Ihrom</li>
              <li>Air Zam-Zam @5 liter (Termasuk Bagasi)</li>
              <li>Ziarah di tempat-tempat Mustazab</li>
              <li>City Tour</li>
              <li>Koper / Travel Bag</li>
            </ul>
          </div>

          <ContactCard />
        </main>
      </Mainlayout>
    </>
  );
}

export default Facility;
