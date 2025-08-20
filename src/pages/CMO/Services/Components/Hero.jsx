import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import HeroVid from "../assets/herovid.mp4";
import Logo from "../assets/logo.png"; // Adjust this import to your actual logo path

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
      className="font-montserrat bg-[#022150] text-white relative overflow-hidden flex justify-center items-center min-h-screen py-12 md:py-20 "
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="w-full max-w-7xl mx-auto flex flex-col items-center"
      >
        {/* Logo */}
        <motion.div 
          variants={fadeInUp} 
          className="mb-4  w-[80%]"
          style={{ opacity: isMobile ? 1 : opacity }}
        >
          <img src={Logo} alt="Company Logo" className="h-14 w-auto" />
        </motion.div>

        {/* Headline - Left aligned */}
        <motion.h1
          variants={fadeInUp}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-semibold leading-tight sm:leading-tight mb-4  text-left w-[80%]"
          style={{ opacity: isMobile ? 1 : opacity }}
        >
          Stop burning cash on experiments. Get a
          <span className="text-orange-500  sm:inline "> B2B SaaS marketing partner</span> who gets results.
        </motion.h1>

        {/* Subtext - Left aligned */}
        <motion.p
          variants={fadeInUp}
          className="text-white/90 text-lg sm:text-xl mb-6 text-left w-[80%]"
          style={{ opacity: isMobile ? 1 : opacity }}
        >
          Skip the 18-month hiring cycle. Get a full marketing team, 40% faster, 70% cheaper.
        </motion.p>

        {/* CTA with social proof */}
        <motion.div 
          variants={fadeInUp} 
          className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-10 sm:mb-12 w-[80%]"
          style={{ opacity: isMobile ? 1 : opacity }}
        >
          <a
           href="https://outlook.office.com/book/G7dffb8790bab4b95b7e8fd20179d2514@writtenlyhub.com/"
        target="_blank"
        rel="noopener noreferrer"
className="inline-block px-12 py-4 bg-orange-500 cursor-pointer hover:bg-white text-white text-md  hover:text-orange-500 font-semibold rounded-full transition-colors duration-700"          >
            Let's cut the BS & figure it out
          </a>
          
          {/* Social proof */}
          {/* Social proof */}
<div className="flex flex-col items-start">
  <div className="flex -space-x-2 mb-2">
    {profileImages.map((img, i) => (
      <img
        key={i}
        src={img}
        alt={`User ${i}`}
        className="h-7 w-7 sm:h-8 sm:w-8 rounded-full border-2 border-orange-500 object-cover"
      />
    ))}
  </div>
  <p className="text-lg font-medium text-white/80">
    (Only 3 spots left this quarter)
  </p>
</div>
        </motion.div>

        {/* Video - 80% width to match text */}
        <motion.div 
          ref={videoContainerRef}
          variants={fadeInUp} 
          className="w-[80%]"
          style={{
            scale: isMobile ? 1 : scale,
            y: isMobile ? 0 : y,
          }}
        >
          <div className="rounded-lg sm:rounded-xl overflow-hidden border-2 sm:border-4 border-white/10 shadow-md">
            <div className="aspect-video bg-black">
              <video
                src={HeroVid}
                autoPlay
                loop
                muted
                controls
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