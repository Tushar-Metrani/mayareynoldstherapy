import ScriptWord from "../ui/ScriptWord";
import { site } from "@/content/site";
export default function OurExpertise() {
  const { headingStart, headingScript, areas } = site.ourexpertise;
  return (
    <div id="section" className="flex gap-12 flex-col justify-between md:flex-row px-6 py-10 md:p-[60px] lg:p-[100px]">
      <h3 className="text-subheadline md:max-w-[200px]">
        {headingStart} <ScriptWord>{headingScript}</ScriptWord>
      </h3>
      <div className="grid grid-cols-1 gap-x-14 md:grid-cols-2 md:max-w-[1200px]">
        {areas.map((area) => (
          <div
            key={area}
            className="flex min-h-[75px] items-center border-b border-[#e8e2dc] py-5"
          >
            <span className="text-sm font-light text-label">{area}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
