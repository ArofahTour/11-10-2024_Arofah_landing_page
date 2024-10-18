import Mainlayout from "../components/layout/Mainlayout";
import HeroCard from "../components/ui/molecules/HeroCard";

import HeroImg from "../assets/img/atm-card.jpg";
import BcaImg from "../assets/img/bca.jpg";
import packageImg1 from "../assets/img/10-2024/package_1.jpeg";

import DivCard from "../components/ui/atoms/DivCard";
import PackageImg from "../components/ui/atoms/PackageImg";
import PackageTitle from "../components/ui/atoms/PackageTitle";
import ContactCard from "../components/ui/organism/ContactCard";

import DataAos from "../components/ui/molecules/DataAos";

function Payment() {
  <DataAos />;
  return (
    <>
      <Mainlayout>
        <main className="overflow-hidden">
          <HeroCard src={HeroImg} />
          <section className="px-4">
            <h1 className="text-center font-gilda text-5xl my-8 text-brand-600 font-bold">
              Pembayaran
            </h1>

            <p className="text-xl font-urbanist text-left">
              <span className="text-brand-600 font-bold">Note: </span> Segala
              bentuk pembayaran harus dilakukan via transfer bank dengan nomor
              rekening berikut:
            </p>

            <div className="px-4 py-2 text-left">
              <PackageTitle
                title={"BANK BRI"}
                depart={"5741-01-0000240560"}
                px={"4"}
              />
              <PackageTitle
                title={"BANK MANDIRI"}
                depart={"112-000-000-7067"}
                px={"4"}
              />

              <PackageTitle
                title={"Rekening atas nama PT.AROFAH PERDANA MANDIRI"}
                px={"4"}
              />
            </div>
          </section>

          <section className="px-4 pt-8 font-urbanist">
            <h2
              className="font-gilda text-3xl  mt-12 mb-4 text-brand-600 font-semibold"
              data-aos="fade-right"
            >
              Pembatalan
            </h2>
            <p data-aos="fade-right">
              Bila terjadi sesuatu yang tidak terduga bagi calon jamaah umroh
              dan terpaksa membatalkan diri, maka akan dikenakan biaya
              pembatalan :
            </p>

            <ul className="list-decimal px-8">
              <li data-aos="fade-right">
                Pembatalan 1 minggu setelah pendaftaran dikenakan biaya 5% dari
                harga paket
              </li>
              <li data-aos="fade-right">
                Pembatalan 3 minggu setelah proses visa dikenakan biaya 10% dari
                harga paket
              </li>
              <li data-aos="fade-right">
                Pembatalan 2 minggu (setela issued / pembelian tiket) dikenakan
                biaya 50% dari harga paket
              </li>
              <li data-aos="fade-right">
                Pembatalan 1 minggu menjelang keberangkatan dikenakan biaya 75%
                dari harga paket
              </li>
            </ul>
          </section>

          <ContactCard />
        </main>
      </Mainlayout>
    </>
  );
}

export default Payment;
