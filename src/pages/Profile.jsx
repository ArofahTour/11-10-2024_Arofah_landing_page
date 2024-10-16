import { Link } from "react-router-dom";
import { useEffect } from "react";

import Mainlayout from "../components/layout/Mainlayout";

import { Mail } from "react-feather";
import { Phone } from "react-feather";

import heroImg from "../assets/img/10-2024/1.jpeg";

import AOS from "aos";
import "aos/dist/aos.css";

import ContactCard from "../components/ui/organism/ContactCard";
import HeroCard from "../components/ui/molecules/HeroCard";

function Profile() {
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
          {/* hero section */}
          <HeroCard img={heroImg} h1={"Tentang Kami"} />

          {/* about us section */}
          <section className="px-4 mt-16 text-center ">
            <h2 className="font-gilda text-4xl mb-8">
              Assalamualaikum Warahmatullahi Wabarakatuh.
            </h2>
            <p className="font-urbanist">
              Selamat datang di Arofah Tour & Travel, mitra Anda dalam memenuhi
              panggilan Allah ke tanah suci. Kami hadir dengan tujuan mulia
              untuk membantu dan membimbing Bapak/Ibu dalam menjalankan ibadah
              umroh, agar dapat lebih mendekatkan diri kepada Allah dan
              membersihkan hati di rumah-Nya. Di Arofah Tour, kami berkomitmen
              untuk menjaga kualitas dan kenyamanan setiap jamaah, sehingga Anda
              dapat melaksanakan ibadah dengan khusyuk dan tenang. Kami berdiri
              dengan niat yang tulus untuk membantu jamaah dalam perjalanan suci
              ini. Dengan kepercayaan yang telah diberikan oleh jamaah umroh
              Arofah, kami merasa terhormat untuk menjadi bagian dari keluarga
              Arofah. Labbaik Allahuma Labbaik, Labaika kala sharikah laka baik.
              Innalhamda, wanik mata, Lakawalmulk, Lasari kala. Arofah Tour &
              Travel Palembang siap menjadi sahabat setia Anda dalam setiap
              langkah menuju tanah suci.
            </p>
          </section>

          {/* visi and misi section */}
          <section className="">
            <div
              className="px-4 py-8 bg-neutral-50 shadow-sm text-left my-8"
              data-aos="fade-right"
            >
              <span className="font-gilda text-5xl absolute text-white-900">
                "
              </span>
              <h2 className="text-3xl mb-4 text-neutral-900 text-center font-gilda">
                Visi Kami
              </h2>
              <p className="text-[1.1rem] font-urbanist text-neutral-500 text-center">
                "Menjadi biro perjalanan umroh terdepan di Sumatera Selatan yang
                menghadirkan pelayanan jasa berkualitas dalam menyelenggarakan
                perjalanan ibadah umroh demi mencapai kesempurnaan dalam
                beribadah"
              </p>
            </div>

            <div
              className="px-4 py-8 bg-brand-600 shadow-sm text-left my-8"
              data-aos="fade-right"
            >
              <span className="font-gilda text-5xl absolute text-white-100">
                "
              </span>
              <h2 className="text-3xl mb-4 text-white-100 text-center font-gilda">
                Misi Kami
              </h2>
              <ul className="list-disc px-4">
                <li className="font-urbanist text-white-100 my-8">
                  Memberikan kemudahan bagi jamaah dengan menghadirkan layanan
                  terpadu baik dalam penyelenggaraan perjalanan ibadah maupun
                  dalam bentuk pelayanan lainnya.
                </li>
                <li className="font-urbanist text-white-100 mt-8">
                  Memberikan alternatif dan solusi terbaik terutama dalam
                  pelayanan perjalanan ibadah umroh sesuai dengan tuntunan Al
                  Qur'an dan sunnah
                </li>
              </ul>
            </div>
          </section>

          {/* organization structure section */}
          <section className="px-4">
            <h2
              className="text-4xl font-gilda capitalize mt-16 mb-8 text-center"
              data-aos="fade-up"
            >
              struktur organisasi
            </h2>

            <div className="text-center">
              <div className="font-urbanist my-4" data-aos="fade-right">
                <h3 className="text-2xl" data-aos="fade-right">
                  Komisaris
                </h3>
                <p>M.Nadif</p>
              </div>
              <div className="font-urbanist my-4" data-aos="fade-right">
                <h3 className="text-2xl ">Direktur</h3>
                <p>Muhammad yusuf shahab</p>
              </div>
              <div className="font-urbanist my-4" data-aos="fade-right">
                <h3 className="text-2xl ">Staff administrasi</h3>
                <p>Muznah daniah</p>
                <p>Fadel</p>
              </div>
              <div className="font-urbanist my-4" data-aos="fade-right">
                <h3 className="text-2xl ">Pembimbing</h3>
                <p>Ust. Bagir</p>
                <p>Ust. Muhammad</p>
              </div>
            </div>
          </section>

          {/* contact section */}
          <ContactCard />
        </main>
      </Mainlayout>
    </>
  );
}

export default Profile;
