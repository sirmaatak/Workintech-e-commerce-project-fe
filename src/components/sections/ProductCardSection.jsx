import { useMemo, useRef, useState, useEffect } from "react";
import ProductCard from "../cards/ProductCard";
import { products } from "../data/productsData";

const PAGE_SIZE = 6;

export default function ProductCardSection() {
  const [page, setPage] = useState(1);
  const listTopRef = useRef(null);

  const totalPages = Math.max(1, Math.ceil(products.length / PAGE_SIZE));

  const currentItems = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return products.slice(start, start + PAGE_SIZE);
  }, [page]);

  useEffect(() => {
    // Sayfa değişince liste başına kaydır
    if (listTopRef.current) {
      listTopRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [page]);

  const canPrev = page > 1;
  const canNext = page < totalPages;

  return (
    <section className="w-full bg-white">
      <div className="mx-auto flex w-full max-w-[1050px] flex-col items-center gap-12 px-6 py-20">
        {/* HEADER */}
        <div className="flex flex-col items-center gap-[10px] text-center">
          <h4 className="font-montserrat text-xl font-normal leading-[30px] tracking-[0.2px] text-[#737373]">
            Featured Products
          </h4>
          <h3 className="font-montserrat text-2xl font-bold leading-8 tracking-[0.1px] text-[#252B42]">
            BESTSELLER PRODUCTS
          </h3>
          <p className="font-montserrat text-sm font-normal leading-5 tracking-[0.2px] text-[#737373]">
            Problems trying to resolve the conflict between
          </p>
        </div>

        <div ref={listTopRef} className="w-full scroll-mt-28" />

        <div className="flex w-full flex-col gap-[30px] sm:flex-row sm:flex-wrap sm:gap-[30px]">
          {currentItems.map((product) => (
            <div
              key={product.id}
              className="w-full sm:w-[calc(50%-15px)] lg:w-[calc(33.333%-20px)]"
            >
              <ProductCard
                id={product.id}
                image={product.image}
                title={product.title}
                category={product.category}
                oldPrice={product.oldPrice}
                newPrice={product.price}
              />
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => canPrev && setPage((p) => p - 1)}
            disabled={!canPrev}
            className={[
              "rounded-md border px-4 py-2 font-montserrat text-sm font-bold",
              canPrev
                ? "border-[#E6E6E6] text-[#252B42]"
                : "cursor-not-allowed border-[#E6E6E6] text-[#BDBDBD]",
            ].join(" ")}
          >
            Prev
          </button>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {Array.from({ length: totalPages }).map((_, i) => {
              const num = i + 1;
              const active = num === page;

              return (
                <button
                  key={num}
                  type="button"
                  onClick={() => setPage(num)}
                  className={[
                    "h-10 w-10 rounded-md border font-montserrat text-sm font-bold",
                    active
                      ? "border-[#23A6F0] bg-[#23A6F0] text-white"
                      : "border-[#E6E6E6] text-[#737373]",
                  ].join(" ")}
                >
                  {num}
                </button>
              );
            })}
          </div>

          <button
            type="button"
            onClick={() => canNext && setPage((p) => p + 1)}
            disabled={!canNext}
            className={[
              "rounded-md border px-4 py-2 font-montserrat text-sm font-bold",
              canNext
                ? "border-[#E6E6E6] text-[#252B42]"
                : "cursor-not-allowed border-[#E6E6E6] text-[#BDBDBD]",
            ].join(" ")}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}
