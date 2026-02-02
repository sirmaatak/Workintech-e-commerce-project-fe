import TeamMemberCard from "../cards/TeamMemberCard";
import { teamMemberData } from "../data/teamMemberData";

export default function TeamMemberSection() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto flex w-full max-w-[1050px] flex-col items-center gap-[112px] px-6 py-[112px]">
        {/* title row */}
        <div className="flex w-full flex-col items-center">
          <h2 className="font-montserrat text-[40px] font-bold leading-[50px] tracking-[0.2px] text-[#252B42]">
            Meet Our Team
          </h2>
        </div>

        {/* cards (flex only) */}
        <div className="flex w-full flex-col items-center gap-[30px] lg:flex-col-3  lg:flex-row lg:flex-wrap lg:items-start lg:justify-center">
          {teamMemberData.map((m) => (
            <div key={m.id} className="w-full max-w-[316px] lg:w-[250px]">
              <TeamMemberCard image={m.image} name={m.name} role={m.role} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
