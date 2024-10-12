import Mainlayout from "../components/layout/Mainlayout";
import heroImg from "../assets/img/hero-img-removebg.png";

import img1 from "../assets/img/slider-arofah-tour-1.jpg"
import img2 from "../assets/img/slider-arofah-tour-2.jpg"


function Home() {

    const sliders = [{img1},{img2}];
 
    return (
        <>
        <Mainlayout>
         <main className="pt-[10rem]  font-gilda text-xl ">
            {/* hero section */}
            <section>
                <h1 className="text-5xl px-4 mb-[-2.5rem]"><span className="text-brand-600">Teman terbaik</span> untuk perjalanan umroh anda.</h1>
                <div className="relative w-full h-[30rem] px-0 overflow-hidden mt-[-7rem]  ">
                    <div className="overflow-hidden w-full h-[15rem] mt-[5rem] relative">
                    <div className="bg-orange-500 w-[40rem] h-[40rem] rounded-[50%] absolute top-[20%] left-[-40%]"></div>
                <img src={heroImg} className="absolute top-[-100%] left-0 h-[34rem] w-[full]" />
                    </div>
                </div>
            </section>
            {/* end */}

            {/* marketing section */}
            <section className="mt-[-10rem]">
                {/* display img */}
                <div className="w-full px-4 py-8  bg-brand-600 text-neutral-100  text-center">
                    <h3 className="text-[1.1rem] font-urbanist">Raih keberkahan ibadah umroh Anda bersama Arofah Tour & Travel, mitra terpercaya menuju tanah suci!</h3>
                    <h2 className=" text-[1.4rem] border-neutral-100 border-t-2 border-b-2 my-4 py-6">Biro perjalanan umroh terdepan di Sumatera Selatan</h2>
                    <h3 className="text-[1.1rem] font-urbanist">Jadikan perjalanan umroh Anda penuh makna dan kenyamanan.</h3>
                </div>
            </section>
            {/* end */}

            {/* package section */}
            <section>
                <h1>Temukan paket umroh terbaik anda</h1>
                <p></p>
                
                {/* package card */}
                <div>
                    <img src="" alt="package-slider" />
                    <h3></h3>
                    <p></p>
                </div>
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