export default function AboutContentSection() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto flex w-full max-w-[1018px] flex-col items-center justify-center gap-8 px-6 py-1 lg:h-[236px] lg:flex-row lg:items-center">
        {/* LEFT */}
        <div className="flex w-full flex-col items-center gap-6 text-center lg:w-[394px] lg:items-start lg:text-left">
          <p className="font-montserrat text-sm font-normal leading-5 tracking-[0.2px] text-[#E74040]">
            Problems trying
          </p>

          <h2 className="font-montserrat text-2xl font-bold leading-8 tracking-[0.1px] text-[#252B42]">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          </h2>
        </div>

        {/* RIGHT */}
        <div className="flex w-full flex-col items-center lg:w-[529px] lg:items-start">
          <p className="font-montserrat text-sm font-normal leading-5 tracking-[0.2px] text-[#737373] lg:max-w-[545px]">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
        </div>
      </div>
    </section>
  );
}
