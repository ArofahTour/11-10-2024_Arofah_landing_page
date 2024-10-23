import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function ImgCard({ img, onClick }) {
  useEffect(() => {
    AOS.init({
      duration: 400,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <>
      <div
        onClick={onClick}
        className=" rounded-md w-[7rem] h-[7rem] cursor-pointer transition duration-200  hover:opacity-80 overflow-hidden"
        data-aos="fade-right"
      >
        <img src={img} alt="jamaah-arofah" className=" w-full object-cover" />
      </div>
    </>
  );
}

export default ImgCard;
