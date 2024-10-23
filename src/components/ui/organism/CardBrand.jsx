import { useEffect } from "react";

import { ArrowRight } from "react-feather";
import { Link } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

function CardBrand(props) {
  useEffect(() => {
    AOS.init({
      duration: 400,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <>
      <div
        className="px-4 py-8 bg-brand-600 shadow-sm text-left my-8"
        data-aos="fade-right"
      >
        <h2 className="text-3xl mb-4 text-white-100">{props.h2}</h2>
        <p className="text-[1.1rem] font-urbanist text-white-300">{props.p}.</p>
      </div>
    </>
  );
}

export default CardBrand;
