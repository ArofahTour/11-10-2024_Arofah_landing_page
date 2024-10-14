import { Facebook } from "react-feather";
import { Instagram } from "react-feather";
import { Youtube } from "react-feather";
import { Twitter } from "react-feather";
import { Mail } from "react-feather";
import { Phone } from "react-feather";
import { PhoneCall } from "react-feather";



function SocialMedia(props) {
    return (
        <>
                  <div className="flex gap-4 m-8 text-brand-600">
                    <button className="p-4 bg-brand-100 rounded-full transition duration-300 hover:-translate-y-2 hover:bg-brand-400">{props.social}</button>
                    <button className="p-4 bg-brand-100 rounded-full transition duration-300 hover:-translate-y-2 hover:bg-brand-400"><Instagram /></button>
                    <button className="p-4 bg-brand-100 rounded-full transition duration-300 hover:-translate-y-2 hover:bg-brand-400"><Youtube /></button>
                    <button className="p-4 bg-brand-100 rounded-full transition duration-300 hover:-translate-y-2 hover:bg-brand-400"><Twitter /></button>
                </div>
        </>
    );
}

export default SocialMedia;


       