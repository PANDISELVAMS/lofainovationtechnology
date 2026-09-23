import ProductCard from "./ProductCard";
import useFetch from "../hooks/useFetch";

export default function ProductsGrid() {
  const { data: products } = useFetch("/products", []);
  if (products.length === 0) return null;

  return (
    <section className="section">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-xs font-semibold uppercase tracking-widest text-accent-400">Our Products</span>
        <h2 className="section-title mt-3">Built by LOFA, <span className="gradient-text">used by teams</span></h2>
      </div>
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((p, i) => (<ProductCard key={p._id} product={p} index={i} />))}
      </div>
    </section>
  );
}
