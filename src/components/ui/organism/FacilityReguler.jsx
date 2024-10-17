import H2small from "../atoms/H2small";

function FacilityReguler() {
  return (
    <>
      <section className="px-4">
        <H2small h2={"Fasilitas"} />
        <div className="p-4 gap-4 font-urbanist">
          <ul className="list-disc">
            <li>Tiket Pesawat INDIGO </li>
            <li>Visa Umroh</li>
            <li>Bus AC</li>
            <li>Hotel Mekkah</li>
            <li>Hotel Madinah </li>
            <li>Muthowif Bahasa Indonesia</li>
            <li>Citytour Mekkah & Madinah</li>
            <li>Makan 3x Sehari</li>
            <li>Manasik 2x</li>
            <li>perlengkapan muhibbin</li>
            <ul className="list-decimal ml-4">
              <li>Sarung Arofah Koper 24</li>
              <li>Bahan seragam</li>
              <li>Buku Manasik</li>
              <li>Sal Arofah</li>
              <li>Id Card</li>
              <li>Zam - zam 5 liter</li>
            </ul>
          </ul>
        </div>
      </section>
    </>
  );
}

export default FacilityReguler;
