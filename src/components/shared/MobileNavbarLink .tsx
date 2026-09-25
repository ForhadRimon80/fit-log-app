"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiOutlineBars3 } from "react-icons/hi2";

const MobileNavbarLink = () => {
  const pathname = usePathname();
  const isMyPlan = pathname.startsWith("/myplan");

  return (
    <div className="dropdown lg:hidden">
      <div tabIndex={0} role="button" aria-label="Open navigation menu" className="btn btn-ghost btn-square text-white">
        <HiOutlineBars3 className="text-2xl" />
      </div>

      <ul tabIndex={-1} className="menu dropdown-content z-50 mt-3 w-48 rounded-box border border-white/10 bg-[#1b1c1f] p-2 shadow-lg">
        <li>
          <Link href="/" className={!isMyPlan ? "text-[#C2F800]" : "text-gray-300"}>
            Workouts
          </Link>
        </li>

        <li>
          <Link href="/myplan" className={isMyPlan ? "text-[#C2F800]" : "text-gray-300"}>
            My Plan
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileNavbarLink;
