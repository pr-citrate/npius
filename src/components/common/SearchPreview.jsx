import Link from "next/link";

export default function SearchPreview({ href = "#", name }) {
  return (
    <Link
      href={href}
      className="block w-full px-2 py-1 border-2 border-t-0 border-blue-300 hover:bg-sky-100 last:rounded-b-md focus:outline-none focus:bg-sky-100"
    >
      <li className="w-full h-full">{name}</li>
    </Link>
  );
}
