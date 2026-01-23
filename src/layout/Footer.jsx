import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-white">
      {/* TOP GRAY AREA */}
      <div className="w-full bg-[#FAFAFA]">
        <div className="mx-auto flex w-full max-w-[1050px] flex-col items-center justify-between gap-6 px-6 py-10 lg:flex-row lg:items-center lg:gap-0">
          <h3 className="font-montserrat text-2xl font-bold leading-8 tracking-[0.1px] text-[#252B42]">
            Bandage
          </h3>

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

        <div className="w-full border-t border-[#E6E6E6]" />
      </div>

      {/* LINKS AREA */}
      <div className="w-full bg-white">
        <div className="mx-auto flex w-full max-w-[1050px] flex-col gap-10 px-6 py-[70px] lg:flex-row  lg:items-start lg:gap-[30px] lg:py-[50px]">
          {/* Column 1 */}
          <div className="flex flex-col gap-5 lg:w-[148px]">
            <h5 className="font-montserrat text-base font-bold leading-6 tracking-[0.1px] text-[#252B42]">
              Company Info
            </h5>
            <div className="flex flex-col gap-[10px]">
              <a
                href="#"
                className="font-montserrat text-sm font-bold leading-6 tracking-[0.2px] text-[#737373]"
              >
                About Us
              </a>
              <a
                href="#"
                className="font-montserrat text-sm font-bold leading-6 tracking-[0.2px] text-[#737373]"
              >
                Carrier
              </a>
              <a
                href="#"
                className="font-montserrat text-sm font-bold leading-6 tracking-[0.2px] text-[#737373]"
              >
                We are hiring
              </a>
              <a
                href="#"
                className="font-montserrat text-sm font-bold leading-6 tracking-[0.2px] text-[#737373]"
              >
                Blog
              </a>
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-5 lg:w-[148px]">
            <h5 className="font-montserrat text-base font-bold leading-6 tracking-[0.1px] text-[#252B42]">
              Legal
            </h5>
            <div className="flex flex-col gap-[10px]">
              <a
                href="#"
                className="font-montserrat text-sm font-bold leading-6 tracking-[0.2px] text-[#737373]"
              >
                About Us
              </a>
              <a
                href="#"
                className="font-montserrat text-sm font-bold leading-6 tracking-[0.2px] text-[#737373]"
              >
                Carrier
              </a>
              <a
                href="#"
                className="font-montserrat text-sm font-bold leading-6 tracking-[0.2px] text-[#737373]"
              >
                We are hiring
              </a>
              <a
                href="#"
                className="font-montserrat text-sm font-bold leading-6 tracking-[0.2px] text-[#737373]"
              >
                Blog
              </a>
            </div>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-5 lg:w-[148px]">
            <h5 className="font-montserrat text-base font-bold leading-6 tracking-[0.1px] text-[#252B42]">
              Features
            </h5>
            <div className="flex flex-col gap-[10px]">
              <a
                href="#"
                className="font-montserrat text-sm font-bold leading-6 tracking-[0.2px] text-[#737373]"
              >
                Business Marketing
              </a>
              <a
                href="#"
                className="font-montserrat text-sm font-bold leading-6 tracking-[0.2px] text-[#737373]"
              >
                User Analytic
              </a>
              <a
                href="#"
                className="font-montserrat text-sm font-bold leading-6 tracking-[0.2px] text-[#737373]"
              >
                Live Chat
              </a>
              <a
                href="#"
                className="font-montserrat text-sm font-bold leading-6 tracking-[0.2px] text-[#737373]"
              >
                Unlimited Support
              </a>
            </div>
          </div>

          {/* Column 4 */}
          <div className="flex flex-col gap-5 lg:w-[148px]">
            <h5 className="font-montserrat text-base font-bold leading-6 tracking-[0.1px] text-[#252B42]">
              Resources
            </h5>
            <div className="flex flex-col gap-[10px]">
              <a
                href="#"
                className="font-montserrat text-sm font-bold leading-6 tracking-[0.2px] text-[#737373]"
              >
                IOS & Android
              </a>
              <a
                href="#"
                className="font-montserrat text-sm font-bold leading-6 tracking-[0.2px] text-[#737373]"
              >
                Watch a Demo
              </a>
              <a
                href="#"
                className="font-montserrat text-sm font-bold leading-6 tracking-[0.2px] text-[#737373]"
              >
                Customers
              </a>
              <a
                href="#"
                className="font-montserrat text-sm font-bold leading-6 tracking-[0.2px] text-[#737373]"
              >
                API
              </a>
            </div>
          </div>

          {/* Subscribe (Column 5) */}
          <div className="flex flex-col gap-5 lg:w-[320px]">
            <h5 className="font-montserrat text-base font-bold leading-6 tracking-[0.1px] text-[#252B42]">
              Get In Touch
            </h5>

            <div className="flex w-full">
              <input
                className="w-full flex-1 rounded-l-[5px] border border-[#E6E6E6] bg-[#F9F9F9] px-5 py-4 text-sm text-[#737373] placeholder:text-[#737373]"
                placeholder="Your Email"
              />
              <button className="rounded-r-[5px] border border-[#E6E6E6] bg-[#23A6F0] px-6 text-sm text-white">
                Subscribe
              </button>
            </div>

            <p className="text-xs leading-7 tracking-[0.2px] text-[#737373]">
              Lorem ipsum dolor amit
            </p>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="w-full bg-[#FAFAFA]">
        <div className="mx-auto flex w-full max-w-[1050px] items-center justify-center px-6 py-[25px] lg:justify-start">
          <p className="text-center font-montserrat text-sm font-bold leading-6 tracking-[0.2px] text-[#737373] lg:text-left">
            Made With Love By Finland All Right Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
