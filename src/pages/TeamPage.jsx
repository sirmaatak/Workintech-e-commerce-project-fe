import TeamCtaSection from "../components/sections/TeamCtaSection";
import TeamHeroCardSection from "../components/sections/TeamHeroCardSection";
import TeamInnerHeaderSection from "../components/sections/TeamInnerHeaderSection";
import TeamMemberSection from "../components/sections/TeamMemberSection";

export default function TeamPage() {
  return (
    <div className="w-full">
      <TeamInnerHeaderSection />
      <TeamHeroCardSection />
      <TeamMemberSection />
      <TeamCtaSection />
    </div>
  );
}
