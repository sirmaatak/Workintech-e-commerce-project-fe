import BlogCard from "../cards/BlogCard";
import { blogData } from "../data/blogData";

export default function BlogSection() {
  return (
    <section className="w-full bg-white flex justify-center">
      <div className="w-full max-w-[1050px] px-6 py-20 flex flex-col items-center gap-20">
        <header className="w-full max-w-[300px] flex flex-col items-center gap-[10px] text-center">
          <h6 className="font-montserrat font-bold text-sm leading-6 tracking-[0.2px] text-[#23A6F0]">
            Practice Advice
          </h6>
          <h3 className="font-montserrat font-bold text-[40px] leading-[50px] tracking-[0.2px] text-[#252B42]">
            Featured Posts
          </h3>
          <p className="font-montserrat font-normal text-sm leading-5 tracking-[0.2px] text-[#737373]">
            Problems trying to resolve the conflict between
          </p>
        </header>

        <div className="w-full flex flex-col gap-[30px] items-center lg:flex-row lg:flex-wrap lg:justify-center">
          {blogData.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
