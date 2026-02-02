export default function ShopClientsSection() {
  const logos = [
    { id: 1, alt: "Hooli", src: "/images/clients/c1.png", w: 100, h: 50 },
    { id: 2, alt: "Lyft", src: "/images/clients/c2.png", w: 100, h: 50 },
    { id: 3, alt: "Pied Piper", src: "/images/clients/c3.png", w: 100, h: 50 },
    { id: 4, alt: "Stripe", src: "/images/clients/c4.png", w: 100, h: 50 },
    { id: 5, alt: "AWS", src: "/images/clients/c5.png", w: 100, h: 50 },
    { id: 6, alt: "Reddit", src: "/images/clients/c6.png", w: 100, h: 50 },
  ];

  return (
    <section className="w-full bg-[#FAFAFA]">
      <div className="mx-auto w-full max-w-[1050px] px-6">
        <div className="flex flex-col items-center gap-[60px] py-[50px] lg:flex-row lg:flex-wrap lg:justify-between lg:gap-x-[30px] lg:gap-y-[60px]">
          {logos.map((logo) => (
            <div
              key={logo.id}
              className="flex items-center justify-center"
              style={{ width: `${logo.w}px`, height: `${logo.h}px` }}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-full w-full object-contain opacity-70"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
