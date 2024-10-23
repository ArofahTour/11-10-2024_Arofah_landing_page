import Mainlayout from "../components/layout/Mainlayout";
import ContactCard from "../components/ui/organism/ContactCard";
import HeroCard from "../components/ui/molecules/HeroCard";

import img1p from "../assets/img/gallery/1p.jpeg";
import img2p from "../assets/img/gallery/2p.jpeg";
import img3p from "../assets/img/gallery/3p.jpeg";
import img4p from "../assets/img/gallery/4p.jpeg";
import img5p from "../assets/img/gallery/5p.jpeg";
import img6p from "../assets/img/gallery/6p.jpeg";
import img7p from "../assets/img/gallery/7p.jpeg";

import img8p from "../assets/img/gallery/8p.jpeg";
import img9p from "../assets/img/gallery/9p.jpeg";

import img10p from "../assets/img/gallery/10p.jpeg";
import img11p from "../assets/img/gallery/11p.jpeg";
import img12p from "../assets/img/gallery/12p.jpeg";
import img13p from "../assets/img/gallery/13p.jpeg";
import img14p from "../assets/img/gallery/14p.jpeg";
import img15p from "../assets/img/gallery/15p.jpeg";
import img16p from "../assets/img/gallery/16p.jpeg";
import img17p from "../assets/img/gallery/17p.jpeg";
import img18p from "../assets/img/gallery/18p.jpeg";
import img19p from "../assets/img/gallery/19p.jpeg";
import img20p from "../assets/img/gallery/20p.jpeg";
import img21p from "../assets/img/gallery/21p.jpeg";
import img22p from "../assets/img/gallery/22p.jpeg";
import img23p from "../assets/img/gallery/23p.jpeg";
import img24p from "../assets/img/gallery/24p.jpeg";
import img25p from "../assets/img/gallery/25p.jpeg";
import img26p from "../assets/img/gallery/26p.jpeg";
import img27p from "../assets/img/gallery/27p.jpeg";
import img28p from "../assets/img/gallery/28p.jpeg";
import img29p from "../assets/img/gallery/29p.jpeg";
import img30p from "../assets/img/gallery/30p.jpeg";
import img31p from "../assets/img/gallery/31p.jpeg";

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
            className="hidden fixed w-full h-full bg-[hsla(0,0%,0%,0.6)] z-50 items-center justify-center"
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
            <ImgCard img={img12p} onClick={() => imgClicked(img12p)} />
            <ImgCard img={img13p} onClick={() => imgClicked(img13p)} />
            <ImgCard img={img14p} onClick={() => imgClicked(img14p)} />
            <ImgCard img={img15p} onClick={() => imgClicked(img15p)} />
            <ImgCard img={img16p} onClick={() => imgClicked(img16p)} />
            <ImgCard img={img17p} onClick={() => imgClicked(img17p)} />
            <ImgCard img={img18p} onClick={() => imgClicked(img18p)} />
            <ImgCard img={img19p} onClick={() => imgClicked(img19p)} />
            <ImgCard img={img20p} onClick={() => imgClicked(img20p)} />
            <ImgCard img={img21p} onClick={() => imgClicked(img21p)} />
            <ImgCard img={img22p} onClick={() => imgClicked(img22p)} />
            <ImgCard img={img23p} onClick={() => imgClicked(img23p)} />
            <ImgCard img={img24p} onClick={() => imgClicked(img24p)} />
            <ImgCard img={img25p} onClick={() => imgClicked(img25p)} />
            <ImgCard img={img26p} onClick={() => imgClicked(img26p)} />
            <ImgCard img={img27p} onClick={() => imgClicked(img27p)} />
            <ImgCard img={img28p} onClick={() => imgClicked(img28p)} />
            <ImgCard img={img29p} onClick={() => imgClicked(img29p)} />
            <ImgCard img={img30p} onClick={() => imgClicked(img30p)} />
            <ImgCard img={img31p} onClick={() => imgClicked(img31p)} />
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
