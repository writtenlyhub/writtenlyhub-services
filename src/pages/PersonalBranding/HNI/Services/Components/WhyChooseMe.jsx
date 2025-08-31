import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Crown, ShieldCheck, Megaphone, Briefcase, Cog } from "lucide-react";

const items = [
  {
    icon: Crown,
    title: "Ultra-high-net-worth psychology expertise",
    subtitle: "I understand your world",
  },
  {
    icon: ShieldCheck,
    title: "Discretion-first approach",
    subtitle: "Strategic visibility, not publicity",
  },
  {
    icon: Megaphone,
    title: "Industry authority positioning",
    subtitle: "Become THE voice in your sector",
  },
  {
    icon: Briefcase,
    title: "Premium opportunity pipeline",
    subtitle: "Boards, partnerships, media",
  },
  {
    icon: Cog,
    title: "Complete done-for-you system",
    subtitle: "Zero time investment required",
  },
];

export default function WhyChooseMe() {
  const containerRef = useRef(null);
  const [active, setActive] = useState(0);
  const stepsRef = useRef([]);

  useEffect(() => {
    const options = { root: null, rootMargin: "0px", threshold: 0.6 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const idx = Number(entry.target.getAttribute("data-index"));
          setActive(idx);
        }
      });
    }, options);

    stepsRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="WhyChooseMe" className="relative w-full bg-[#022150] text-white py-12 md:py-20 overflow-hidden font-montserrat">
      {/* Background accents */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute -top-24 -left-20 w-56 h-56 md:w-80 md:h-80 rounded-full bg-orange-400/10 blur-2xl md:blur-3xl"></div>
        <div className="absolute -bottom-24 -right-16 w-56 h-56 md:w-80 md:h-80 rounded-full bg-blue-500/10 blur-2xl md:blur-3xl"></div>
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
          <span className="text-orange-500 font-medium text-xs md:text-sm uppercase tracking-[0.2em]">Why choose me</span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight mt-3">
            The benefits that justify choosing <span className="text-orange-500">WrittenlyHub</span>
          </h2>
        </motion.div>

        {/* Scrollytelling Cards */}
        <div ref={containerRef} className="relative">
          {/* Sticky viewport card area */}
          <div className="sticky top-24 md:top-28 z-10">
            <div className="relative mx-auto w-full max-w-4xl h-[380px] md:h-[440px]">
              {items.map((item, i) => {
                const Icon = item.icon;
                const isActive = i === active;
                return (
                  <motion.div
                    key={i}
                    className="absolute inset-0 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 md:p-8 flex flex-col items-start justify-center shadow-[0_10px_30px_-10px_rgba(0,0,0,0.4)]"
                    animate={{ opacity: isActive ? 1 : 0, scale: isActive ? 1 : 0.97, y: isActive ? 0 : 12 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                    style={{ pointerEvents: isActive ? "auto" : "none" }}
                  >
                    <span className="inline-flex items-center justify-center rounded-full bg-orange-500/15 text-orange-400 w-12 h-12 mb-4">
                      <Icon className="w-6 h-6" />
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-white/80 text-lg">{item.subtitle}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Scroll steps to trigger replacement */}
          <div className="relative">
            {items.map((_, i) => (
              <div
                key={i}
                ref={(el) => (stepsRef.current[i] = el)}
                data-index={i}
                className="h-[75vh] md:h-[90vh]"
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 md:mt-12 flex justify-center">
          <a
            href="https://calendly.com/asthaverma/build-your-personal-brand-with-me"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 md:px-12 md:py-4 bg-orange-500 hover:bg-white text-white hover:text-orange-500 font-semibold rounded-full transition-colors duration-300"
          >
            Book your upgrade
          </a>
        </div>
      </div>
    </section>
  );
}
