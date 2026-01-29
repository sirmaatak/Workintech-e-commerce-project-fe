// src/components/sections/ShopFilterBar.jsx
import { LayoutGrid, List, ChevronDown } from "lucide-react";

export default function ShopFilterBar({
  resultsText = "Showing all 12 results",
  sortValue = "Popularity",
  onSortChange,
  onFilterClick,
  view = "grid", // "grid" | "list"
  onViewChange,
}) {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto flex w-full max-w-[1050px] flex-col items-center gap-6 px-6 py-6 lg:flex-row lg:items-center lg:justify-between">
        {/* LEFT: Results */}
        <div className="flex items-center">
          <span className="font-montserrat text-sm font-bold leading-6 tracking-[0.2px] text-[#737373]">
            {resultsText}
          </span>
        </div>

        {/* RIGHT: Controls */}
        <div className="flex w-full flex-col items-center gap-6 lg:w-auto lg:flex-row">
          {/* Views */}
          <div className="flex items-center gap-[15px]">
            <span className="font-montserrat text-sm font-bold leading-6 tracking-[0.2px] text-[#737373]">
              Views:
            </span>

            <div className="flex items-center gap-[15px]">
              <button
                type="button"
                onClick={() => onViewChange?.("grid")}
                aria-label="Grid view"
                className={[
                  "flex h-[46px] w-[46px] items-center justify-center rounded-[5px] border border-[#ECECEC]",
                  view === "grid" ? "text-[#252B42]" : "text-[#737373]",
                ].join(" ")}
              >
                <LayoutGrid className="h-4 w-4" />
              </button>

              <button
                type="button"
                onClick={() => onViewChange?.("list")}
                aria-label="List view"
                className={[
                  "flex h-[46px] w-[46px] items-center justify-center rounded-[5px] border border-[#ECECEC]",
                  view === "list" ? "text-[#252B42]" : "text-[#737373]",
                ].join(" ")}
              >
                <List className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Sort + Filter */}
          <div className="flex w-full items-center gap-[15px]  lg:w-auto">
            <div className="relative flex h-[50px] w-[141px] items-center">
              <select
                value={sortValue}
                onChange={(e) => onSortChange?.(e.target.value)}
                className="h-[50px] w-full appearance-none rounded-[5px] border border-[#DDDDDD] bg-[#F9F9F9] pl-[18px] pr-10 font-montserrat text-sm font-normal leading-7 tracking-[0.2px] text-[#737373] outline-none"
              >
                <option>Popularity</option>
                <option>Newest</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>

              <ChevronDown className="pointer-events-none absolute right-4 h-4 w-4 text-[#737373]" />
            </div>

            <button
              type="button"
              onClick={onFilterClick}
              className="flex h-[50px] w-[94px] items-center justify-center rounded-[5px] bg-[#23A6F0] px-5 py-[10px] font-montserrat text-sm font-bold leading-6 tracking-[0.2px] text-white"
            >
              Filter
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
