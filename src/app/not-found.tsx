import Link from "next/link";

export default function NotFound() {
  return (
    <main className="container mx-auto flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <p className="text-7xl font-extrabold text-[#C2F800]">404</p>

      <h1 className="mt-4 text-3xl font-bold text-white">Page Not Found</h1>

      <p className="mt-3 text-[#9CA3AF]">The page you are looking for does not exist.</p>

      <Link href="/" className="btn mt-6 rounded-full border-0 bg-[#C2F800] px-6 text-black hover:bg-[#a8d500]">
        Back to Workouts
      </Link>
    </main>
  );
}
