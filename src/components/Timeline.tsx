import { timeline } from "@/content/timeline";

export function Timeline() {
  return (
    <ol className="relative space-y-10 border-l border-lime/30 pl-8 md:space-y-14">
      {timeline.map((item) => (
        <li key={item.year} className="relative">
          <span
            className="absolute -left-[2.15rem] top-1.5 h-3 w-3 rounded-full border-2 border-lime bg-forest-deep"
            aria-hidden
          />
          <p className="type-stat-sm">{item.year}</p>
          <h3 className="type-title-sm mt-2">{item.title}</h3>
          <p className="type-body mt-3">{item.text}</p>
        </li>
      ))}
    </ol>
  );
}
