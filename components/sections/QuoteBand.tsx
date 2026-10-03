import Image from "next/image";
import { site } from "@/content/site";

export default function QuoteBand() {
  const { text, emphasis, image } = site.quoteBand;

  return (
    <section className="relative flex min-h-[300px] items-end overflow-hidden lg:h-[540px]">
      <Image src={image.src} alt={image.alt} fill sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-primary/75" aria-hidden="true" />

      <h2 className="relative z-10 max-w-[900px] text-headline text-white px-6 py-8 md:p-[60px] lg:p-[100px]">
        {text} <em className="font-light">{emphasis}</em>
      </h2>
    </section>
  );
}
