import logo from "../../assets/logo/logo_arofah-removebg.png"
import { Facebook } from "react-feather";
import { Instagram } from "react-feather";
import { Youtube } from "react-feather";
import { Phone } from "react-feather";
import { Twitter } from "react-feather";
import { Mail } from "react-feather";


function Footer() {
    return (
        <>
        <footer className="pt-[2rem] border-t-2 pb-4 border-brand-300 mt-12">
            <div className="ml-4">
            <img src={logo} alt="arofah-logo" className="w-[6rem]" />
            <h1 className=" mt-4 mb-8 text-xl text-neutral-700 z-[-10]">Mewujudkan Impian Umroh dengan Pelayanan Terbaik.</h1>
            </div>
            <div>
                <div className="flex gap-4 m-8 text-brand-600">
                    <button className="p-4 bg-brand-100 rounded-full transition duration-300 hover:-translate-y-2 hover:bg-brand-400"><Facebook /></button>
                    <button className="p-4 bg-brand-100 rounded-full transition duration-300 hover:-translate-y-2 hover:bg-brand-400"><Instagram /></button>
                    <button className="p-4 bg-brand-100 rounded-full transition duration-300 hover:-translate-y-2 hover:bg-brand-400"><Youtube /></button>
                    <button className="p-4 bg-brand-100 rounded-full transition duration-300 hover:-translate-y-2 hover:bg-brand-400"><Twitter /></button>
                </div>
            </div>

        </footer>
        </>
    );
}

export default Footer;