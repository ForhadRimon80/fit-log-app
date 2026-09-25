import Image from "next/image";
import Link from "next/link";
import BannerImage from "@/assets/banner.png";

const Banner = () => {
  return (
    <section className="container mx-auto px-4 my-13 sm:px-6">
      <div className="grid items-center gap-8 overflow-hidden rounded-2xl border border-white/10 bg-[#15171D] px-6 py-10 sm:px-10 md:grid-cols-2 md:gap-6 md:py-12 lg:min-h-102.5 lg:px-12 xl:px-13">
        {/* Text */}
        <div className="relative z-10">
          <p className="mb-5 text-xs font-bold tracking-wider text-[#C2F800] sm:text-sm">WORKOUT LIBRARY</p>

          <h1 className="max-w-162.5 text-4xl leading-none font-extrabold text-white uppercase sm:text-5xl lg:text-6xl">TRAIN WITH INTENT. LOG EVERY SET.</h1>

          <p className="mt-5 max-w-117.5 text-sm leading-6 text-[#9CA3AF] sm:text-base">FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today&apos;s plan, and watch the week&apos;s work add up.</p>

          <Link href="#workouts" className="mt-6 inline-flex min-h-10 items-center justify-center rounded-md bg-[#C2F800] px-5 text-xs font-bold text-black transition-colors hover:bg-[#a8d500] sm:text-sm">
            BROWSE WORKOUTS
          </Link>
        </div>

        {/* Image */}
        <div className="flex items-center justify-center md:justify-end">
          <Image src={BannerImage} alt="Person training on a gym machine" priority className="h-auto w-full max-w-65 object-contain sm:max-w-[320px] md:max-w-87.4 lg:max-w-100" />
        </div>
      </div>
    </section>
  );
};

export default Banner;