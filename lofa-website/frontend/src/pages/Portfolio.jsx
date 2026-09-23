import Portfolio from "../components/Portfolio";
import ClientShowcase from "../components/ClientShowcase";

export default function PortfolioPage() {
  return (
    <div className="pt-28">
      <div className="section !pb-0 text-center">
        <span className="text-xs font-semibold uppercase tracking-widest text-accent-400">Portfolio</span>
        <h1 className="section-title mt-3">Selected <span className="gradient-text">case studies</span></h1>
      </div>
      <Portfolio />
      <ClientShowcase />
    </div>
  );
}
