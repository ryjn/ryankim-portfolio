import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import swiperElements from "./swiperElements";

export const SwiperComponent = () => {
  return (
    <Swiper
      /*spaceBetween={50}*/
      spaceBetween={10}
      slidesPerView={3}
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      autoHeight={true}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
        slideShadows: false,
      }}
      modules={[EffectCoverflow, Pagination, Navigation]}
      navigation
    >
      {swiperElements.map((element) => {
        return (
          <SwiperSlide>
            <div className="p-6 rounded-xl border border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition bg-white dark:bg-neutral-800">
              <h3 className="text-xl font-bold mb-2 text-neutral-900 dark:text-white">
                {element.name}
              </h3>
              <p className="text-gray-400 mb-4">{element.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {/*{project1Tech.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all"
                    >
                      {tech}
                    </span>
                  ))}*/}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project &#8594;
                </a>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
