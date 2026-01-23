import ProductCard from "../cards/ProductCard";
import { products } from "../data/productsData";

export default function ProductCardSection() {
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

        {/* LIST (mobile: alt alta, desktop: 4 yan yana) */}
        <div className="flex w-full flex-col gap-[30px] sm:flex-row sm:flex-wrap sm:gap-[30px]">
          {products.map((product) => (
            <div
              key={product.id}
              className="w-full sm:w-[calc(50%-15px)] lg:w-[calc(25%-22.5px)]"
            >
              <ProductCard
                image={product.image}
                title={product.title}
                category={product.category}
                oldPrice={product.oldPrice}
                newPrice={product.price}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
