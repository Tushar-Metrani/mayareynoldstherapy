import Image from "next/image";
import { site } from "@/content/site";
import ScriptWord from "@/components/ui/ScriptWord";

export default function Hero() {
  const {
    eyebrow,
    headingStart,
    headingScript,
    subtext,
    cta,
    imageMain,
    imageSide,
  } = site.hero;

  return (
    <section className="relative grid grid-cols-[70%_14%_16%] bg-secondary md:h-[568px] md:grid-cols-[34%_1fr] md:grid-rows-1 md:pt-6">
      {/* Text: first on mobile (spans the full width), right-hand column on desktop */}
      <div className="col-span-3 row-start-1 flex flex-col justify-between gap-12 px-6 py-12 md:col-span-1 md:col-start-2 md:py-0 md:pl-[8.3vw] md:pr-[10vw] md:pb-3">
        <p className="max-w-[22rem] md:pt-4 font-[400]">{eyebrow}</p>

        <div>
          <h1 className="text-hero max-w-[37rem] lg:text-[56px]">
            {headingStart} <ScriptWord>{headingScript}</ScriptWord>.
          </h1>
          <p className="mt-9 text-label">{subtext}</p>
          <a href="#" className="link-underline mt-8 text-body">
            {cta.label}
          </a>
        </div>
      </div>

      <div className="relative col-start-1 row-start-2 aspect-[268/305] md:col-start-1 md:row-start-1 md:aspect-auto md:h-full">
        <Image
          src={imageMain.src}
          alt={imageMain.alt}
          fill
          priority
          sizes="(min-width: 768px) 100vw, 70vw"
          className="object-cover mix-blend-multiply opacity-90"
        />
      </div>

      <div className="relative col-start-3 row-start-2 mt-[27vw] md:col-auto md:row-auto md:absolute md:right-0 md:top-[187px] md:mt-0 md:h-[381px] md:w-[8vw]">
        <Image
          src={imageSide.src}
          alt={imageSide.alt}
          fill
          sizes="(min-width: 768px) 100vw, 16vw"
          className="object-right object-cover mix-blend-multiply"
        />
      </div>
    </section>
  );
}
