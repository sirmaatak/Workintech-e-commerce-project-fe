export default function CtaImageSection() {
  return (
    <section className="w-full bg-white">
      <div className="w-full px-6">
        <div className="flex w-full flex-col items-center gap-16 lg:flex-row lg:items-center lg:gap-10">
          {/* LEFT – IMAGE */}
          <div className="flex w-full justify-center lg:w-1/2 lg:justify-start">
            <div
              className="
                w-full
                max-w-[520px]
                h-[300px]
                bg-contain
                bg-center
                bg-no-repeat
                lg:max-w-none
                lg:h-[520px]
              "
              style={{
                backgroundImage: "url('/images/homePage/cta/cta1.png')",
              }}
            />
          </div>

          {/* RIGHT – CONTENT */}
          <div className="flex w-full flex-col items-center gap-8 text-center lg:w-1/2 lg:items-start lg:text-left">
            <h5 className="font-montserrat text-base font-bold tracking-[0.1px] text-[#BDBDBD]">
              SUMMER 2026
            </h5>

            <h2 className="font-montserrat text-[40px] font-bold leading-[50px] tracking-[0.2px] text-[#252B42]">
              Part of the Neural Universe
            </h2>

            <p className="font-montserrat text-xl leading-[30px] tracking-[0.2px] text-[#737373]">
              We know how large objects will act, but things on a small scale
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <button className="rounded-[5px] bg-[#23A6F0] px-10 py-[15px] font-montserrat text-sm font-bold text-white">
                BUY NOW
              </button>

              <button className="rounded-[5px] border border-[#23A6F0] px-10 py-[15px] font-montserrat text-sm font-bold text-[#23A6F0]">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
