import { Phone, MapPin, Mail } from "lucide-react";
import ContactCard from "../cards/ContactCard";

export default function ContactCardsSection() {
  return (
    <section className="w-full">
      <div className="mx-auto flex w-full max-w-[1050px] flex-col items-center gap-[60px] px-6 py-10">
        {/* HEADER */}
        <header className="flex w-full flex-col items-center gap-[10px] text-center">
          <h6 className="font-montserrat text-sm font-bold leading-6 tracking-[0.2px] text-[#252B42]">
            VISIT OUR OFFICE
          </h6>
          <h2 className="max-w-[290px] font-montserrat text-[40px] font-bold leading-[50px] tracking-[0.2px] text-[#252B42]">
            We help small businesses with big ideas
          </h2>
        </header>

        <div className="flex w-full flex-col items-center gap-[30px] lg:flex-row lg:items-stretch lg:justify-between">
          <div className="w-full max-w-[328px] lg:max-w-none lg:flex-1">
            <ContactCard
              icon={<Phone className="h-[72px] w-[72px]" />}
              lines={["georgia.young@example.com", "georgia.young@ple.com"]}
              title="Get Support"
            />
          </div>

          <div className="w-full max-w-[328px]  lg:max-w-none lg:flex-1">
            <ContactCard
              variant="dark"
              icon={<MapPin className="h-[72px] w-[72px]" />}
              lines={["georgia.young@example.com", "georgia.young@ple.com"]}
              title="Visit Us"
            />
          </div>

          <div className="w-full max-w-[328px] lg:max-w-none lg:flex-1">
            <ContactCard
              icon={<Mail className="h-[72px] w-[72px]" />}
              lines={["georgia.young@example.com", "georgia.young@ple.com"]}
              title="Email Us"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
