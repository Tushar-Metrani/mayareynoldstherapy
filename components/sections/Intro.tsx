import Image from "next/image";
import { site } from "@/content/site";

export default function Intro() {
  const { heading, leadLabel, leftText, rightText, image } = site.intro;

  return (
    <section className="md:grid md:grid-cols-[1fr_31%] md:min-h-[731px] gap-12 bg-secondary px-6 py-10 md:pr-0 md:py-[60px] md:pl-[60px] lg:pl-[100px] lg:py-[100px]">
      {/* Left: heading + two text columns, vertically centered */}
      <div className="md:flex md:flex-col md:justify-center">
        <h2 className="text-headline max-w-[42rem]">{heading}</h2>

        <div className="mt-10 grid gap-8 md:mt-16 md:grid-cols-2 md:gap-9">
          <div>
            <p className="uppercase font-[400]">{leadLabel}</p>
            <p className="mt-5">{leftText}</p>
          </div>
          <div className="relative h-[420px] md:hidden">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 768px) 31vw, 100vw"
              className="object-cover mix-blend-multiply opacity-90"
            />
          </div>
          <p className="leading-[1.9] text-[1.02rem] md:pt-1">{rightText}</p>
        </div>
      </div>

      <div className="hidden md:flex relative h-[420px] md:mt-[90px] md:h-[641px]">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(min-width: 768px) 31vw, 100vw"
          className="object-cover mix-blend-multiply opacity-90"
        />
      </div>
    </section>
  );
}
