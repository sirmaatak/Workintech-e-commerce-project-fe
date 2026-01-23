import { CalendarDays, BarChart3, ChevronRight } from "lucide-react";

export default function BlogCard({ post }) {
  return (
    <article className="w-full max-w-[330px] bg-white flex flex-col shadow-[0px_2px_4px_rgba(0,0,0,0.1)] lg:flex-1">
      {/* MEDIA */}
      <div className="relative w-full h-[300px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${post.image})` }}
        />

        {post.badge ? (
          <div className="absolute left-5 top-5 bg-[#E74040] px-[10px] h-6 flex items-center shadow-[0px_2px_4px_rgba(0,0,0,0.1)] rounded-[3px]">
            <span className="font-montserrat font-bold text-sm leading-6 tracking-[0.2px] text-white">
              {post.badge}
            </span>
          </div>
        ) : null}
      </div>

      {/* BODY */}
      <div className="w-full flex flex-col items-start px-[25px] pt-[25px] pb-[35px] gap-[10px]">
        {/* TAGS */}
        <div className="flex items-center gap-[15px] flex-wrap">
          {post.tags?.[0] ? (
            <span className="font-montserrat font-normal text-xs leading-4 tracking-[0.2px] text-[#8EC2F2]">
              {post.tags[0]}
            </span>
          ) : null}
          {post.tags?.[1] ? (
            <span className="font-montserrat font-normal text-xs leading-4 tracking-[0.2px] text-[#737373]">
              {post.tags[1]}
            </span>
          ) : null}
          {post.tags?.[2] ? (
            <span className="font-montserrat font-normal text-xs leading-4 tracking-[0.2px] text-[#737373]">
              {post.tags[2]}
            </span>
          ) : null}
        </div>

        <h4 className="font-montserrat font-normal text-xl leading-[30px] tracking-[0.2px] text-[#252B42]">
          {post.title}
        </h4>

        <p className="font-montserrat font-normal text-sm leading-5 tracking-[0.2px] text-[#737373]">
          {post.description}
        </p>

        {/* META */}
        <div className="w-full flex items-center justify-between py-[15px]">
          <div className="flex items-center gap-[5px]">
            <CalendarDays className="w-4 h-4 text-[#23A6F0]" />
            <span className="font-montserrat font-normal text-xs leading-4 tracking-[0.2px] text-[#737373]">
              {post.dateText}
            </span>
          </div>

          <div className="flex items-center gap-[5px]">
            <BarChart3 className="w-4 h-4 text-[#23856D]" />
            <span className="font-montserrat font-normal text-xs leading-4 tracking-[0.2px] text-[#737373]">
              {post.chartText}
            </span>
          </div>
        </div>

        <a href="/" className="flex items-center gap-[10px]">
          <span className="font-montserrat font-bold text-sm leading-6 tracking-[0.2px] text-[#737373]">
            Learn More
          </span>
          <ChevronRight className="w-[9px] h-4 text-[#23A6F0]" />
        </a>
      </div>
    </article>
  );
}
