import ShopCard from "../cards/ShopCard";
import { cards } from "../data/cardsData";

export default function ShopPageCardsSection() {
  return (
    <section className="w-full bg-[#FAFAFA]">
      <div
        className={[
          // Mobile container (Figma)
          "mx-auto flex w-[333px] flex-col items-start gap-[18px] py-[24px]",
          // Desktop container
          "lg:w-[1050px] lg:items-center lg:py-[80px]",
        ].join(" ")}
      >
        {/* Mobile (Figma row layout): 3 + 2 */}
        <div className="flex w-full flex-col items-start gap-[15px] lg:hidden">
          {cards.slice(0, 3).map((card) => (
            <ShopCard key={card.id} {...card} className="h-[300px] w-[332px]" />
          ))}
        </div>

        <div className="flex w-full flex-col items-start gap-[19px] lg:hidden">
          {cards.slice(3, 5).map((card) => (
            <ShopCard key={card.id} {...card} className="h-[300px] w-[332px]" />
          ))}
        </div>

        {/* Desktop: all cards inline + wrap */}
        <div className="hidden w-full flex-row flex-nowrap gap-[30px] lg:flex lg:justify-between">
          {cards.map((card) => (
            <ShopCard
              key={card.id}
              {...card}
              // Desktop card size (Figma desktop’ta genelde 330px)
              className="h-[200px] w-[130px]"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
