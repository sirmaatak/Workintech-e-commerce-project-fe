import { useHistory } from "react-router-dom";
import TeamMemberCard from "../cards/TeamMemberCard";
import { teamMemberData } from "../data/teamMemberData";

export default function AboutTeamSection() {
  const history = useHistory();

  return (
    <section className="w-full bg-white">
      <div className="mx-auto flex w-full max-w-[1050px] flex-col items-center gap-28 px-6 py-28">
        {/* HEADER */}
        <div className="flex w-full max-w-[607px] flex-col items-center gap-[10px] text-center">
          <h2 className="font-montserrat text-[40px] font-bold leading-[50px] tracking-[0.2px] text-[#252B42]">
            Meet Our Team
          </h2>
          <p className="max-w-[469px] font-montserrat text-sm leading-5 tracking-[0.2px] text-[#737373]">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics
          </p>
        </div>

        {/* CARDS */}
        <div className="flex w-full flex-col items-center gap-8 lg:flex-row lg:justify-center lg:gap-[30px]">
          {teamMemberData.slice(0, 3).map((m) => (
            <div
              key={m.id}
              className="w-full max-w-[316px] cursor-pointer lg:w-[316px]"
              role="link"
              tabIndex={0}
              onClick={() => history.push("/team")}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  history.push("/team");
                }
              }}
            >
              <TeamMemberCard image={m.image} name={m.name} role={m.role} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
