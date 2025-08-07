import swiperElements from "./swiperElements";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Navigation,
  Pagination,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./swiper.css";

export const SwiperComponent = () => {
  const modules = [EffectCoverflow, Navigation, Pagination, Autoplay];
  return (
    <div className="swiper">
      <Swiper
        modules={modules}
        centeredSlides={true}
        spaceBetween={10}
        slidesPerView={"auto"}
        breakpoints={{
          648: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        effect={"coverflow"}
        coverflowEffect={{ slideShadows: false, depth: 50, rotate: 20 }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
      >
        {swiperElements.map((element) => {
          return (
            <SwiperSlide key={element.id} className="swiper-card">
              <h3 className="text-xl font-bold mb-2 text-neutral-800">
                {element.name}
              </h3>
              <p className="text-neutral-800">{element.description}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
