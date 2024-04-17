import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import img1 from "../../assets/image/l1.jpg";
import img2 from "../../assets/image/l2.jpg";
import img3 from "../../assets/image/l3.jpg";
import img4 from "../../assets/image/l4.jpg";
// import required modules
import { EffectFade, Autoplay, Pagination, Navigation } from "swiper/modules";

export const Slider = () => {
  return (
    <>
      <Swiper
        navigation={true}
        effect="fade"
        spaceBetween={30}
        slidesPerView={1}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, EffectFade, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            className="w-[90%] max-h-[500px] mx-auto rounded-xl"
            src={img1}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-[90%] max-h-[500px] mx-auto rounded-xl"
            src={img2}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-[90%] max-h-[500px] mx-auto rounded-xl"
            src={img3}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-[90%] max-h-[500px] mx-auto rounded-xl"
            src={img4}
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
