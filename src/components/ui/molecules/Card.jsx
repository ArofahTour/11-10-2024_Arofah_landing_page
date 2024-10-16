import { useEffect } from "react";

import { ArrowRight } from "react-feather";
import { Link } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

function Card(props) {
  useEffect(() => {
    AOS.init({
      duration: 400,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <>
      <div
        className="px-4 py-8 bg-neutral-50 shadow-sm text-left my-8"
        data-aos="fade-right"
      >
        <h2 className="text-3xl mb-4 text-neutral-900">{props.h2}</h2>
        <p className="text-[1.1rem] font-urbanist text-neutral-500">
          {props.p}.
        </p>

        <div className="mt-12 flex justify-end">
          <Link>
            <button
              type="button"
              className="text-[1.1rem] text-center font-urbanist text-brand-600"
            >
              Lebih detail{" "}
              <span>
                <ArrowRight className="inline" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Card;
