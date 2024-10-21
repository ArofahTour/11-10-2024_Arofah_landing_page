import logo from "../../assets/logo/logo_arofah-removebg.png";
import { Facebook } from "react-feather";
import { Instagram } from "react-feather";
import { Youtube } from "react-feather";
import { Phone } from "react-feather";
import { Twitter } from "react-feather";
import { Mail } from "react-feather";

import DataAos from "../ui/molecules/DataAos";

function Footer() {
  <DataAos />;
  return (
    <>
      <footer className="pt-[2rem] border-t-2 pb-4 border-brand-300 mt-12 overflow-hidden">
        <div className="ml-4 text-center">
          <img
            src={logo}
            alt="arofah-logo"
            className="w-[6rem] min-[1280px]:w-[7rem]  m-auto"
            data-aos="fade-right"
            data-aos-delay="100"
          />
          <h1
            className=" mt-4 mb-8 text-xl text-neutral-700 z-[-10]"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            Mewujudkan Impian Umroh dengan Pelayanan Terbaik.
          </h1>
        </div>
        <div>
          <div className="flex gap-4 m-8 text-brand-600  w-fit mx-auto">
            <div data-aos="fade-right" data-aos-delay="100">
              <button className="p-4 bg-brand-100 rounded-full transition duration-300 hover:-translate-y-2 hover:bg-brand-400">
                <Facebook />
              </button>
            </div>
            <div data-aos="fade-right" data-aos-delay="200">
              <button className="p-4 bg-brand-100 rounded-full transition duration-300 hover:-translate-y-2 hover:bg-brand-400">
                <Instagram />
              </button>
            </div>
            <div data-aos="fade-right" data-aos-delay="300">
              <button className="p-4 bg-brand-100 rounded-full transition duration-300 hover:-translate-y-2 hover:bg-brand-400">
                <Youtube />
              </button>
            </div>

            <div data-aos="fade-right" data-aos-delay="400">
              <button className="p-4 bg-brand-100 rounded-full transition duration-300 hover:-translate-y-2 hover:bg-brand-400">
                <Twitter />
              </button>
            </div>
          </div>
        </div>

        <div className="font-urbanist text-sm text-center font-semibold text-neutral-800 ">
          <p>Nomor induk berusaha(NIB): 0220209292964</p>
          <p>© 2024 Pt.Arofah Perdana Mandiri | All Right reserve </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
