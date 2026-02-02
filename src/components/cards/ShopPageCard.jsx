export default function ShopPageCard({ title, subtitle, image }) {
  return (
    <div className="relative h-[223px] w-[205px] overflow-hidden bg-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-[#212121]/25" />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <h6 className="font-montserrat text-base font-bold leading-6 tracking-[0.1px] text-white">
          {title}
        </h6>
        <p className="mt-[9.5px] font-montserrat text-sm font-normal leading-5 tracking-[0.2px] text-white">
          {subtitle}
        </p>
      </div>
    </div>
  );
}
