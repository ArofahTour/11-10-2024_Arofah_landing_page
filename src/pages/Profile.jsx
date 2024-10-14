import { Link } from "react-router-dom";

import Mainlayout from "../components/layout/Mainlayout";

import { Mail } from "react-feather";
import { Phone } from "react-feather";

import heroImg from "../assets/img/10-2024/1.jpeg"

function Profile() {

    return (
        <>
           <Mainlayout>
                <main>
                    {/* hero section */}
                    <section className="pt-[6rem]">
                        <div className="overflow-hidden h-[20rem] relative flex items-center justify-center">
                            <div className="bg-[rgba(0,0,0,0.3)] w-full h-full absolute z-[1]"></div>
                            <img src={heroImg} alt="hero-img" className="absolute top-[0%] left-[0%] z[-1] min-[390px]:top-[-10%]" />
                                <h1 className="absolute text-5xl font-gilda text-white-100 z-[2]">Tentang kami</h1>
                        </div>
                    </section>

                    {/* about us section */}
                    <section className="px-4 mt-16 text-center ">
                        <h2 className="font-gilda text-4xl mb-8">Assalamualaikum Warahmatullahi Wabarakatuh.</h2>
                        <p className="font-urbanist">
                            Selamat datang di Arofah Tour & Travel, mitra Anda dalam memenuhi panggilan Allah ke tanah suci. Kami hadir dengan tujuan mulia untuk membantu dan membimbing Bapak/Ibu dalam menjalankan ibadah umroh, agar dapat lebih mendekatkan diri kepada Allah dan membersihkan hati di rumah-Nya.
                            Di Arofah Tour, kami berkomitmen untuk menjaga kualitas dan kenyamanan setiap jamaah, sehingga Anda dapat melaksanakan ibadah dengan khusyuk dan tenang.
                            Kami berdiri dengan niat yang tulus untuk membantu jamaah dalam perjalanan suci ini. Dengan kepercayaan yang telah diberikan oleh jamaah umroh Arofah, kami merasa terhormat untuk menjadi bagian dari keluarga Arofah.
                            Labbaik Allahuma Labbaik, Labaika kala sharikah laka baik. Innalhamda, wanik mata, Lakawalmulk, Lasari kala.
                            Arofah Tour & Travel Palembang siap menjadi sahabat setia Anda dalam setiap langkah menuju tanah suci.</p>
                    </section>

                    {/* visi and misi section */}
                    <section className="px-4">
                    <div className="px-4 py-8 bg-neutral-50 shadow-sm text-left my-8" data-aos="fade-right">
                    <span className="font-gilda text-5xl absolute text-white-900">"</span>
                     <h2 className="text-3xl mb-4 text-neutral-900 text-center font-gilda">Visi Kami</h2>
                      <p className="text-[1.1rem] font-urbanist text-neutral-500 text-center">"Menjadi biro perjalanan umroh terdepan di Sumatera Selatan yang menghadirkan pelayanan jasa berkualitas dalam menyelenggarakan perjalanan ibadah umroh demi mencapai kesempurnaan dalam beribadah"</p>
                    </div>

                    <div className="px-4 py-8 bg-brand-600 shadow-sm text-left my-8" data-aos="fade-right">
                    <span className="font-gilda text-5xl absolute text-white-100">"</span>
                     <h2 className="text-3xl mb-4 text-white-100 text-center font-gilda">Misi Kami</h2>
                      <p className="text-[1.1rem] font-urbanist text-white-300 text-center">"Menjadi biro perjalanan umroh terdepan di Sumatera Selatan yang menghadirkan pelayanan jasa berkualitas dalam menyelenggarakan perjalanan ibadah umroh demi mencapai kesempurnaan dalam beribadah"</p>
                      <li className="font-urbanist">Memberikan kemudahan bagi jamaah dengan menghadirkan layanan terpadu baik dalam penyelenggaraan perjalanan ibadah maupun dalam bentuk pelayanan lainnya.</li>
                      <li className="font-urbanist">Memberikan alternatif dan solusi terbaik terutama dalam pelayanan perjalanan ibadah umroh sesuai dengan tuntunan Al Qur'an dan sunnah</li>
                    </div>
                      

                        <h2 className="font-gilda text-2xl font-semibold my-4">Misi kami</h2>
                            <ul>
                                <li className="font-urbanist">Memberikan kemudahan bagi jamaah dengan menghadirkan layanan terpadu baik dalam penyelenggaraan perjalanan ibadah maupun dalam bentuk pelayanan lainnya.</li>
                                <li className="font-urbanist">Memberikan alternatif dan solusi terbaik terutama dalam pelayanan perjalanan ibadah umroh sesuai dengan tuntunan Al Qur'an dan sunnah</li>
                            </ul>
                    </section>

                    {/* organization structure section */}
                    <section className="px-4">
                        <h2 className="text-4xl font-gilda capitalize mt-16 mb-8 text-center">struktur organisasi</h2>
                    
                        
                        <div className="font-urbanist my-4">
                            <h3 className="text-2xl ">Komisaris</h3>
                            <p>M.Nadif</p>
                        </div>
                        <div className="font-urbanist my-4">
                            <h3 className="text-2xl ">Direktur</h3>
                            <p>Muhammad yusuf shahab</p>
                        </div>
                        <div className="font-urbanist my-4">
                            <h3 className="text-2xl ">Staff administrasi</h3>
                            <p>Muznah daniah</p>
                            <p>Fadel</p>
                        </div>
                        <div className="font-urbanist my-4">
                            <h3 className="text-2xl ">Pembimbing</h3>
                            <p>Ust. Bagir</p>
                            <p>Ust. Muhammad</p>
                        </div>
                    </section>

                    {/* contact section */}
                    <section className="px-4">
                        <h2 className="text-4xl font-gilda mt-[5rem] mb-8">Hubungi kami</h2>

                        {/* map */}
                        <div className="overflow-hidden pb-8 relative">
                        <iframe className="w-full h-full left-0 top-0 " src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2369.163700912954!2d104.77066210512642!3d-2.974617636009635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e3b770bbcf28c77%3A0x19d3e4d3dc28d606!2sArofah%20Tour%20Palembang!5e0!3m2!1sen!2sid!4v1728943955899!5m2!1sen!2sid" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="arofah map"></iframe>
                        </div>
                        {/* contact */}
                        <div className="flex gap-4 justify-left text-brand-600">
                        <button className="p-4 bg-brand-100 rounded-full transition duration-300 hover:-translate-y-2 hover:bg-brand-400"><Phone /></button>
                        <button className="p-4 bg-brand-100 rounded-full transition duration-300 hover:-translate-y-2 hover:bg-brand-400"><Mail/></button>
                        </div>
        
                    </section>

                </main>
            </Mainlayout>
        </>
    );
}

export default Profile;