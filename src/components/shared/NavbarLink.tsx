"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavbarLink = () => {
  const pathname = usePathname();
  const isMyPlan = pathname.startsWith("/myplan");

  return (
    <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 lg:flex">
      <Link href="/" className={`rounded-full px-4 py-2 text-sm ${!isMyPlan ? "bg-[#1A2312] font-semibold text-[#C2F800]" : "text-[#9CA3AF] hover:text-[#C2F800]"}`}>
        Workouts
      </Link>

      <Link href="/myplan" className={`rounded-full px-4 py-2 text-sm ${isMyPlan ? "bg-[#1A2312] font-semibold text-[#C2F800]" : "text-[#9CA3AF] hover:text-[#C2F800]"}`}>
        My Plan
      </Link>
    </div>
  );
};

export default NavbarLink;
