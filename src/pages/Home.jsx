import Mainlayout from "../components/layout/Mainlayout";
import heroImg from "../assets/img/hero-img-removebg.png"

function Home() {
    return (
        <>
        <Mainlayout>
         <main className="pt-[10rem]  font-gilda text-xl ">
            {/* hero section */}
            <section>
                <h1 className="text-5xl px-4 mb-[-2.5rem]"><span className="text-brand-600">Teman terbaik</span> untuk perjalanan umroh anda.</h1>
                <div className="relative w-full h-[30rem] px-0 overflow-hidden  ">
                    <div className="overflow-hidden w-full h-[20rem] relative">
                        <div className="bg-orange-500 w-[40rem] h-[40rem] rounded-[50%] absolute top-[10%] left-[-40%]"></div>
                    </div>
                <img src={heroImg} className="absolute top-[-60%] left-0" />
                </div>
            </section>
         </main>
        </Mainlayout>
        </>
    );
}

export default Home;