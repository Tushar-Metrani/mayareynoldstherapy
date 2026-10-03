import { site } from "@/content/site";
import Image from "next/image";

export default function Logo({ width = 260, height = 75 }) {
  const { logo } = site;

  return (
    <Image
      src={logo.src}
      alt={logo.alt}
      width={width}
      height={height}
      priority
    />
  );
}