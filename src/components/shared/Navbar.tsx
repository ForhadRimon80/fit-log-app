import Image from "next/image";
import Link from "next/link";
import { HiOutlineBars3 } from "react-icons/hi2";
import Logo from "@/assets/logo.png";

const Navbar = () => {
  return (
    <nav className="border-b border-white/10 bg-[#0C0D10]">
      <div className="container relative mx-auto flex h-16 items-center justify-between gap-2 px-3 sm:h-18 sm:px-6">
        {/* Hamburger: mobile & tablet */}
        <div className="dropdown lg:hidden">
          <div tabIndex={0} role="button" aria-label="Open navigation menu" className="btn btn-ghost btn-square text-white">
            <HiOutlineBars3 className="text-2xl" />
          </div>

          <ul tabIndex={-1} className="menu dropdown-content z-50 mt-3 w-48 rounded-box border border-white/10 bg-[#1b1c1f] p-2 shadow-lg">
            <li>
              <Link href="/" className="text-[#C2F800]">
                Workouts
              </Link>
            </li>
            <li>
              <Link href="/myplan" className="text-gray-300">
                My Plan
              </Link>
            </li>
          </ul>
        </div>

        {/* Logo */}
        <Link href="/" className="absolute left-1/2 flex -translate-x-1/2 items-center gap-1.5 sm:gap-2 lg:static lg:translate-x-0">
          <Image src={Logo} alt="FitLog logo" width={28} height={28} className="h-6 w-6 sm:h-7 sm:w-7" />
          <span className="text-base font-bold text-white sm:text-xl">FITLOG</span>
        </Link>

        {/* Center links*/}
        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 lg:flex">
          <Link href="/" className="rounded-full bg-[#1A2312] px-4 py-2 text-sm font-semibold text-[#C2F800]">
            Workouts
          </Link>
          <Link href="/myplan" className="px-4 py-2 text-sm text-[#9CA3AF] hover:text-white">
            My Plan
          </Link>
        </div>

        {/* Right side */}
        <div className="ml-auto flex shrink-0 items-center gap-2 text-xs sm:gap-5 sm:text-sm">
          <Link href="/about" className="flex items-center gap-1 text-[#D1D5DB] sm:gap-2">
            <span>Plan</span>
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#D9FF00] text-xs font-bold text-black">0</span>
          </Link>

          <Link href="/saved" className="flex items-center gap-1 text-[#9CA3AF] sm:gap-2">
            <span>Saved</span>
            <span className="flex h-5 w-5 items-center justify-center rounded-full border border-gray-600 text-xs text-white">0</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

