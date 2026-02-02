import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export default function TeamInnerHeader() {
  return (
    <section className="relative w-full bg-white">
      {/* background + filter (tasarımda var) */}
      <div className="absolute inset-0 bg-white/50" aria-hidden="true" />

      {/* CONTENT */}
      <div className="relative mx-auto flex w-full max-w-[1050px] flex-col items-center px-6 py-12 lg:max-w-[1322px] lg:py-[50px]">
        <div className="flex w-full flex-col items-center gap-4 text-center">
          {/* h5 */}
          <h5 className="font-montserrat text-base font-bold leading-6 tracking-[0.1px] text-[#737373]">
            WHAT WE DO
          </h5>

          {/* h2 (desktop 58/80, mobile daha küçük) */}
          <h1 className="font-montserrat text-[40px] font-bold  tracking-[0.2px] text-black lg:text-[40px] lg:leading-[80px]">
            Innovation tailored for you
          </h1>

          {/* breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-[15px] py-[10px]"
          >
            <Link
              to="/"
              className="font-montserrat text-sm font-bold leading-6 tracking-[0.2px] text-[#252B42]"
            >
              Home
            </Link>

            <ChevronRight className="h-4 w-[9px] text-[#BDBDBD]" />

            <span className="font-montserrat text-sm font-bold leading-6 tracking-[0.2px] text-[#737373]">
              Team
            </span>
          </nav>
        </div>
      </div>
    </section>
  );
}
