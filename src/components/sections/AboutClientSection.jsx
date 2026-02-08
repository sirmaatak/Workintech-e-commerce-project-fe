export default function AboutClientSection() {
  const logos = [
    { id: 1, alt: "Hooli", src: "/images/clients/c1.png", w: 30, h: 40 },
    { id: 2, alt: "Lyft", src: "/images/clients/c2.png", w: 30, h: 40 },
    { id: 3, alt: "Pied Piper", src: "/images/clients/c3.png", w: 30, h: 40 },
    { id: 4, alt: "Stripe", src: "/images/clients/c4.png", w: 30, h: 40 },
    { id: 5, alt: "AWS", src: "/images/clients/c5.png", w: 30, h: 40 },
    { id: 6, alt: "Reddit", src: "/images/clients/c6.png", w: 30, h: 40 },
  ];

  return (
    <section className="w-full bg-[#FAFAFA]">
      <div className="mx-auto flex w-full max-w-[1050px] flex-col items-center gap-[24px] px-6 py-[80px]">
        {/* HEADER */}
        <div className="flex w-full max-w-[864px] flex-col items-center">
          <div className="flex w-full flex-col items-center gap-[30px] text-center">
            <h2 className="font-montserrat text-[40px] font-bold leading-[50px] tracking-[0.2px] text-[#252B42]">
              Big Companies Are Here
            </h2>

            <p className="max-w-[547px] font-montserrat text-sm font-normal leading-5 tracking-[0.2px] text-[#737373]">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics
            </p>
          </div>
        </div>

        <div className="w-full max-w-[1054px] py-[50px]">
          <div className="flex w-full flex-col items-center gap-[30px] lg:flex-row lg:justify-center">
            {logos.map((logo) => (
              <div
                key={logo.id}
                className="flex h-[75px] w-[153px] items-center justify-center"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-[75px] w-auto max-w-[104px] object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
