import Mainlayout from "../components/layout/Mainlayout";
import ContactCard from "../components/ui/organism/ContactCard";
import HeroCard from "../components/ui/molecules/HeroCard";

import img1 from "../assets/img/makkah.jpg";

import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";

import img from "../assets/img/facility.jpg";

function Facility() {
  useEffect(() => {
    // Memindahkan console.log ke dalam useEffect agar tidak berada di JSX
    console.log(HeroCard);
  }, []);

  return (
    <>
      <Mainlayout>
        <main className="overflow-hidden">
          <HeroCard src={img} />
          <h1 className="text-5xl font-gilda text-center my-8">Fasilitas</h1>

          {/* fasilitas section */}
          <section className="flex flex-wrap gap-4">
            <div className="px-4">
              <h2 className=" text-2xl text-neutral-900 font-urbanist font-semibold ">
                Fasilitas yang akan didapatkan oleh jamaan arofah:
              </h2>
              <div className="">
                <img src="" alt="" className="" />
              </div>
            </div>
          </section>
          <ContactCard />
        </main>
      </Mainlayout>
    </>
  );
}

export default Facility;
