import BlogSection from "../components/sections/BlogSection";
import CtaImageSection from "../components/sections/CtaImageSection";
import ProductCardSection from "../components/sections/ProductCardSection";
import ShopCardSection from "../components/sections/ShopCardSection";
import HeroProductSlider from "../components/slider/HeroProductSlider";
import HeroSlider from "../components/slider/HeroSlider";

export default function HomePage() {
  return (
    <div className="min-h-screen w-full bg-white">
      <div className="flex flex-col gap-20">
        <HeroSlider />
        <ShopCardSection />
        <ProductCardSection />
        <HeroProductSlider />
        <CtaImageSection />
        <BlogSection />
      </div>
    </div>
  );
}
