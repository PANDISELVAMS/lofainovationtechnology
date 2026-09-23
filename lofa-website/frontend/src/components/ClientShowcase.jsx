import useFetch from "../hooks/useFetch";

// "Trusted by growing businesses" — a scrolling marquee of partner LOGOS
// (not text), fetched from the backend. Admin manages these at
// /admin/dashboard → Partners tab (upload a logo image + company name).
export default function ClientShowcase() {
  const { data: partners } = useFetch("/partners", []);
  if (partners.length === 0) return null;

  const track = [...partners, ...partners]; // duplicate for a seamless loop

  return (
    <section className="section !py-14">
      <p className="mb-8 text-center text-xs font-semibold uppercase tracking-widest text-white/40">Trusted by growing businesses</p>
      <div className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,white_10%,white_90%,transparent)]">
        <div className="flex w-max animate-marquee items-center gap-16">
          {track.map((p, i) => {
            const logo = (
              <img
                key={`${p._id}-${i}`}
                src={p.logo}
                alt={p.name}
                title={p.name}
                className="h-10 w-auto shrink-0 object-contain opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 sm:h-12"
              />
            );
            return p.link ? (
              <a key={`${p._id}-${i}-link`} href={p.link} target="_blank" rel="noreferrer">{logo}</a>
            ) : logo;
          })}
        </div>
      </div>
    </section>
  );
}
