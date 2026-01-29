import { ArrowRight, Redo } from "lucide-react";

export default function ContactCtaSection() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto flex w-full max-w-[1050px] flex-col items-center px-6 pb-10 ">
        <div className="flex w-full max-w-[321px] flex-col items-center gap-3 text-center">
          <Redo
            size={80}
            color="#4d9aff"
            strokeWidth={1.5}
            className="rotate-45"
          />
          <div className="flex flex-col items-center gap-[30px]">
            <h6 className="w-full font-montserrat text-base font-bold leading-6 tracking-[0.1px] text-[#252B42]">
              WE CAN&apos;T WAIT TO MEET YOU
            </h6>

            <h2 className="font-montserrat text-[58px] font-bold leading-[80px] tracking-[0.2px] text-[#252B42]">
              Let&apos;s Talk
            </h2>
          </div>

          <div className="flex items-center gap-[10px]">
            <button
              type="button"
              className="flex h-[52px] items-center justify-center gap-3 rounded-[5px] bg-[#23A6F0] px-10 py-[15px]"
            >
              <span className="font-montserrat text-sm font-bold leading-[22px] tracking-[0.2px] text-white">
                Try it free now
              </span>
              <ArrowRight className="h-5 w-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
