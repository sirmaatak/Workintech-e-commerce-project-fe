export default function ContactCard({ variant, icon, lines, title }) {
  const isDark = variant === "dark";

  return (
    <article
      className={[
        "flex w-full flex-col items-center gap-[15px] px-10",
        isDark ? "bg-[#252B42] py-20" : "bg-white py-[50px]",
      ].join(" ")}
    >
      <div className="flex h-[72px] w-[72px] items-center justify-center text-[#23A6F0]">
        {icon}
      </div>

      <div className="flex flex-col items-center text-center">
        {lines.map((t, i) => (
          <p
            key={i}
            className={[
              "font-montserrat text-sm font-bold leading-6 tracking-[0.2px]",
              isDark ? "text-white" : "text-[#252B42]",
            ].join(" ")}
          >
            {t}
          </p>
        ))}
      </div>

      <h5
        className={[
          "font-montserrat text-base font-bold leading-6 tracking-[0.1px]",
          isDark ? "text-white" : "text-[#252B42]",
        ].join(" ")}
      >
        {title}
      </h5>

      <button
        className="flex h-[44px] w-[157px] items-center justify-center rounded-[5px] border border-[#23A6F0] px-5 py-[10px]"
        type="button"
      >
        <span className="font-montserrat text-sm font-bold leading-6 tracking-[0.2px] text-[#23A6F0]">
          Submit Request
        </span>
      </button>
    </article>
  );
}
