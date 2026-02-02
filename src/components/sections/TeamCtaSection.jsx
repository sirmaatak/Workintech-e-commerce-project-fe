import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export default function TeamCtaSection() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto flex w-full max-w-[1050px] flex-col items-center gap-[96px] px-6 py-[80px]">
        {/* CONTENT */}
        <div className="flex w-full max-w-[607px] flex-col items-center gap-[36px]">
          <div className="flex w-full max-w-[547px] flex-col items-center gap-[30px] text-center">
            {/* Title */}
            <h2 className="font-montserrat text-[40px] font-bold leading-[50px] tracking-[0.2px] text-[#252B42]">
              Start your 14 days free trial
            </h2>

            {/* Description */}
            <p className="max-w-[411px] font-montserrat text-sm font-normal leading-5 tracking-[0.2px] text-[#737373]">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent.
            </p>

            {/* Button */}
            <button className="flex h-[52px] w-[186px] items-center justify-center rounded-[5px] bg-[#23A6F0]">
              <span className="font-montserrat text-sm font-bold leading-[22px] tracking-[0.2px] text-white">
                Try it free now
              </span>
            </button>

            {/* Social Icons */}
            <div className="flex items-center gap-[34px] pt-4">
              <a href="#" aria-label="Facebook" className="text-[#23A6F0]">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" aria-label="Instagram" className="text-[#23A6F0]">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" aria-label="Twitter" className="text-[#23A6F0]">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" aria-label="Linkedin" className="text-[#23A6F0]">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
