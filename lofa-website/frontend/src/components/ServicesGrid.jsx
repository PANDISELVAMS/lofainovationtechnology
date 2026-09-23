import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ServiceCard from "./ServiceCard";
import useFetch from "../hooks/useFetch";

export default function ServicesGrid() {
  const { data: services } = useFetch("/services", []);
  if (services.length === 0) return null;

  return (
    <section className="section">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-xs font-semibold uppercase tracking-widest text-accent-400">What We Do</span>
        <h2 className="section-title mt-3">Full-stack services for <span className="gradient-text">modern businesses</span></h2>
        <p className="mt-4 text-white/60">From idea to enterprise-scale software — LOFA covers every layer of your product.</p>
      </div>
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.slice(0, 6).map((s, i) => (<ServiceCard key={s._id} service={s} index={i} />))}
      </div>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-10 text-center">
        <Link to="/services" className="btn-outline">View All Services</Link>
      </motion.div>
    </section>
  );
}
