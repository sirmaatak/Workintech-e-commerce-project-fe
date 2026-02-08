export default function AboutTestimonialSection() {
  return (
    <section className="w-full">
      <div className="flex w-full flex-col lg:flex-row">
        {/* LEFT – Text */}
        <div className="flex w-full flex-col justify-center bg-[#2A7CC7] px-6 py-16 lg:w-2/3 lg:px-16 lg:py-28">
          <div className="flex w-full max-w-[438px] flex-col gap-6">
            <h5 className="font-montserrat text-base font-bold leading-6 tracking-[0.1px] text-white">
              WORK WITH US
            </h5>

            <h2 className="font-montserrat text-[40px] font-bold leading-[50px] tracking-[0.2px] text-white">
              Now Let’s grow Yours
            </h2>

            <p className="font-montserrat text-sm leading-5 tracking-[0.2px] text-white">
              The gradual accumulation of information about atomic and
              small-scale behavior during the first quarter of the 20th
            </p>

            <button className="flex h-[52px] w-[130px] items-center justify-center rounded-[5px] border border-[#FAFAFA]">
              <span className="font-montserrat text-sm font-bold leading-[22px] tracking-[0.2px] text-[#FAFAFA]">
                Learn More
              </span>
            </button>
          </div>
        </div>

        {/* RIGHT – Image (HIDDEN ON MOBILE) */}
        <div className="hidden w-full lg:flex lg:w-1/3">
          <img
            src="/images/products/product1.jpg"
            alt="Testimonial"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
