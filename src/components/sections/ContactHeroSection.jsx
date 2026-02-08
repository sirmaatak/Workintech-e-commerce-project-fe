import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function ContactHeroSection() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto flex w-full max-w-[1050px] flex-col items-center justify-center px-6 py-20">
        <div className="flex w-full flex-col items-center gap-[41px] lg:flex-row lg:items-center lg:justify-between">
          <div className="flex w-full flex-col items-center justify-center gap-10 lg:w-1/2 lg:items-start">
            <div className="flex flex-col items-center gap-10 lg:items-start">
              <h5 className="font-montserrat text-base font-bold leading-6 tracking-[0.1px] text-[#252B42]">
                CONTACT US
              </h5>

              <h1 className="max-w-[331px] text-center font-montserrat text-[40px] font-bold leading-[50px] tracking-[0.2px] text-[#252B42] lg:text-left">
                Get in touch today!
              </h1>

              <p className="max-w-[277px] text-center font-montserrat text-xl font-normal leading-[30px] tracking-[0.2px] text-[#737373] lg:text-left">
                We know how large objects will act, but things on a small scale
              </p>
            </div>

            <div className="flex flex-col items-center gap-5 lg:items-start">
              <div className="font-montserrat text-2xl font-bold leading-8 tracking-[0.1px] text-[#252B42]">
                Phone : +451 215 215
              </div>
              <div className="font-montserrat text-2xl font-bold leading-8 tracking-[0.1px] text-[#252B42]">
                Fax : +451 215 215
              </div>
            </div>

            <div className="flex items-center gap-[34px] p-[10px] text-[#252B42]">
              <a href="#" aria-label="Twitter" className="inline-flex">
                <Twitter className="h-[24px] w-[30px]" />
              </a>
              <a href="#" aria-label="Facebook" className="inline-flex">
                <Facebook className="h-[30px] w-[30px]" />
              </a>
              <a href="#" aria-label="Instagram" className="inline-flex">
                <Instagram className="h-[30px] w-[30px]" />
              </a>
              <a href="#" aria-label="LinkedIn" className="inline-flex">
                <Linkedin className="h-[30px] w-[30px]" />
              </a>
            </div>
          </div>

          {/* RIGHT: IMAGE BLOCK */}
          <div className="flex w-full items-center justify-center lg:w-1/2">
            <div className="flex h-[440px] w-full max-w-[387px] flex-col items-center justify-center rounded-[24px] bg-white">
              <div className="flex h-[420px] w-full items-center justify-center rounded-full bg-[#FFE9EA]">
                <div
                  className="h-[410px] w-[360px] rounded-[24px] bg-cover bg-center"
                  style={{
                    backgroundImage: "url('../images/contact/contact.png')",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
