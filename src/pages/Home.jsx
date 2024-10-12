import { useState } from "react";

import {Swiper, SwiperSlide} from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Mainlayout from "../components/layout/Mainlayout";
import heroImg from "../assets/img/hero-img-removebg.png";

import img1 from "../assets/img/10-2024/package_1.jpeg"
import img2 from "../assets/img/10-2024/package_2.jpeg"
import img3 from "../assets/img/10-2024/package_3.jpeg"
import img4 from "../assets/img/10-2024/package_4.jpeg"

function Home() {

    
 
    return (
        <>
        <Mainlayout>
         <main className="pt-[8rem]  font-gilda text-xl ">
            {/* hero section - complete */}
            <section>
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
            <section className="mt-[-10rem]">
                {/* display img */}
                <div className="w-full px-4 py-8  bg-brand-600 text-neutral-100  text-center">
                    <h3 className="text-[1.1rem] font-urbanist">Raih keberkahan ibadah umroh Anda bersama Arofah Tour & Travel, mitra terpercaya menuju tanah suci!</h3>
                    <h2 className=" text-[1.4rem] border-neutral-100 border-t-2 border-b-2 my-4 py-6">Biro perjalanan umroh terdepan di Sumatera Selatan</h2>
                    <h3 className="text-[1.1rem] font-urbanist">Jadikan perjalanan umroh Anda penuh makna dan kenyamanan.</h3>
                </div>
            </section>
            {/* complete */}

            {/* package section */}
        <section className="mt-20 p-6">
                <h2 className="text-5xl font-medium">Temukan paket umroh terbaik untuk anda</h2>
                <p className="mt-4 font-urbanist text-neutral-700 text-[1.1rem]">Kami punya 2 paket menarik yang bisa anda pilih</p>
                
    
                {/* package card */}
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                scrollbar={{ draggable: true }}
                 spaceBetween={50}>

                    {/* paket 1 */}
                <SwiperSlide>  
                    <div className="w-[14rem] bg-neutral-100 m-auto my-8 rounded-md overflow-hidden shadow-sm shadow-neutral-300 transition duration-200 hover:shadow-md hover:shadow-neutral-300 hover:scale-[105%] hover:-translate-y-2">
                        <div className="w-[15rem] h-[15rem] overflow-hidden relative">
                          <img src={img1} alt="package-slider" className="absolute top-[-13%] left-[-5%]"/>
                        </div>
                    {/* text wrap */}

                        <div className=" text-[1rem] font-urbanist p-4 text-neutral-700 text-center">
                            <h3 className="text-2xl">Murah - 9 hari</h3>
                             <p className="mt-2">Rp. 20,9jt</p>
                         </div>
                    </div>

                </SwiperSlide>
                    {/* paket 1 end */}

                    {/* paket 2 */}
                <SwiperSlide>
                    
                     <div className="w-[14rem] bg-neutral-100 m-auto my-8 rounded-md overflow-hidden shadow-sm shadow-neutral-300 transition duration-200 hover:shadow-md hover:shadow-neutral-300 hover:scale-[105%] hover:-translate-y-2">
                        <div className="w-[15rem] h-[15rem] overflow-hidden relative">
                            <img src={img2} alt="package-slider" className="absolute top-[-10%] left-[-5%]"/>
                        </div>
                    {/* text wrap */}

                    <div className=" text-[1rem] font-urbanist p-4 text-neutral-700 text-center">
                    <h3 className=" text-2xl">Milad - 12 hari</h3>
                    <p className="mt-2 ">Rp. 34,5jt </p>
                    </div>
                    </div>
                </SwiperSlide>
                    {/* paket 2 end */}

                </Swiper>
                {/* package card end */}

            </section>

            {/* benefit section */}
            <section>
                <h1></h1>
                <p></p>
            </section>

            {/* card section */}
            <section>'
                <div className="">
                <h1></h1>
                <p></p>

                <h2></h2>
                </div>
                <div className="">
                <h1></h1>
                <p></p>

                <h2></h2>
                </div>
                <div className="">
                <h1></h1>
                <p></p>

                <h2></h2>
                </div>
   
            </section>

            {/* client section */}
            <section>
                <h1>partner kami</h1>
            </section>
         </main>
        </Mainlayout>
        </>
    );
}

export default Home;