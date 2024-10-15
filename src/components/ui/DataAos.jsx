import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function DataAos() {
  useEffect(() => {
    AOS.init({
      duration: 400,
      easing: "ease-out-cubic",
    });
  }, []);
  return <></>;
}

export default DataAos;
