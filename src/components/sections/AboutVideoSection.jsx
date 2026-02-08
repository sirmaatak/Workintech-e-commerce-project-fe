import { Play } from "lucide-react";

export default function AboutVideoSection() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto flex w-full max-w-[1050px] flex-col items-center px-6 py-16 lg:py-28">
        {/* Video Card */}
        <div className="relative w-full max-w-[989px] overflow-hidden rounded-[20px] bg-white shadow-sm">
          {/* Responsive sizing: mobile aspect ratio, desktop fixed height */}
          <div className="relative w-full aspect-[989/540] lg:h-[540px] lg:aspect-auto">
            {/* Background image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/images/about/video.jpg')" }}
            />

            {/* Gradient filter */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-[#383838]/[0.84]" />

            {/* Play button */}
            <button
              type="button"
              aria-label="Play video"
              className="absolute left-1/2 top-1/2 flex h-[80px] w-[80px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#23A6F0]"
            >
              <Play className="h-[23px] w-[19px] text-white fill-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
