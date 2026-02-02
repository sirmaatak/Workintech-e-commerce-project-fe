import ShopCard from "../cards/ShopCard";
import { cards } from "../data/cardsData";

export default function ShopCardSection() {
  const get = (title) => cards.find((c) => c.title === title);

  const men = get("MEN");
  const women = get("WOMEN");
  const accessories = get("ACCESSORIES");
  const kids = get("KIDS");

  return (
    <section className="w-full bg-[#FAFAFA]">
      <div className="mx-auto flex w-full max-w-[1050px] flex-col items-center gap-12 px-6 py-20">
        {/* HEADER */}
        <div className="flex flex-col items-center gap-2 text-center">
          <h2 className="font-montserrat text-2xl font-bold leading-8 tracking-[0.1px] text-[#252B42]">
            EDITOR’S PICK
          </h2>
          <p className="font-montserrat text-sm leading-5 tracking-[0.2px] text-[#737373]">
            Problems trying to resolve the conflict between
          </p>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row lg:gap-[30px]">
          {/* COL 1 */}
          {men && <ShopCard {...men} />}

          {women && <ShopCard {...women} />}

          <div className="flex flex-col gap-4">
            {accessories && <ShopCard {...accessories} />}
            {kids && <ShopCard {...kids} />}
          </div>
        </div>
      </div>
    </section>
  );
}
