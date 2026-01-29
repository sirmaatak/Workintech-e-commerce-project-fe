import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export default function ShopTopBar() {
  return (
    <section className="w-full bg-[#FAFAFA]">
      <div className="mx-auto flex w-full max-w-[1050px] flex-col items-center px-6 py-6">
        {/* Row */}
        <div className="flex w-full flex-col items-start gap-[30px] lg:flex-row lg:items-center lg:justify-between">
          <div className="flex w-full flex-col items-center py-6 lg:w-auto lg:items-start lg:py-0">
            <h2 className="font-montserrat text-2xl font-bold leading-8 tracking-[0.1px] text-[#252B42]">
              Shop
            </h2>
          </div>

          {/* Breadcrumb block */}
          <div className="flex w-full flex-col items-center gap-[5px] lg:w-auto lg:items-end">
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

              <ChevronRight className="h-3 w-[7px] text-[#BDBDBD]" />

              <span className="font-montserrat text-sm font-bold leading-6 tracking-[0.2px] text-[#737373]">
                Shop
              </span>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}
