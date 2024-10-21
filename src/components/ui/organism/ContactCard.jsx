import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";

import { Phone } from "react-feather";
import { Mail } from "react-feather";

function ContactCard() {
  useEffect(() => {
    AOS.init({
      duration: 400,
      easing: "ease-out-cubic",
    });
  }, []);

  const phoneNumber = "6281366921041";
  const email = "arofah.tourtravel1919@gmail.com";
  const message = "Assalamualaikum bapak/ibu, saya mau daftar umroh"; // Teks yang ingin dikirim
  const encodedMessage = encodeURIComponent(message); // Menyandikan teks

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  return (
    <>
      <section className="px-4">
        <h2
          className="text-4xl font-gilda mt-[5rem] mb-8 text-center"
          data-aos="fade-up"
        >
          Hubungi kami
        </h2>

        {/* map */}
        <div className="overflow-hidden pb-8 relative" data-aos="fade-up">
          <iframe
            className="w-full h-full left-0 top-0 "
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2369.163700912954!2d104.77066210512642!3d-2.974617636009635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e3b770bbcf28c77%3A0x19d3e4d3dc28d606!2sArofah%20Tour%20Palembang!5e0!3m2!1sen!2sid!4v1728943955899!5m2!1sen!2sid"
            width="600"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="arofah map"
          ></iframe>
        </div>
        {/* contact */}
        <div className="flex gap-4 justify-evenly text-brand-600">
          <div data-aos="fade-right" data-aos-delay="100">
            <button className="p-4 bg-brand-100 rounded-full transition duration-300 hover:-translate-y-2 hover:bg-brand-400">
              <Phone />
            </button>
          </div>

          <div data-aos="fade-right" data-aos-delay="250">
            <a href={`mailto:${email}`}>
              <button className="p-4 bg-brand-100 rounded-full transition duration-300 hover:-translate-y-2 hover:bg-brand-400">
                <Mail />
              </button>
            </a>
          </div>

          <div data-aos="fade-left" data-aos-delay="350">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <button className="p-4 w-full bg-brand-600 text-white-100 rounded-full transition duration-300 hover:-translate-y-2 hover:bg-brand-400 font-urbanist font-semibold ">
                Daftar sekarang!
              </button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactCard;
