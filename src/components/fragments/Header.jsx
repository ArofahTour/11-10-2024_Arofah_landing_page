import { Link } from "react-router-dom";
import { useRef } from "react";

import logo from "../../assets/logo/logo-arofah-tour-palembang.png"

function Header() {
    const btn1Ref = useRef(null);
    const btn2Ref = useRef(null);
    const btn3Ref = useRef(null);

    const linkBoxRef = useRef(null);
   
    return (
        <>
        <header>
            <nav className="flex justify-between items-center fixed w-full  p-4 shadow-sm shadow-[0_1px_5px_0_hsla(0, 0%, 0%, 0.5)] z-10 backdrop-blur-sm">
                    <img src={logo} alt="arofah-logo" className="w-[6rem]" />
            
            {/* navbar links */}
                <ul className="absolute top-[100%] right-0 text-brand-600 pl-4 pb-8 pt-4 shadow-md shadow-brand-400 rounded-md   transition duration-500 ease-in-out z-10 bg-brand-100 translate-x-[15rem]" ref={linkBoxRef}>
                    <li className="text-2xl mb-8 ml-4 font-semibold mr-8 transition duration-300 hover:text-brand-400"><Link to={"/"}>Home</Link></li>
                    <li className="text-2xl mb-8 ml-4 font-semibold mr-8 transition duration-300 hover:text-brand-400"><Link to="/profile">Profile</Link></li>
                    <li className="text-2xl mb-8 ml-4 font-semibold mr-8 transition duration-300 hover:text-brand-400"><Link to={"/reqruitments"}>Persyaratan</Link></li>
                    <li className="text-2xl mb-8 ml-4 font-semibold mr-8 transition duration-300 hover:text-brand-400"><Link to={"/facility"}>Fasilitas</Link></li>
                    <li className="text-2xl mb-8 ml-4 font-semibold mr-8 transition duration-300 hover:text-brand-400"><Link to={"/payment"}>Pembayaran</Link></li>
                </ul>
                

                {/* navbar button */}
                <div className="cursor-pointer absolute top-14 right-10 lg:hidden" onClick={()=>{
                    btn2Ref.current.classList.toggle('scale-0');
                    btn1Ref.current.classList.toggle('rotate-[35deg]');
                    btn3Ref.current.classList.toggle('rotate-[-35deg]')
                    linkBoxRef.current.classList.toggle('translate-x-[15rem]');
                    }}>
                    <button className="border border-brand-600 w-9 block my-2  transition duration-300 ease-in-out origin-top-left" ref={btn1Ref}></button>
                    <button className="border border-brand-600 w-9 block my-2 transition duration-300" ref={btn2Ref}></button>
                    <button className="border border-brand-600 w-9 block my-2 transition duration-300 ease-in-out origin-bottom-left" ref={btn3Ref}></button>
                </div>


            </nav>
        </header>
        </>
    );
}

export default Header;