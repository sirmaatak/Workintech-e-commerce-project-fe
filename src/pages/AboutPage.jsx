import AboutClientSection from "../components/sections/AboutClientSection";
import AboutContentSection from "../components/sections/AboutContentSection";
import AboutHeroHeaderSection from "../components/sections/AboutHeroHeaderSection";
import AboutStatsSection from "../components/sections/AboutStatsSection";
import AboutTeamSection from "../components/sections/AboutTeamSection";
import AboutTestimonialSection from "../components/sections/AboutTestimonialSection";
import AboutVideoSection from "../components/sections/AboutVideoSection";

export default function AboutPage() {
  return (
    <div className="w-full">
      <AboutHeroHeaderSection />
      <AboutContentSection />
      <AboutStatsSection />
      <AboutVideoSection />
      <AboutTeamSection />
      <AboutClientSection />
      <AboutTestimonialSection />
    </div>
  );
}
