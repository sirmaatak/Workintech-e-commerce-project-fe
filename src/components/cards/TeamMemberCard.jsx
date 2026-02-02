import { Facebook, Instagram, Twitter } from "lucide-react";

export default function TeamMemberCard({ image, name, role }) {
  return (
    <article className="flex w-full max-w-[316px] flex-col items-center bg-white">
      {/* media */}
      <div className="relative h-[231px] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        />
      </div>

      {/* content */}
      <div className="flex w-full flex-col items-center gap-[10px] p-[30px]">
        <h5 className="font-montserrat text-base font-bold leading-6 tracking-[0.1px] text-[#252B42]">
          {name}
        </h5>

        <h6 className="font-montserrat text-sm font-bold leading-6 tracking-[0.2px] text-[#737373]">
          {role}
        </h6>

        <div className="flex items-center justify-center gap-5">
          <a href="#" aria-label="Facebook" className="text-[#23A6F0]">
            <Facebook className="h-6 w-6" />
          </a>
          <a href="#" aria-label="Instagram" className="text-[#23A6F0]">
            <Instagram className="h-6 w-6" />
          </a>
          <a href="#" aria-label="Twitter" className="text-[#23A6F0]">
            <Twitter className="h-6 w-6" />
          </a>
        </div>
      </div>
    </article>
  );
}
