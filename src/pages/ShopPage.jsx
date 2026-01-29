import ShopFilterBar from "../components/sections/ShopFilterBar";
import ShopTopBar from "../components/sections/ShopTopBar";
import ProductCardSection from "../components/sections/ProductCardSection";
import ShopClientSection from "../components/sections/ShopClientSection";
import ShopPageCardsSection from "../components/sections/ShopPageCardSection";

export default function ShopPage() {
  return (
    <div className="w-full">
      <ShopTopBar />
      <ShopPageCardsSection />
      <ShopFilterBar />
      <ProductCardSection />
      <ShopClientSection />
    </div>
  );
}
