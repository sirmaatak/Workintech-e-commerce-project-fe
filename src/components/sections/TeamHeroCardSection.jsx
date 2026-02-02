export default function TeamHeroCardSection() {
  return (
    <section className="w-full bg-white">
      {/* MOBILE: stack / DESKTOP: left big + right 2x2 */}
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-4 px-6 py-8 lg:h-[530px] lg:flex-row lg:gap-[9px] lg:px-0 lg:py-0">
        {/* LEFT BIG (700x530) */}
        <div
          className="h-[320px] w-full flex-none bg-cover bg-center lg:h-[530px] lg:w-[700px]"
          style={{ backgroundImage: "url('/images/team/shopcard1.jpg')" }}
        />

        {/* RIGHT MOSAIC (2 columns, each column has 2 images 361x260) */}
        <div className="flex w-full flex-col-2 gap-4 lg:h-[530px] lg:flex-row lg:gap-[9px]">
          {/* Column 1 */}
          <div className="flex w-full flex-col gap-4 lg:w-[361px] lg:gap-[10px]">
            <div
              className="h-[180px] w-full bg-cover bg-center lg:h-[260px]"
              style={{ backgroundImage: "url('/images/team/shopcard2.jpg')" }}
            />
            <div
              className="h-[180px] w-full bg-cover bg-center lg:h-[260px]"
              style={{ backgroundImage: "url('/images/team/shopcard3.jpg')" }}
            />
          </div>

          {/* Column 2 */}
          <div className="flex w-full flex-col gap-4 lg:w-[361px] lg:gap-[10px]">
            <div
              className="h-[180px] w-full bg-cover bg-center lg:h-[260px]"
              style={{ backgroundImage: "url('/images/team/shopcard4.jpg')" }}
            />
            <div
              className="h-[180px] w-full bg-cover bg-center lg:h-[260px]"
              style={{ backgroundImage: "url('/images/team/shopcard5.jpg')" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
