import ContactCardSection from "../components/sections/ContactCardSection";
import ContactCtaSection from "../components/sections/ContactCtaSection";
import ContactHeroSection from "../components/sections/ContactHeroSection";

export default function ContactPage() {
  return (
    <div className="min-h-screen w-full bg-white">
      <ContactHeroSection />
      <ContactCardSection />
      <ContactCtaSection />
    </div>
  );
}
