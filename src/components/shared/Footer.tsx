import Image from "next/image";
import FooterImage from "@/assets/footer.png";
import { FaRegCopyright } from "react-icons/fa";

const FooterPage = () => {
  return (
    <footer className="border-t border-[#1A1D24]">
      <div className="container mx-auto flex flex-col items-center gap-3 px-4 py-6 sm:flex-row sm:justify-between sm:gap-4 sm:px-6 sm:py-7 lg:py-8">
        <div className="flex shrink-0 items-center gap-2">
          <Image src={FooterImage} alt="FitLog logo" width={28} height={28} className="h-6 w-6 object-contain" />
          <span className="text-sm font-bold text-white">FITLOG</span>
        </div>

        <p className="flex max-w-sm items-start justify-center gap-1 text-center text-xs leading-5 text-[#6B7280] sm:max-w-none sm:items-center sm:text-right">
          <FaRegCopyright className="mt-1 shrink-0 sm:mt-0" />
          <span>2026 FitLog — Workout Library. Train hard, log honest.</span>
        </p>
      </div>
    </footer>
  );
};

export default FooterPage;
