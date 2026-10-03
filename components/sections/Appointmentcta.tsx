import Image from "next/image";
import { site } from "@/content/site";
import ScriptWord from "@/components/ui/ScriptWord";

export default function AppointmentCTA() {
  const {
    eyebrow,
    headingStart,
    headingScript,
    text,
    note,
    cta,
    imageLeft,
    imageRight,
  } = site.appointmentCta;

  return (
    <section className="md:grid md:grid-cols-[12vw_1fr_34.5vw] md:items-start bg-secondary py-[40px] md:py-[60px] lg:py-[100px]">
      <div className="relative aspect-[4/5] w-[48%] md:aspect-auto md:h-[426px] md:w-full md:self-end">
        <Image
          src={imageLeft.src}
          alt={imageLeft.alt}
          fill
          sizes="(min-width: 768px) 60vw, 48vw"
          className="object-cover mix-blend-multiply opacity-80"
        />
      </div>

      <div className="mt-16 px-6 lg:mt-0 lg:pl-[8.3vw] lg:pr-0 lg:pt-[60px]">
        <p className="text-lead font-[400]">{eyebrow}</p>

        <h2 className="mt-8 max-w-[32rem] font-serif font-light text-headline lg:mt-20">
          {headingStart} <ScriptWord>{headingScript}</ScriptWord>.
        </h2>

        <p className="mt-6 max-w-[31rem] text-body">{text}</p>
        <p className="mt-3 max-w-[31rem] text-body">{note}</p>

        <button className="mt-6 btn">{cta.label}</button>
      </div>

      <div className="relative ml-auto mt-12 aspect-square w-[82%] md:ml-0 md:mt-0 md:aspect-auto md:h-[535px] md:w-full md:self-end">
        <Image
          src={imageRight.src}
          alt={imageRight.alt}
          fill
          sizes="(min-width: 768px) 60vw, 82vw"
          className="object-cover mix-blend-multiply opacity-90"
        />
      </div>
    </section>
  );
}
