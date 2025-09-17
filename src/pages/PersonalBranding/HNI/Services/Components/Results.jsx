import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const results = [
  "Industry media starts reaching out for expert commentary",
  "Premium partnership opportunities come to you",
  "Speaking invitations at exclusive industry events",
  "Board positions with companies that matter",
  // "Deal flow from peers who respect your insights",
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Results() {
  return (
    <section className="relative w-full bg-[#022150] text-white py-12 md:py-20 overflow-hidden font-montserrat">
      {/* Background accents */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute -top-24 -left-20 w-56 h-56 md:w-80 md:h-80 rounded-full bg-orange-400/10 blur-2xl md:blur-3xl"></div>
        <div className="absolute -bottom-24 -right-16 w-56 h-56 md:w-80 md:h-80 rounded-full bg-blue-500/10 blur-2xl md:blur-3xl"></div>
        <div className="absolute inset-x-0 top-1/3 h-px bg-white/10"></div>
      </div>

      <div className="w-[90%] md:w-[80%] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-14"
        >
          <span className="text-orange-500 font-medium text-xs md:text-sm uppercase tracking-[0.2em]">
            Results
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight mt-3">
            What happens when your expertise finally gets
            <span className="text-orange-500"> the platform it deserves</span>
          </h2>
          <p className=" text-base md:text-lg mt-4 max-w-3xl mx-auto">
            Instead of staying invisible while less qualified voices dominate
            your industry:
          </p>
        </motion.div>

        {/* Results list */}
        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 lg:gap-5"
        >
          {results.map((text, i) => (
            <motion.li
              key={i}
              variants={item}
              className="group relative flex items-start gap-3 md:gap-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 md:px-6 md:py-5 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/5"
            >
              <span className="mt-0.5 shrink-0 relative">
                <span className="inline-flex items-center justify-center rounded-full bg-gradient-to-br from-orange-500/20 to-orange-600/10 text-orange-400 w-8 h-8 border border-orange-500/20 group-hover:border-orange-500/30 transition-colors">
                  <CheckCircle2 className="w-5 h-5" />
                </span>
                <div className="absolute inset-0 rounded-full bg-orange-500/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </span>

              <p className="text-white/90 text-base md:text-lg leading-relaxed relative z-10">
                {text}
              </p>

              <span
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(800px 200px at var(--x,50%) var(--y,50%), rgba(255,165,0,0.08), rgba(59,130,246,0.04), transparent 70%)`,
                }}
              />

              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500/10 via-transparent to-blue-500/10 blur-sm"></div>
              </div>
            </motion.li>
          ))}
        </motion.ul>

        {/* Closing line + CTA */}
        <div className="mt-10 md:mt-14 flex flex-col items-center gap-6">
          <p className=" text-base md:text-lg text-center max-w-2xl">
            <span className="text-white">Strategic visibility</span> that
            enhances reputation, not ego.
          </p>
          <a
            href="https://calendly.com/asthaverma/build-your-personal-brand-with-me"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 md:px-12 md:py-4 bg-orange-500 hover:bg-white text-white hover:text-orange-500 font-semibold rounded-full transition-colors duration-300"
          >
            Build this
          </a>
        </div>
      </div>
    </section>
  );
}
