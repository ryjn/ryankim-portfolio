
    <div className="max-w-5xl mx-auto px-4 py-6">
      <Swiper
        modules={[EffectCoverflow, Pagination, Navigation]}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: false,
        }}
        navigation
        pagination={{ clickable: true }}
      >
        {swiperElements.map((element) => {
          return (
            <SwiperSlide>
              <div className="w-full h-90 p-6 rounded-xl border border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition bg-white dark:bg-neutral-800">
                <h3 className="text-xl font-bold mb-2 text-neutral-900 dark:text-white">
                  {element.name}
                </h3>
                <p className="text-gray-400 mb-4">{element.description}</p>
                {/*}<div className="flex flex-wrap gap-2 mb-4">
                {project1Tech.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all"
                    >
                      {tech}
                    </span>
                  ))}
              </div>*/}
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


    import Swiper from "swiper";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import swiperElements from "./swiperElements";

export const SwiperComponent = () => {
  const swiper = new Swiper(".swiper", {
    modules: [EffectCoverflow, Pagination, Navigation, Autoplay],
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      640: {
        slidesPerView: 3,
      },
    },
    effect: "coverflow",
    coverflowEffect: {
      slideShadows: false,
      depth: 100,
      rotate: 20,
    },
    grabCursor: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  });
  return (
    <div className="swiper">
      <div className="swiper-wrapper">
        {swiperElements.map((element) => {
          return (
            <div
              className="swiper-slide flex justify-center items-center text-neutral-800 dark:text-white bg-white dark:bg-neutral-800 rounded-xl border border-blue-500/30 p-6"
              key={element.id}
            >
              <h3 className="text-xl font-bold mb-2 text-neutral-900 dark:text-white">
                {element.name}
              </h3>
              <p className="text-gray-400 mb-4">{element.description}</p>
            </div>
          );
        })}
      </div>
      <div className="swiper-pagination"></div>
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </div>
  );
};
