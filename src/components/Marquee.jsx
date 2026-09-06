import { MARQUEE_ITEMS } from "../data";

export default function Marquee() {
  const row = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <div
      data-testid="editorial-marquee"
      className="relative py-6 border-y border-slate-800/60 bg-[#070a10] overflow-hidden"
    >
      <div className="marquee-track flex whitespace-nowrap w-max">
        {row.map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="font-display text-lg sm:text-xl font-medium tracking-wide text-slate-600 px-6">
              {item}
            </span>
            <span className="text-cyan-400/40 text-xs">&#9670;</span>
          </span>
        ))}
      </div>
    </div>
  );
}
