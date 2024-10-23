import Mainlayout from "../components/layout/Mainlayout";
import ContactCard from "../components/ui/organism/ContactCard";
import HeroCard from "../components/ui/molecules/HeroCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";

import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";

import img from "../assets/img/facility/1.jpeg";
import img2 from "../assets/img/facility/2.jpeg";
import img3 from "../assets/img/facility/3.jpeg";
import img4 from "../assets/img/facility/4.jpeg";
import img5 from "../assets/img/facility/5.jpeg";
import img6 from "../assets/img/facility/6.jpeg";
import img7 from "../assets/img/facility/7.jpeg";
import img8 from "../assets/img/facility/8.jpeg";

import pesawat from "../assets/img/facility/fasilitas/pesawat.jpg";
import visa from "../assets/img/facility/fasilitas/visa.jpg";
import hotel from "../assets/img/facility/fasilitas/hotel.jpg";
import bus from "../assets/img/facility/fasilitas/bus.jpg";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { ArrowRight } from "react-feather";
import { Link } from "react-router-dom";

function Facility() {
  useEffect(() => {
    // Initialize AOS animation
    AOS.init();
    console.log(HeroCard);
  }, []);

  return (
    <>
      <Mainlayout>
        <main className="overflow-hidden">
          <HeroCard src={img} />
          <h1 className="text-5xl font-gilda text-center my-8 font-bold text-brand-600">
            Fasilitas
          </h1>

          {/* fasilitas section */}
          <section>
            <div className="px-4">
              <h2 className=" text-2xl text-neutral-900 font-urbanist font-semibold ">
                Fasilitas yang akan diterima oleh jamaah Arofah
              </h2>

              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                scrollbar={{ draggable: true }}
                spaceBetween={50}
                data-aos="fade-up"
              >
                <SwiperSlide className="pb-8">
                  <div className="overflow-hidden w-[16rem]  rounded-md shadow-md shadow-black transition duration-200 ease-in-out cursor-pointer hover:scale-[105%] mx-auto my-8">
                    <img src={pesawat} alt="pesawat" className="" />
                  </div>
                  <p className="text-center font-urbanist text-xl font-semibold text-neutral-900">
                    Tiket pesawat
                  </p>
                </SwiperSlide>
                <SwiperSlide className="pb-8">
                  <div className="overflow-hidden w-[16rem] rounded-md shadow-md shadow-black transition duration-200 ease-in-out cursor-pointer hover:scale-[105%] mx-auto my-8">
                    <img src={visa} alt="visa" className="" />
                  </div>
                  <p className="text-center font-urbanist text-xl font-semibold text-neutral-900">
                    Visa umroh
                  </p>
                </SwiperSlide>
                <SwiperSlide className="pb-8">
                  <div className="overflow-hidden w-[16rem] rounded-md shadow-md shadow-black transition duration-200 ease-in-out cursor-pointer hover:scale-[105%] mx-auto my-8">
                    <img src={bus} alt="bus" className="" />
                  </div>
                  <p className="text-center font-urbanist text-xl font-semibold text-neutral-900">
                    Bus Ac
                  </p>
                </SwiperSlide>
                <SwiperSlide className="pb-8">
                  <div className="overflow-hidden w-[16rem] rounded-md shadow-md shadow-black transition duration-200 ease-in-out cursor-pointer hover:scale-[105%] mx-auto my-8">
                    <img src={hotel} alt="hotel" className="" />
                  </div>
                  <p className="text-center font-urbanist text-xl font-semibold text-neutral-900">
                    Hotel bintang 4
                  </p>
                </SwiperSlide>
                <SwiperSlide className="pb-8">
                  <Link to={"/paket"}>
                    <div className="overflow-hidden w-[16rem] h-[10rem] flex justify-center items-center rounded-md shadow-md shadow-black transition duration-200 ease-in-out cursor-pointer hover:scale-[105%] mx-auto my-8 text-2xl font-urbanist text-brand-600 font-bold ">
                      Lihat selengkapnya <ArrowRight />
                    </div>
                  </Link>
                </SwiperSlide>
              </Swiper>
            </div>
          </section>

          {/* section perlengkapan */}
          <section className="px-4 font-urbanist">
            <h2
              className="text-2xl font-semibold text-neutral-900  mt-8"
              data-aos="fade-right"
            >
              Perlengkapan yang disediakan untuk jamaah Arofah
            </h2>
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              scrollbar={{ draggable: true }}
              spaceBetween={50}
              data-aos="fade-up"
            >
              <SwiperSlide className="pb-8">
                <div className="overflow-hidden rounded-xl w-[16rem] h-[20rem] shadow-md shadow-black mx-auto my-8 cursor-pointer transition duration-200  hover:scale-[105%]  ">
                  <img src={img4} alt="Koper besar 24" />
                </div>
                <p className="text-center font-urbanist text-xl font-semibold text-neutral-900">
                  Koper besar 24
                </p>
              </SwiperSlide>
              <SwiperSlide>
                <div className="overflow-hidden rounded-xl w-[16rem] h-[20rem] shadow-md shadow-black mx-auto my-8 cursor-pointer transition duration-200  hover:scale-[105%]  ">
                  <img src={img6} alt="Koper Kecil 16" />
                </div>
                <p className="text-center font-urbanist text-xl font-semibold text-neutral-900">
                  Koper Kecil 16
                </p>
              </SwiperSlide>
              <SwiperSlide>
                <div className="overflow-hidden rounded-xl w-[16rem] h-[20rem] shadow-md shadow-black mx-auto my-8 cursor-pointer transition duration-200  hover:scale-[105%]  ">
                  <img src={img3} alt="Bahan seragam" />
                </div>
                <p className="text-center font-urbanist text-xl font-semibold text-neutral-900">
                  Bahan seragam(paket milad)
                </p>
              </SwiperSlide>
              <SwiperSlide>
                <div className="overflow-hidden rounded-xl w-[16rem] h-[20rem] shadow-md shadow-black mx-auto my-8 cursor-pointer transition duration-200  hover:scale-[105%]  ">
                  <img src={img7} alt="Bahan seragam" />
                </div>
                <p className="text-center font-urbanist text-xl font-semibold text-neutral-900">
                  Bahan seragam(paket reguler)
                </p>
              </SwiperSlide>
              <SwiperSlide>
                <div className="overflow-hidden rounded-xl w-[16rem] h-[20rem] shadow-md shadow-black mx-auto my-8 cursor-pointer transition duration-200  hover:scale-[105%]  ">
                  <img src={img5} alt="Bantal Leher" />
                </div>
                <p className="text-center font-urbanist text-xl font-semibold text-neutral-900">
                  Bantal Leher
                </p>
              </SwiperSlide>
              <SwiperSlide>
                <div className="overflow-hidden rounded-xl w-[16rem] h-[20rem] shadow-md shadow-black mx-auto my-8 cursor-pointer transition duration-200  hover:scale-[105%]  ">
                  <img src={img2} alt="Ihrom/Mukena" />
                </div>

                <p className="text-center font-urbanist text-xl font-semibold text-neutral-900">
                  Ihrom/Mukena
                </p>
              </SwiperSlide>
              <SwiperSlide>
                <div className="overflow-hidden rounded-xl w-[16rem] h-[20rem] shadow-md shadow-black mx-auto my-8 cursor-pointer transition duration-200  hover:scale-[105%]  ">
                  <img src={img} alt=" Buku Manasik" />
                </div>

                <p className="text-center font-urbanist text-xl font-semibold text-neutral-900">
                  Buku Manasik
                </p>
              </SwiperSlide>
              <SwiperSlide>
                <div className="overflow-hidden rounded-xl w-[16rem] h-[20rem] shadow-md shadow-black mx-auto my-8 cursor-pointer transition duration-200  hover:scale-[105%]  ">
                  <img src={img8} alt="Sal Arofah" />
                </div>

                <p className="text-center font-urbanist text-xl font-semibold text-neutral-900">
                  Sal Arofah
                </p>
              </SwiperSlide>
            </Swiper>
          </section>

          <ContactCard />
        </main>
      </Mainlayout>
    </>
  );
}

export default Facility;
