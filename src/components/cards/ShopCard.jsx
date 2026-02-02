export default function ShopCard({ title, image, size, className = "" }) {
  const isLarge = size === "large";

  const base = [
    "relative overflow-hidden bg-white",

    isLarge ? "h-[500px] w-[320px]" : "h-[242px] w-[325px]",
    "lg:w-[330px]",
  ].join(" ");

  return (
    <div className={[base, className].join(" ").trim()}>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-black/25" />

      <div className="absolute bottom-6 left-4 bg-white px-6 py-3 font-montserrat text-base font-bold tracking-[0.1px] text-[#252B42]">
        {title}
      </div>
    </div>
  );
}
