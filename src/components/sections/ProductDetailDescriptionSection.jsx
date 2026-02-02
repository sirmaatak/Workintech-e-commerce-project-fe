import { ChevronRight } from "lucide-react";

export default function ProductDescriptionSection({
  image,
  title,
  description,
}) {
  return (
    <section className="w-full bg-white">
      <div className="w-full border-b border-[#ECECEC]">
        <div className="mx-auto flex w-full max-w-[1050px] items-center justify-center px-6">
          <div className="flex items-center">
            <button className="flex items-center justify-center gap-2 px-6 py-6 font-montserrat text-sm font-semibold leading-6 tracking-[0.2px] text-[#737373]">
              Description
            </button>

            <button className="flex items-center justify-center gap-2 px-6 py-6 font-montserrat text-sm font-bold leading-6 tracking-[0.2px] text-[#737373]">
              Additional Information
            </button>

            <button className="flex items-center justify-center gap-2 px-6 py-6 font-montserrat text-sm font-bold leading-6 tracking-[0.2px] text-[#737373]">
              Reviews
              <span className="font-montserrat text-sm font-bold leading-6 tracking-[0.2px] text-[#23856D]">
                (0)
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-[1050px] flex-col gap-[30px] px-6 py-12">
        <div className="flex w-full flex-col gap-[30px] lg:flex-row lg:items-start">
          <div className="w-full lg:w-[332px]">
            <div className="relative w-full overflow-hidden rounded-[9px] bg-[rgba(196,196,196,0.2)]">
              <div
                className="h-[300px] w-full bg-cover bg-center"
                style={{
                  backgroundImage: image ? `url(${image})` : "none",
                }}
              />
            </div>
          </div>

          <div className="flex w-full flex-col gap-[30px] lg:w-[332px] lg:pb-[25px]">
            <h5 className="font-montserrat text-2xl font-bold leading-8 tracking-[0.1px] text-[#252B42]">
              {title}
            </h5>

            <p className="font-montserrat text-sm font-normal leading-5 tracking-[0.2px] text-[#737373]">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
