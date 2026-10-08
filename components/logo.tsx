import Image from "next/image";
import Link from "next/link";

const markSrc = "/brand/soontobe-mark-v2.png";

const wordmarkClass =
  "font-display text-[13px] leading-none font-semibold tracking-[0.16em] text-foreground uppercase sm:text-[14px]";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="SOONTOBE"
      className={`inline-flex items-center gap-3 ${className}`}
    >
      <Image
        src={markSrc}
        alt=""
        width={1254}
        height={1254}
        priority
        className="h-5 w-auto sm:h-6"
      />
      <span className={wordmarkClass}>SOONTOBE</span>
    </Link>
  );
}

export function BrandMark({ className = "" }: { className?: string }) {
  return (
    <Image
      src={markSrc}
      alt=""
      width={1254}
      height={1254}
      aria-hidden
      className={className}
    />
  );
}
