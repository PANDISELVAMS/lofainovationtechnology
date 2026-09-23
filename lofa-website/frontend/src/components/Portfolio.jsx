import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import useFetch from "../hooks/useFetch";

export default function Portfolio() {
  const { data: portfolio } = useFetch("/portfolio", []);
  if (portfolio.length === 0) return null;

  return (
    <section className="section">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-xs font-semibold uppercase tracking-widest text-accent-400">Our Work</span>
        <h2 className="section-title mt-3">Projects that <span className="gradient-text">speak for themselves</span></h2>
      </div>
      <div className="mt-14 grid gap-6 sm:grid-cols-2">
        {portfolio.map((p, i) => (
          <motion.div key={p._id} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (i % 2) * 0.1 }} className="group relative overflow-hidden rounded-2xl">
            <img src={p.image || "https://placehold.co/600x400/12141f/6d5bff?text=" + encodeURIComponent(p.client)} alt={p.client} className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-base-950 via-base-950/60 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <h3 className="font-display text-lg font-semibold">{p.client}</h3>
              <p className="text-sm text-white/60">{p.type} · {p.duration}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {(p.technologies || []).map((t) => (<span key={t} className="rounded-full bg-white/10 px-2.5 py-1 text-[11px]">{t}</span>))}
              </div>
              <div className="mt-4 flex gap-4 text-sm">
                {p.liveLink && <a href={p.liveLink} className="flex items-center gap-1 hover:text-accent-400"><FaExternalLinkAlt /> Live</a>}
                {p.githubLink && <a href={p.githubLink} className="flex items-center gap-1 hover:text-accent-400"><FaGithub /> Code</a>}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
