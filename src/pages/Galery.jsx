import Mainlayout from "../components/layout/Mainlayout";
import ContactCard from "../components/ui/organism/ContactCard";
import HeroCard from "../components/ui/molecules/HeroCard";

import HeroImg from "../assets/img/10-2024/3.jpeg";
import img1 from "../assets/img/gallery/1.jpeg";
import img2 from "../assets/img/gallery/2.jpeg";
import img1p from "../assets/img/gallery/1p.jpeg";
import img2p from "../assets/img/gallery/2p.jpeg";
import img3p from "../assets/img/gallery/3p.jpeg";
import img4p from "../assets/img/gallery/4p.jpeg";
import img5p from "../assets/img/gallery/5p.jpeg";
import img6p from "../assets/img/gallery/6p.jpeg";
import img7p from "../assets/img/gallery/7p.jpeg";
import img3 from "../assets/img/gallery/3.jpeg";
import img4 from "../assets/img/gallery/4.jpeg";
import img5 from "../assets/img/gallery/5.jpeg";
import img8p from "../assets/img/gallery/8p.jpeg";
import img9p from "../assets/img/gallery/9p.jpeg";
import img6 from "../assets/img/gallery/6.jpeg";
import img7 from "../assets/img/gallery/7.jpeg";
import img8 from "../assets/img/gallery/8.jpeg";
import img10p from "../assets/img/gallery/9p.jpeg";
import img11p from "../assets/img/gallery/10p.jpeg";

import vid1 from "../assets/video/1.mp4";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import ImgCard from "../components/ui/molecules/ImgCard";

import { useRef, useState } from "react";

function Galery() {
  const overlayContainerRef = useRef(null);
  const [overlayImg, setOverlayImg] = useState(null);

  function imgClicked(img) {
    setOverlayImg(img);
    overlayContainerRef.current.classList.remove("hidden");
    overlayContainerRef.current.classList.add("flex");
  }

  function closeOverlay() {
    setOverlayImg(null);
    overlayContainerRef.current.classList.add("hidden");
    overlayContainerRef.current.classList.remove("flex");
  }
  return (
    <>
      <Mainlayout>
        <main className="overflow-hidden relative">
          {/* overlay image */}
          <section
            ref={overlayContainerRef}
            onClick={() => closeOverlay()}
            className="hidden fixed top-0 left-0 right-0 bottom-0 bg-[hsla(0,0%,0%,0.6)] z-50 items-center justify-center"
          >
            <div className=" rounded-xl w-[80%] overflow-hidden">
              <img src={overlayImg} alt="" />
            </div>
          </section>

          {/* gallery section */}
          <section className="px-4 py-[8rem]">
            <h1 className="text-5xl font-gilda font-bold text-center text-brand-600 my-8">
              Perjalanan umroh Bersama Kami...
            </h1>
          </section>

          {/* gallery */}
          <section className="grid grid-cols-3 px-2 gap-[1rem] mb-[10rem]">
            <ImgCard img={img1p} onClick={() => imgClicked(img1p)} />
            <ImgCard img={img2p} onClick={() => imgClicked(img2p)} />
            <ImgCard img={img3p} onClick={() => imgClicked(img3p)} />
            <ImgCard img={img4p} onClick={() => imgClicked(img4p)} />
            <ImgCard img={img5p} onClick={() => imgClicked(img5p)} />
            <ImgCard img={img6p} onClick={() => imgClicked(img6p)} />
            <ImgCard img={img7p} onClick={() => imgClicked(img7p)} />
            <ImgCard img={img8p} onClick={() => imgClicked(img8p)} />
            <ImgCard img={img9p} onClick={() => imgClicked(img9p)} />
            <ImgCard img={img10p} onClick={() => imgClicked(img10p)} />
            <ImgCard img={img11p} onClick={() => imgClicked(img11p)} />
          </section>

          <h2 className="text-5xl font-gilda font-bold text-center text-brand-600 my-8">
            Terima kasih telah mempercayakan perjalanan umroh Anda kepada Arofah
          </h2>
        </main>
      </Mainlayout>
    </>
  );
}

export default Galery;
