import Layer from "@/providers/Layer";
import Link from "next/link";

export default function Header({ className, ...props }) {
  return (
    <Layer className={`z-50`} speed={3} {...props}>
      <header
        className={`z-50 w-full p-4 h-16 bg-white/40 backdrop-blur-xl flex flex-row items-center justify-between ${className}`}
      >
        <Link href={"/"}>npuis</Link>
        <Link href={"/api/auth/signin"}>signIn</Link>
      </header>
    </Layer>
  );
}
