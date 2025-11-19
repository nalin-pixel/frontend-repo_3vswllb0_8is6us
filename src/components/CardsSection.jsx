import { motion } from "framer-motion";
import { Rocket, ShieldCheck, Sparkles, Zap, Layers } from "lucide-react";

const cards = [
  {
    icon: Rocket,
    title: "Fast Launch",
    item: "Spin up features in minutes with a clean, modern base.",
    accent: "from-pink-500 via-rose-500 to-orange-500",
  },
  {
    icon: ShieldCheck,
    title: "Secure by Design",
    item: "Best practices baked in for accessibility and security.",
    accent: "from-emerald-500 via-teal-500 to-cyan-500",
  },
  {
    icon: Sparkles,
    title: "Polished UI",
    item: "Thoughtful motion, depth, and contrast for instant delight.",
    accent: "from-indigo-500 via-violet-500 to-fuchsia-500",
  },
  {
    icon: Zap,
    title: "Snappy Performance",
    item: "Lightweight components and subtle animations that fly.",
    accent: "from-amber-500 via-orange-500 to-red-500",
  },
  {
    icon: Layers,
    title: "Scalable Patterns",
    item: "Composable structure ready for growth and iteration.",
    accent: "from-sky-500 via-blue-500 to-indigo-500",
  },
];

function Card({ icon: Icon, title, item, accent, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: "easeOut" }}
      className="relative group"
    >
      <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br opacity-60 group-hover:opacity-100 transition-opacity duration-300 blur-sm pointer-events-none "
           style={{ backgroundImage: `linear-gradient(135deg, var(--tw-gradient-from), var(--tw-gradient-to))` }}></div>

      <div className={`relative rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-xl p-6 shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition-transform duration-300 group-hover:-translate-y-1`}
      >
        <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${accent} text-white shadow-[0_8px_24px_rgba(59,130,246,0.25)] mb-4`}
        >
          <Icon className="h-6 w-6" />
        </div>
        <h4 className="text-white text-lg font-semibold tracking-tight mb-2">{title}</h4>
        <ul className="list-disc list-inside">
          <li className="text-blue-100/90 leading-relaxed">{item}</li>
        </ul>
      </div>
    </motion.div>
  );
}

export default function CardsSection() {
  return (
    <section className="relative py-10 sm:py-14">
      <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_80%_-10%,rgba(56,189,248,0.15),transparent),radial-gradient(600px_300px_at_10%_110%,rgba(168,85,247,0.12),transparent)] pointer-events-none"></div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-12 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">What you get</h3>
          <p className="mt-2 text-blue-200/80 text-sm sm:text-base">Five focused benefits presented with clarity and style</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {cards.map((c, i) => (
            <Card key={c.title} icon={c.icon} title={c.title} item={c.item} accent={c.accent} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
