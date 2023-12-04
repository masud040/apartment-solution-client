import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";

import banner1 from "../../../assets/images/banner/1.png";
import banner2 from "../../../assets/images/banner/2.png";
import banner3 from "../../../assets/images/banner/3.png";
import banner4 from "../../../assets/images/banner/4.png";

import banner5 from "../../../assets/images/banner/5.jpg";
import banner6 from "../../../assets/images/banner/6.jpg";

const Banner = () => {
  return (
    <div>
      <Swiper
        className="mySwiper "
        speed={4000}
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 2500 }}
      >
        <SwiperSlide>
          <img className="h-[400px] md:h-[600px] w-full" src={banner2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[400px] md:h-[600px] w-full" src={banner3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[400px] md:h-[600px] w-full" src={banner1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[400px] md:h-[600px] w-full" src={banner4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[400px] md:h-[600px] w-full" src={banner5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[400px] md:h-[600px] w-full" src={banner6} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
