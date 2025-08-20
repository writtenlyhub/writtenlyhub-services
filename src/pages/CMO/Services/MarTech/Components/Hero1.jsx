import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import HeroVid from "../assets/herovid.mp4";

const profileImages = [
  'https://randomuser.me/api/portraits/women/44.jpg',
  'https://randomuser.me/api/portraits/men/32.jpg',
  'https://randomuser.me/api/portraits/women/68.jpg',
  'https://randomuser.me/api/portraits/men/75.jpg'
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);
  const videoContainerRef = useRef(null);
  
  // Check if mobile on mount and resize
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Only enable scroll effects on desktop
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
    enabled: !isMobile
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  const y = useTransform(scrollYProgress, [0, 9], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section 
      ref={sectionRef}
      className="bg-[#022150] text-white relative overflow-hidden flex justify-center items-center min-h-screen py-8 md:py-16 px-4 sm:px-6"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="w-full max-w-7xl mx-auto flex flex-col items-center"
      >
        {/* Mini Social Proof - Responsive */}
        <motion.div 
          variants={fadeInUp} 
          className="flex flex-col sm:flex-row items-center gap-3 mb-6 sm:mb-4"
          style={{ opacity: isMobile ? 1 : opacity }}
        >
          <div className="flex -space-x-2">
            {profileImages.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`User ${i}`}
                className="h-7 w-7 sm:h-8 sm:w-8 rounded-full border-2 border-orange-500 object-cover"
              />
            ))}
          </div>
          <p className="text-sm sm:text-md text-white/80 text-center sm:text-left">
            Trusted by 500+ growth leaders
          </p>
        </motion.div>

        {/* Headline - Responsive */}
        <motion.h1
          variants={fadeInUp}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-snug sm:leading-tight mb-4 sm:mb-6 text-center max-w-4xl md:max-w-5xl"
          style={{ opacity: isMobile ? 1 : opacity }}
        >
          Stop burning cash on experiments.
          <span className="text-orange-500 block sm:inline"> Get B2B SaaS marketing that actually works.</span>
        </motion.h1>

        {/* Subtext - Responsive */}
        <motion.p
          variants={fadeInUp}
          className="text-white/90 text-base sm:text-lg mb-6 sm:mb-8 text-center max-w-xs sm:max-w-md md:max-w-2xl"
          style={{ opacity: isMobile ? 1 : opacity }}
        >
          Skip the 18-month hiring cycle. Get a full marketing team, 40% faster, 70% cheaper.
        </motion.p>

        {/* CTA - Responsive */}
        <motion.div 
          variants={fadeInUp} 
          className="mb-8 sm:mb-10"
          style={{ opacity: isMobile ? 1 : opacity }}
        >
          <a
            href="#pricing"
            className="inline-block px-6 py-3 bg-orange-500 cursor-pointer hover:bg-white text-white hover:text-orange-500 font-semibold rounded-full transition-colors duration-700"
          >
            Let's cut the BS & figure it out
          </a>
        </motion.div>

        {/* Video - Responsive */}
        <motion.div 
          ref={videoContainerRef}
          variants={fadeInUp} 
          className={`w-[84%] ${isMobile ? 'max-w-4xl px-2' : 'max-w-6xl px-3'}`}
          style={{
            scale: isMobile ? 1 : scale,
            y: isMobile ? 0 : y,
          }}
        >
          <div className="rounded-lg sm:rounded-xl overflow-hidden border-2 sm:border-4 border-white/10 shadow-lg">
            <div className="aspect-video bg-black">
              <video
                src={HeroVid}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
                onContextMenu={(e) => e.preventDefault()}
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;