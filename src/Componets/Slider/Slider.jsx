import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import img1 from "../../assets/image/l1.jpg";
import img2 from "../../assets/image/l2.jpg";
import img3 from "../../assets/image/l3.jpg";
import img4 from "../../assets/image/l4.jpg";
// import required modules
import { EffectFade, Autoplay, Pagination } from "swiper/modules";

export const Slider = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, EffectFade]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="w-[80%]" src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-[80%]" src={img2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-[80%]" src={img3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-[80%]" src={img4} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
