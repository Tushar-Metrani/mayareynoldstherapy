import ScriptWord from "../ui/ScriptWord";
import { site } from "@/content/site";
export default function OurSpecialties() {
  const { headingStart, headingScript, headingEnd, items } = site.specialties;
  return (
    <div id="section" className="flex flex-col gap-12 px-6 py-10 md:flex-row md:p-[60px] lg:p-[100px]">
      <h3 className="text-subheadline md:max-w-[300px] lg:shrink-0">
        {headingStart} <ScriptWord>{headingScript}</ScriptWord> {headingEnd}
      </h3>
      <div className="mt-12 grid gap-x-16 gap-y-10 md:mt-0 md:grid-cols-2 md:gap-y-32 lg:pt-2">
        {items.map((item) => (
          <article key={item.title}>
            <h4 className="text-lead">{item.title}</h4>
            <p className="mt-8 text-body">{item.text}</p>
            <a href={item.cta.href} className="mt-6 link-underline">
              {item.cta.label}
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}
