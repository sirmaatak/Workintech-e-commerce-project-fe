import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProductCard({
  image,
  title,
  category,
  oldPrice,
  newPrice,
  availability,
  description,
}) {
  return (
    <section className="w-full bg-white py-20">
      {/* SAME CONTAINER FOR BREADCRUMB + CONTENT */}
      <div className="mx-auto w-full max-w-[1050px] px-6">
        {/* BREADCRUMB */}
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

        {/* CONTENT */}
        <div className="grid gap-10 pt-6 md:grid-cols-2">
          {/* IMAGE */}
          <div className="h-[500px] w-full bg-gray-100">
            <div
              className="h-full w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${image})` }}
            />
          </div>

          {/* INFO */}
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold">{title}</h1>
            <p className="text-[#737373]">{category}</p>

            <div className="flex gap-3">
              <span className="text-[#BDBDBD] line-through">{oldPrice}</span>
              <span className="font-bold text-[#23856D]">{newPrice}</span>
            </div>
            <p className="text-m text-gray-900">
              Availability :{" "}
              {availability ? (
                <span className="text-blue-500"> In Stock</span>
              ) : (
                <span className="text-gray-500"> Out Of Stock</span>
              )}
            </p>

            <p className="text-m text-gray-500">{description}</p>
            <div className="flex items-start gap-[10px] border-2 border-gray-300"></div>
            <div className="flex items-center gap-[6px]">
              <span className="h-4 w-4 rounded-full bg-[#23A6F0]" />
              <span className="h-4 w-4 rounded-full bg-[#23856D]" />
              <span className="h-4 w-4 rounded-full bg-[#E77C40]" />
              <span className="h-4 w-4 rounded-full bg-[#252B42]" />
            </div>

            <button className="mt-6 rounded bg-[#23A6F0] px-6 py-3 text-white">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
