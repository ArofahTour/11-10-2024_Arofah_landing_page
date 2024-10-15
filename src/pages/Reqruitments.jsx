import Mainlayout from "../components/layout/Mainlayout";
import ContactCard from "../components/ui/ContactCard";
import HeroCard from "../components/ui/HeroCard";

import req from "../assets/img/10-2024/2.jpeg";

import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";

function Reqruitments() {
  useEffect(() => {
    AOS.init({
      duration: 400,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <>
      <Mainlayout>
        <main className="overflow-hidden">
          <HeroCard img={req} />

          <h1 className="text-5xl font-gilda text-center my-8">Persyaratan</h1>

          <ol className="list-decimal px-8 font-urbanist text-left ">
            <li className=" my-4 text-md">
              Passport dengan 3 suku kata nama (Contoh : Ibrahim Abdul Aziz)
            </li>
            <li className=" my-4 text-md">Fotocopy KK</li>
            <li className=" my-4 text-md">Fotocopy KTP</li>
            <li className=" my-4 text-md">Fotocopy Buku Nikah</li>
            <li className=" my-4 text-md">
              Fotocopy Akte Kelahiran (Untuk anak-anak / wanita dengan usia
              dibawah 45 tahun)
            </li>
            <li className=" my-4 text-md">
              Foto dengan warna background putih (80% zoom kepala 3×4 sebanyak 5
              lembar, 4×6 sebanyak 5 lembar)
            </li>
            <li className=" my-4 text-md" data-aos="fade-right">
              Dokumen diserahkan paling lambat 40 hari sebelum jadwal
              keberangkatan
            </li>
          </ol>
          <ContactCard />
        </main>
      </Mainlayout>
    </>
  );
}

export default Reqruitments;
