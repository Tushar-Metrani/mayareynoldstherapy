import Image from "next/image";
import { site } from "@/content/site";

export default function HowWeWork() {
  const { eyebrow, heading, lead, textLeft, textRight, cta, image } = site.howWeWork;

  return (
    <section className="gap-12 bg-secondary py-14 md:grid md:grid-cols-[1fr_22.7vw] md:grid-rows-[auto_1fr] px-6 py-8 md:pr-0 md:pl-[60px] md:py-[60px] lg:p-[100px] lg:pr-0">

      <div className="md:col-start-1 md:row-start-1">
        <p className="text-lead font-[400]">{eyebrow}</p>
        <h2 className="mt-6 text-headline lg:mt-[5rem]">{heading}</h2>
      </div>

      {/* Image: sits between heading and text on mobile, full-height on the right on desktop */}
      <div className="relative mt-10 aspect-[14/13] md:col-start-2 md:row-span-2 md:row-start-1 md:mt-[67px] md:aspect-auto md:h-[643px]">
        <Image src={image.src} alt={image.alt} fill sizes="(min-width: 768px) 23vw, 90vw" className="object-cover" />
      </div>

      {/* Two text columns + link */}
      <div className="pt-3 md:col-start-1 md:row-start-2">
        <div className="grid gap-8 md:max-w-[50rem] md:grid-cols-2 md:gap-x-5">
          <div>
            <span className="font-[400]">{lead}</span>
            <p className="mt-4 text-body">{textLeft}</p>
          </div>
          <p className="text-body lg:pt-0.5">{textRight}</p>
        </div>

        <a href={cta.href} className="mt-10 lg:mt-20 link-underline">
          {cta.label}
        </a>
      </div>
    </section>
  );
}