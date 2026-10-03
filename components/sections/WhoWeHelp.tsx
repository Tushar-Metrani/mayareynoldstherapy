import Image from "next/image";
import { site } from "@/content/site";
import ScriptWord from "@/components/ui/ScriptWord";

export default function WhoWeHelp() {
  const { headingStart, headingScript, items } = site.whoWeHelp;

  return (
    <section className="px-6 py-10 md:p-[60px] lg:p-[100px]">
      <h3 className="text-subheadline">
        {headingStart} <ScriptWord>{headingScript}</ScriptWord>
      </h3>

      <div className="mt-10 grid gap-12 md:ml-[16.3%] md:mr-[6.1%] md:mt-12 md:grid-cols-3 md:gap-5">
        {items.map((item) => (
          <article key={item.title}>
            <div className="relative aspect-[17/20] w-full">
              <Image
                src={item.image.src}
                alt={item.image.alt}
                fill
                sizes="(min-width: 768px) 25vw, 100vw"
                className="object-cover mix-blend-multiply opacity-90"
              />
            </div>
            <h4 className="mt-10 text-lead">{item.title}</h4>
            <p className="mt-6">{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
