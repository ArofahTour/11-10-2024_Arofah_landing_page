import Mainlayout from "../components/layout/Mainlayout";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Profile() {

    return (
        <>
           <Mainlayout>
            <div className="w-[10rem] h-[10rem] min-[600px]:bg-green-500 sm:bg-red-500 md:bg-blue-500 xl:bg-yellow-500"></div>
            </Mainlayout>
        </>
    );
}

export default Profile;