import H2small from "../atoms/H2small";

function FacilityMilad() {
  return (
    <>
      <section className="px-4">
        <H2small h2={"Fasilitas"} />
        <div className="p-4 gap-4 font-urbanist">
          <ul className="list-disc">
            <li>Tiket CitiLink /Pelita Air PLM-JKT, Tiket Saudi JKT-MED </li>
            <li>Visa Umroh</li>
            <li>Bus AC</li>
            <li>Hotel Mekkah ⭐5 (Olayan Ajyad/Le Meridien /Setaraf)</li>
            <li>Hotel Madinah ⭐4 (Abraj Tabah/Sanabel/Setaraf)</li>
            <li>Muthowif Bahasa Indonesia</li>
            <li>Citytour Mekkah & Madinah</li>
            <li>City Tour Thaif</li>
            <li>Kereta Cepat Madinah - Mekkah</li>
            <li>Makan 3x Sehari</li>
            <li>Manasik 2x</li>
            <li>perlengkapan muhibbin</li>
            <ul className="list-decimal ml-4">
              <li>Koper Besar ukuran 24 </li>
              <li>Koper Kecil ukuran 16</li>
              <li>Tas Jinjing</li>
              <li>Bantal Leher</li>
              <li>Bahan seragam</li>
              <li>Buku Manasik</li>
              <li>Sal Arofah</li>
              <li>Id Card</li>
              <li>Zam - zam 5 liter</li>
              <li>Ihrom/Mukena</li>
            </ul>
          </ul>

          <p className="font-urbanist mt-8 text-xl">
            Fasilitas belum termasuk:
          </p>
          <ul className="list-disc px-8">
            <li>Pasport jika belum ada</li>
            <li>Kursi Roda</li>
            <li>⁠Pengeluaran pribadi</li>
            <li>⁠Loundry</li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default FacilityMilad;
