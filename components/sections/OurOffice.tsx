import Image from "next/image";
import { site } from "@/content/site";
import ScriptWord from "@/components/ui/ScriptWord";

export default function OurOffice() {
  const {
    id,
    eyebrow,
    headingStart,
    headingScript,
    headingEnd,
    text,
    details,
    images,
    cta,
  } = site.ourOffice;
  const [main, second] = images;

  return (
    <section
      id={id}
      className="scroll-mt-8 bg-secondary py-14 md:grid md:grid-cols-[5fr_7fr] md:items-center md:gap-[4vw] md:py-24 md:pl-[8.8vw] md:pr-0"
    >
      <div className="px-6 md:px-0">
        <p className="text-lead font-[400]">{eyebrow}</p>

        <h2 className="mt-6 max-w-[30rem] font-serif font-light text-headline leading-[1.3]">
          {headingStart} <ScriptWord>{headingScript}</ScriptWord> {headingEnd}
        </h2>

        <div className="md:hidden mt-12 flex flex-col gap-3 md:mt-0 md:grid md:h-[640px] md:grid-cols-[1.2fr_1fr] md:items-end md:gap-4 md:pl-0">
          <figure className="relative aspect-[4/3] w-full md:aspect-auto md:h-full">
            <Image
              src={main.src}
              alt={main.alt}
              fill
              sizes="(min-width: 768px) 80vw, 100vw"
              className="object-cover"
            />
          </figure>

          <figure className="relative md:ml-auto aspect-[4/3] md:w-[78%] md:ml-0 md:aspect-auto md:h-[62%] md:w-full">
            <Image
              src={second.src}
              alt={second.alt}
              fill
              sizes="(min-width: 768px) 85vw, 78vw"
              className="object-cover"
            />
          </figure>
        </div>

        <p className="mt-8 max-w-[30rem] leading-[1.9] text-body">{text}</p>

        <dl className="mt-10 max-w-[30rem] divide-y divide-primary/20 border-y border-primary/20">
          {details.map((item) => (
            <div
              key={item.label}
              className="grid gap-1 py-4 sm:grid-cols-[8.5rem_1fr] sm:gap-6"
            >
              <dt className="uppercase tracking-[0.14em] text-label font-normal">
                {item.label}
              </dt>
              <dd className="leading-[1.7] text-body">{item.text}</dd>
            </div>
          ))}
        </dl>

        <button className="btn mt-10">{cta.label}</button>
      </div>

      <div className="hidden px-6 md:px-0 mt-12 md:flex flex-col gap-3 md:mt-0 md:grid md:h-[640px] md:grid-cols-[1.2fr_1fr] md:items-end md:gap-4 md:pl-0">
        <figure className="relative aspect-[4/3] w-full md:aspect-auto md:h-full">
          <Image
            src={main.src}
            alt={main.alt}
            fill
            sizes="(min-width: 768px) 80vw, 100vw"
            className="object-cover"
          />
        </figure>

        <figure className="relative md:ml-auto aspect-[4/3] md:w-[78%] md:ml-0 md:aspect-auto md:h-[62%] md:w-full">
          <Image
            src={second.src}
            alt={second.alt}
            fill
            sizes="(min-width: 768px) 85vw, 78vw"
            className="object-cover"
          />
        </figure>
      </div>
    </section>
  );
}
