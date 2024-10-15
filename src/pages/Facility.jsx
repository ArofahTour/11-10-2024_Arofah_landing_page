import Mainlayout from "../components/layout/Mainlayout";
import ContactCard from "../components/ui/ContactCard";
import HeroCard from "../components/ui/HeroCard";

import req from "../assets/img/10-2024/2.jpeg";

import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";

function Facility() {
  return (
    <>
      <Mainlayout>
        <main className="overflow-hidden">
          <ContactCard />
        </main>
      </Mainlayout>
    </>
  );
}

export default Facility;
