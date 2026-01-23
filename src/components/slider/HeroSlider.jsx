import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function HeroSlider() {
  return (
    <section
      className="w-full overflow-hidden rounded-[5px] border border-[#DEDEDE]"
      style={{ "--swiper-navigation-color": "#FFFFFF" }}
    >
      <Swiper
        modules={[Navigation]}
        navigation
        loop
        className="h-[753px] lg:h-[716px]"
      >
        <SwiperSlide className="h-full">
          <div
            className="relative flex h-full w-full bg-cover bg-center"
            style={{ backgroundImage: "url('/images/homePage/header.jpg')" }}
          >
            {/* overlay */}
            <div className="absolute inset-0" />

            {/* content */}
            <div className="relative z-10 mx-auto flex h-full w-full max-w-[1050px] flex-col items-center justify-center gap-4 px-6 text-center lg:items-start lg:text-left">
              <h5 className="font-montserrat text-base font-bold leading-6 tracking-[0.1px] text-white">
                SUMMER 2026
              </h5>

              <h1 className="font-montserrat text-[40px] font-bold leading-[50px] tracking-[0.2px] text-white lg:text-[58px] lg:leading-[80px]">
                NEW COLLECTION
              </h1>

              <p className="max-w-[420px] font-montserrat text-[18px] font-extralight leading-[18px] tracking-[1.3px] text-white lg:text-xl lg:leading-[30px] lg:tracking-[0.2px]">
                We know how large objects will act, but things on a small scale
              </p>

              <Link
                to="/shop"
                className="mt-2 inline-flex items-center justify-center rounded-[5px] bg-[#2DC071] px-10 py-[15px] font-montserrat text-2xl font-bold text-white"
              >
                SHOP NOW
              </Link>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="h-full">
          <div
            className="relative flex h-full w-full bg-cover bg-center"
            style={{ backgroundImage: "url('/images/homePage/header.jpg')" }}
          >
            {/* overlay */}
            <div className="absolute inset-0" />

            {/* content */}
            <div className="relative z-10 mx-auto flex h-full w-full max-w-[1050px] flex-col items-center justify-center gap-4 px-6 text-center lg:items-start lg:text-left">
              <h5 className="font-montserrat text-base font-bold leading-6 tracking-[0.1px] text-white">
                SUMMER 2026
              </h5>

              <h1 className="font-montserrat text-[40px] font-bold leading-[50px] tracking-[0.2px] text-white lg:text-[58px] lg:leading-[80px]">
                NEW COLLECTION
              </h1>

              <p className="max-w-[420px] font-montserrat text-[18px] font-extralight leading-[18px] tracking-[1.3px] text-white lg:text-xl lg:leading-[30px] lg:tracking-[0.2px]">
                We know how large objects will act, but things on a small scale
              </p>

              <Link
                to="/shop"
                className="mt-2 inline-flex items-center justify-center rounded-[5px] bg-[#2DC071] px-10 py-[15px] font-montserrat text-2xl font-bold text-white"
              >
                SHOP NOW
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
