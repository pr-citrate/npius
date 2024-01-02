import Link from "next/link";

export default function Header({ className, ...props }) {
  return (
    <header
      className={`z-50 w-full p-4 h-16 bg-white/40 backdrop-blur-xl flex -m-b-16 flex-row items-center justify-between ${className}`}
    >
      <Link href={"/"}>npuis</Link>
    </header>
  );
}
