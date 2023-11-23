import Link from "next/link";
import { PropsWithChildren } from "react";
export default function Chip({
  children,
  href,
}: PropsWithChildren & { href: string }) {
  return (
    <Link
      href={`/tags/${href}`}
      className="text-blue-400 capitalize text-[12.2px]"
    >
      {children}
    </Link>
  );
}
