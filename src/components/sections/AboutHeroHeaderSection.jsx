import { Link } from "react-router-dom";

export default function AboutHeroHeaderSection() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto flex w-full max-w-[1050px] flex-col items-center gap-[10px] px-6 py-3 lg:flex-row lg:items-center lg:justify-between lg:gap-[30px] lg:py-[112px]">
        {/* TEXT */}
        <div className="flex w-full flex-col items-center gap-10 text-center lg:w-[599px] lg:items-start lg:text-left">
          {/* Mobil figmada h5 yok, desktopta var. İstersen açık bırak */}
          <h5 className="hidden font-montserrat text-base font-bold leading-6 tracking-[0.1px] text-[#252B42] lg:block">
            ABOUT COMPANY
          </h5>

          <h1 className="font-montserrat text-[40px] font-bold leading-[50px] tracking-[0.2px] text-[#252B42] lg:text-[58px] lg:leading-[80px]">
            ABOUT US
          </h1>

          <p className="w-[277px] font-montserrat text-xl font-normal leading-[30px] tracking-[0.2px] text-[#737373] lg:w-auto lg:max-w-[420px]">
            We know how large objects will act, but things on a small scale
          </p>

          <div className="flex flex-col items-center gap-[15px] lg:items-start">
            <Link
              to="/shop"
              className="flex h-[52px] w-[193px] items-center justify-center rounded-[5px] bg-[#23A6F0] px-10 py-[15px]"
            >
              <span className="font-montserrat text-sm font-bold leading-[22px] tracking-[0.2px] text-white">
                Get Quote Now
              </span>
            </Link>
          </div>
        </div>

        {/* ILLUSTRATION */}
        <div className="flex w-full justify-center lg:w-[415px]">
          <div className="relative h-[440px] w-[387px]">
            {/* big pink ellipse */}
            <div className="absolute left-[40px] top-[35px] h-[296px] w-[296px] rounded-full bg-[#FFE9EA]" />
            {/* small pink ellipse */}
            <div className="absolute left-[4px] top-[43px] h-[47px] w-[47px] rounded-full bg-[#FFE9EA]" />
            {/* extra pink dot */}
            <div className="absolute left-[343px] top-[187px] h-[18px] w-[18px] rounded-full bg-[#FFE9EA]" />
            {/* purple dots */}
            <div className="absolute left-[356px] top-[110px] h-[9px] w-[9px] rounded-full bg-[#977DF4]" />
            <div className="absolute left-[19px] top-[285px] h-[9px] w-[9px] rounded-full bg-[#977DF4]" />

            {/* technology image */}
            <div
              className="absolute left-1/2 top-[1px] h-[439px] w-[376px] -translate-x-1/2 bg-contain bg-center bg-no-repeat"
              style={{ backgroundImage: "url('/images/about/technology.png')" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
