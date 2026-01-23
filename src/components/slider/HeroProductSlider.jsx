import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { slidesData } from "../data/slidesData";

export default function HeroProductSlider() {
  return (
    <section
      className="
        w-full
        h-[1230px]
        lg:h-[711px]
        border border-[#DEDEDE]
        rounded-[5px]
        overflow-hidden
        [--swiper-navigation-color:#FFFFFF]
      "
    >
      <Swiper modules={[Navigation]} navigation loop className="h-full">
        {slidesData.map((slide) => (
          <SwiperSlide key={slide.id} className="h-full">
            {/* SLIDE */}
            <div
              className="
                flex
                h-full
                w-full
                items-center
                bg-[#23856D]
                bg-contain
                bg-no-repeat
                bg-center"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              {/* CONTAINER */}
              <div className="mx-auto w-full max-w-[1050px] px-6">
                {/* CONTENT */}
                <div
                  className="
                    flex
                    flex-col
                    items-center
                    text-center
                    gap-[35px]
                    max-w-[415px]
                    lg:items-start
                    lg:text-left
                  "
                >
                  <h5 className="font-montserrat text-base font-bold tracking-[0.1px] text-white">
                    {slide.eyebrow}
                  </h5>

                  <h1 className="font-montserrat text-[40px] font-bold leading-[50px] tracking-[0.2px] text-white">
                    {slide.title}
                  </h1>

                  {slide.description && (
                    <p className="font-montserrat text-xl leading-[30px] tracking-[0.2px] text-white">
                      {slide.description}
                    </p>
                  )}

                  {slide.price ? (
                    <div className="flex flex-col gap-5 items-center lg:items-start">
                      <span className="font-montserrat text-2xl font-bold text-white">
                        {slide.price}
                      </span>

                      <button className="px-10 py-[15px] bg-[#2DC071] rounded-[5px] font-montserrat font-bold text-sm text-white">
                        {slide.buttonText}
                      </button>
                    </div>
                  ) : (
                    <button className="px-10 py-[15px] bg-[#2DC071] rounded-[5px] font-montserrat font-bold text-sm text-white">
                      {slide.buttonText}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
