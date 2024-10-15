import Mainlayout from "../components/layout/Mainlayout";
import ContactCard from "../components/ui/ContactCard";
import HeroCard from "../components/ui/HeroCard";

import img1 from "../assets/img/makkah.jpg";

import DataAos from "../components/ui/DataAos";
import DivCard from "../components/ui/DivCard";

function Paket() {
  <DataAos />;
  return (
    <>
      <Mainlayout>
        <main className="overflow-hidden">
          <HeroCard img={img1} className="top-[-10%]" />
          <h1 className="text-5xl font-gilda text-center my-8">
            Paket umroh kami
          </h1>

          <DivCard>
            <div className="w-[100%] h-[15rem] overflow-hidden relative">
              <img
                src={img1}
                alt="package-slider"
                className="absolute w-full top-[-13%] left-[0%]"
              />
            </div>
            {/* text wrap */}

            <div className=" text-[1rem] font-urbanist p-4 text-neutral-700 text-center">
              <h3 className="text-2xl">Reguler - 9 hari</h3>
              <p className="mt-2">Rp. 20,9jt</p>
            </div>
          </DivCard>

          <ContactCard />
        </main>
      </Mainlayout>
    </>
  );
}

export default Paket;
