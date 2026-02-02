import ShopPageCard from "../cards/ShopPageCard";
import { shopPageCardData } from "../data/shopPageCardData";

export default function ShopPageCardsSection() {
  return (
    <section className="w-full bg-[#FAFAFA]">
      <div className="mx-auto w-full max-w-[1088px] px-6 pb-12">
        <div
          className=" flex flex-col items-center gap-[15px]
            lg:flex-row lg:flex-nowrap"
        >
          {shopPageCardData.map((c) => (
            <ShopPageCard
              key={c.id}
              title={c.title}
              subtitle={c.subtitle}
              image={c.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
