export default function ProductCard({
  image,
  title,
  category,
  oldPrice,
  newPrice,
}) {
  return (
    <div className="flex w-full flex-col bg-white">
      <div className="relative w-full">
        <div className="h-[427px] w-full" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        />
      </div>

      <div className="flex flex-col items-center gap-[10px] px-[25px] pb-[35px] pt-[25px]">
        <h5 className="font-montserrat text-base font-bold leading-6 tracking-[0.1px] text-[#252B42]">
          {title}
        </h5>

        <span className="font-montserrat text-sm font-bold leading-6 tracking-[0.2px] text-[#737373]">
          {category}
        </span>

        <div className="flex gap-[5px] px-[3px] py-[5px]">
          <span className="font-montserrat text-base font-bold leading-6 tracking-[0.1px] text-[#BDBDBD]">
            {oldPrice}
          </span>
          <span className="font-montserrat text-base font-bold leading-6 tracking-[0.1px] text-[#23856D]">
            {newPrice}
          </span>
        </div>

        <div className="flex items-center gap-[6px]">
          <span className="h-4 w-4 rounded-full bg-[#23A6F0]" />
          <span className="h-4 w-4 rounded-full bg-[#23856D]" />
          <span className="h-4 w-4 rounded-full bg-[#E77C40]" />
          <span className="h-4 w-4 rounded-full bg-[#252B42]" />
        </div>
      </div>
    </div>
  );
}
