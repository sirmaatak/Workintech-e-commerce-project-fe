export default function AboutStatsSection() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto flex max-w-[1050px] flex-col items-center px-10 py-10">
        <div className="flex w-full flex-col items-center gap-8 lg:flex-row lg:justify-between">
          {/* Stat 1 */}
          <div className="flex flex-col items-center">
            <h2 className="font-montserrat text-[50px] font-semibold leading-[80px] text-[#252B42]">
              15K
            </h2>
            <p className="font-montserrat text-base font-semibold text-gray-600">
              Happy Customers
            </p>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center">
            <h2 className="font-montserrat text-[50px] font-bold leading-[80px] text-[#252B42]">
              150K
            </h2>
            <p className="font-montserrat text-base font-semibold text-gray-600">
              Monthly Visitors
            </p>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col items-center">
            <h2 className="font-montserrat text-[50px] font-bold leading-[80px] text-[#252B42]">
              15
            </h2>
            <p className="font-montserrat text-base font-semibold text-gray-600">
              Countries Worldwide
            </p>
          </div>

          {/* Stat 4 */}
          <div className="flex flex-col items-center">
            <h2 className="font-montserrat text-[50px] font-bold leading-[80px] text-[#252B42]">
              100+
            </h2>
            <p className="font-montserrat text-base font-semibold text-gray-600">
              Top Partners
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
