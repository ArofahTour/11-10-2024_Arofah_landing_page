import Mainlayout from "../components/layout/Mainlayout";
import ContactCard from "../components/ui/organism/ContactCard";
import HeroCard from "../components/ui/molecules/HeroCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";

import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";

import img from "../assets/img/facility.jpg";
import img2 from "../assets/img/backpack.jpg";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

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
          <h1 className="text-5xl font-gilda text-center my-8">Fasilitas</h1>

          {/* fasilitas section */}
          <section className="">
            <div className="px-4">
              <h2 className=" text-2xl text-neutral-900 font-urbanist font-semibold ">
                Fasilitas yang akan didapatkan oleh jamaah arofah:
              </h2>

              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                scrollbar={{ draggable: true }}
                spaceBetween={50}
                data-aos="fade-up"
              >
                <SwiperSlide>
                  <div className="overflow-hidden w-[16rem] h-[16rem] rounded-md shadow-md shadow-black transition duration-200 ease-in-out cursor-pointer hover:scale-[105%] mx-auto my-8">
                    <img src={img} alt="" className="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="overflow-hidden w-[16rem] h-[16rem] rounded-md shadow-md shadow-black transition duration-200 ease-in-out cursor-pointer hover:scale-[105%] mx-auto my-8">
                    <img src={img} alt="" className="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="overflow-hidden w-[16rem] h-[16rem] rounded-md shadow-md shadow-black transition duration-200 ease-in-out cursor-pointer hover:scale-[105%] mx-auto my-8">
                    <img src={img} alt="" className="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="overflow-hidden w-[16rem] h-[16rem] rounded-md shadow-md shadow-black transition duration-200 ease-in-out cursor-pointer hover:scale-[105%] mx-auto my-8">
                    <img src={img} alt="" className="" />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </section>

          {/* section perlengkapan */}
          <section className="px-4 font-urbanist">
            <h2
              className="text-2xl font-semibold text-brand-600 mt-8"
              data-aos="fade-right"
            >
              Perlengkapan yang akan di dapatkan jamaah
            </h2>
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              scrollbar={{ draggable: true }}
              spaceBetween={50}
              data-aos="fade-up"
            >
              <SwiperSlide>
                <div className="overflow-hidden rounded-xl w-[16rem] h-[20rem] shadow-md shadow-black mx-auto my-8 cursor-pointer transition duration-200  hover:scale-[105%]  ">
                  <img src={img2} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="overflow-hidden rounded-xl w-[16rem] h-[20rem] shadow-md shadow-black mx-auto my-8 cursor-pointer transition duration-200  hover:scale-[105%]  ">
                  <img src={img2} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="overflow-hidden rounded-xl w-[16rem] h-[20rem] shadow-md shadow-black mx-auto my-8 cursor-pointer transition duration-200  hover:scale-[105%]  ">
                  <img src={img2} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="overflow-hidden rounded-xl w-[16rem] h-[20rem] shadow-md shadow-black mx-auto my-8 cursor-pointer transition duration-200  hover:scale-[105%]  ">
                  <img src={img2} alt="" />
                </div>
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
