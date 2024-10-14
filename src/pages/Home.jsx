import { Link } from "react-router-dom";

import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";


import { ArrowRight } from "react-feather";

import {Swiper, SwiperSlide} from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Mainlayout from "../components/layout/Mainlayout";
import heroImg from "../assets/img/hero-img-removebg.png";
import Card from "../components/ui/Card";
import CardBrand from "../components/ui/CardBrand";

import img1 from "../assets/img/10-2024/package_1.jpeg"
import img2 from "../assets/img/10-2024/package_2.jpeg"
import img3 from "../assets/img/10-2024/package_3.jpeg"
import img4 from "../assets/img/10-2024/package_4.jpeg"
import partnerImg1 from "../assets/logo/partner-logo/airasia.png"
import partnerImg2 from "../assets/logo/partner-logo/emirates.png"
import partnerImg3 from "../assets/logo/partner-logo/etihad.png"
import partnerImg4 from "../assets/logo/partner-logo/garuda-indonesia.png"
import partnerImg5 from "../assets/logo/partner-logo/saudia.png"
import partnerImg6 from "../assets/logo/partner-logo/scoot.png"

function Home() {

    useEffect(() => {
        AOS.init({
          duration: 400,
          easing: "ease-out-cubic",
        });
      }, []);
    
 
    return (
        <>
        <Mainlayout>
         <main className="pt-[8rem]  font-gilda text-xl overflow-hidden" data-aos="fade-down">
            {/* hero section - complete */}
            <section >
                <h1 className="text-5xl px-4 mb-[-2.5rem]"><span className="text-brand-600">Teman terbaik</span> untuk perjalanan umroh anda.</h1>
                <div className="relative w-full h-[30rem] px-0 overflow-hidden mt-[-7rem]  ">
                    <div className="overflow-hidden w-full h-[15rem] mt-[5rem] relative">
                    <div className="bg-orange-500 w-[40rem] h-[40rem] rounded-[50%] absolute top-[20%] left-[-40%]"></div>
                <img src={heroImg} className="absolute top-[-100%] left-0 h-[34rem] w-[full]" />
                    </div>
                </div>
            </section>
            {/* complete */}

            {/* marketing section - complete */}
            <section className="mt-[-10rem]" >
                {/* display img */}
                <div className="w-full px-4 py-8  bg-brand-600 text-neutral-100  text-center">
                    <h3 className="text-[1.1rem] font-urbanist">Raih keberkahan ibadah umroh Anda bersama Arofah Tour & Travel, mitra terpercaya menuju tanah suci!</h3>
                    <h2 className=" text-[1.4rem] border-neutral-100 border-t-2 border-b-2 my-4 py-6" data-aos="fade-right">Biro perjalanan umroh terdepan di Sumatera Selatan</h2>
                    <h3 className="text-[1.1rem] font-urbanist" data-aos="fade-left">Jadikan perjalanan umroh Anda penuh makna dan kenyamanan.</h3>
                </div>
            </section>
            {/* complete */}

            {/* package section */}
            <section className="mt-20 p-6">
                <h2 className="text-5xl font-medium" data-aos="fade-right">Temukan paket umroh terbaik untuk anda</h2>
                <p className="mt-4 font-urbanist text-neutral-700 text-[1.1rem]" data-aos="fade-left">Kami punya 2 paket menarik yang bisa anda pilih</p>
                
    
                {/* package card */}
                <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                scrollbar={{ draggable: true }}
                 spaceBetween={50}
                 data-aos="fade-up">

                    {/* paket 1 */}
             <SwiperSlide>  
                <Link to={'/paket/reguler'}>
                    <div className="w-[14rem] bg-neutral-100 m-auto my-8 rounded-md overflow-hidden cursor-pointer shadow-sm shadow-neutral-300 transition duration-100 hover:shadow-black      hover:opacity-[80%] hover:scale-[90%] hover:shadow-[0_0_30px_-5px_rgba(0,0,0,0.3)]">
                        <div className="w-[15rem] h-[15rem] overflow-hidden relative">
                          <img src={img1} alt="package-slider" className="absolute top-[-13%] left-[-5%]"/>
                        </div>
                        {/* text wrap */}

                        <div className=" text-[1rem] font-urbanist p-4 text-neutral-700 text-center">
                            <h3 className="text-2xl">Reguler - 9 hari</h3>
                            <p className="mt-2">Rp. 20,9jt</p>
                         </div>
                    </div>
               </Link>
            </SwiperSlide>
                    {/* paket 1 end */}

                    {/* paket 2 */}
                <SwiperSlide>
                    <Link to={'/paket/milad'}>
            
                     <div className="w-[14rem] bg-neutral-100 m-auto my-8 rounded-md overflow-hidden cursor-pointer shadow-sm shadow-neutral-300 transition duration-100 hover:shadow-black  hover:opacity-[80%] hover:scale-[90%] hover:shadow-[0_0_30px_-5px_rgba(0,0,0,0.3)]">
                        <div className="w-[15rem] h-[15rem] overflow-hidden relative">
                            <img src={img2} alt="package-slider" className="absolute top-[-10%] left-[-5%]"/>
                        </div>
                    {/* text wrap */}

                    <div className=" text-[1rem] font-urbanist p-4 text-neutral-700 text-center">
                    <h3 className=" text-2xl">Milad - 12 hari</h3>
                    <p className="mt-2 ">Rp. 34,5jt </p>
                    </div>
                    </div>
                            
                    </Link>
                </SwiperSlide>
                    {/* paket 2 end */}

                </Swiper>
                {/* package card end */}

            </section>

            {/* benefit section */}
            <section className="text-center mt-20" >
                <h2 className="text-4xl text-neutral-900" data-aos="fade-down">Kenapa harus memilih kami?</h2>
                <p className="m-4 text-[1.2rem] font-urbanist" data-aos="fade-right">Sejak tahun 2013, Arofah Tour & Travel telah mendampingi ribuan jamaah dalam perjalanan suci ke tanah haram. Kepercayaan jamaah dari berbagai penjuru adalah bukti nyata dari pelayanan berkualitas yang kami berikan. Dengan pengalaman dan komitmen kami, Arofah terus menjadi pilihan utama, dan sekarang saatnya Anda memilih kami sebagai partner perjalanan ibadah Anda!</p>

                <Card h2={' Layanan Terpadu dan Nyaman'} p={' Kami menyediakan layanan yang menyeluruh untuk kenyamanan dan fokus ibadah Anda.'}  />
                <CardBrand h2={`Pembimbing Terbaik, Pengalaman Terbaik`} p={`Perjalanan ibadah Anda akan berkesan dengan pembimbing terbaik yang siap mendampingi.`} />
                <Card h2={'Komitmen pada Kualitas dan Kepuasan Jamaah'} p={`Kepuasan Anda adalah prioritas kami.`} />


            </section>


            {/* partner section */}
            <section className="mt-20" data-aos="fade-down">
                <h1 className="text-4xl text-center mb-8">Partner kami</h1>

                <div className="flex justify-center flex-wrap items-center gap-8 p-4">
                    <img src={partnerImg1} alt="partner-logo" className="w-[6rem]" data-aos="fade-right" data-aos-delay="100" />
                    <img src={partnerImg2} alt="partner-logo" className="w-[6rem]" data-aos="fade-right" data-aos-delay="200" />
                    <img src={partnerImg3} alt="partner-logo" className="w-[6rem]" data-aos="fade-right" data-aos-delay="300" />
                    <img src={partnerImg4} alt="partner-logo" className="w-[6rem]" data-aos="fade-right" data-aos-delay="400" />
                    <img src={partnerImg5} alt="partner-logo" className="w-[6rem]" data-aos="fade-right" data-aos-delay="450" />
                    <img src={partnerImg6} alt="partner-logo" className="w-[6rem]" data-aos="fade-right" data-aos-delay="500" />
                </div>
            </section>

            {/* contact section */}
            <section className="mt-20 ">
                <div className="p-4">
                    <h2 className="text-5xl" data-aos="fade-right">Dapatkan promo terbaik kami sekarang!</h2>
                    
                    <Link className=" hover:opacity-[80%] transition duration-200">
                    <button className="  text-md font-urbanist bg-brand-600 text-white-100 px-8 py-4 rounded-md mt-8  " data-aos="fade-right">Hubungi kami</button>            
                    </Link>
                </div>
            </section>
         </main>
        </Mainlayout>
        </>
    );
}

export default Home;