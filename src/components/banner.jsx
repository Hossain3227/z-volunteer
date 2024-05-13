
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slides from './slides';

export default function Banner() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <Slides image={'https://i.ibb.co/GcBD8sB/larm-rmah-AEa-TUnvneik-unsplash.jpg'}
            text= 'Get started today' ptext='help the children when they are in need'></Slides>
        </SwiperSlide>
        <SwiperSlide>
        <Slides image={'https://i.ibb.co/WWwhc85/z-FQ1-L770x6l8-unsplash.jpg'}
            text= 'Our helping to the world' ptext='Your effort in helping someone will definitely make their and your day brighter'></Slides>
        </SwiperSlide>
        <SwiperSlide>
        <Slides image={'https://i.ibb.co/3fsGDNR/aaron-doucett-Hkbe-Lx-OJlqk-unsplash.jpg'}
            text= 'Join the events to end children suffering' ptext='Your donation and participation is others inspiration'></Slides>
        </SwiperSlide>
        
       
      </Swiper>
    </>
  );
}
