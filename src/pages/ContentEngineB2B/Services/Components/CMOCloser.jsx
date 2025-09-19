import { motion } from "framer-motion";

const CMOCloser = () => {
  const profileImages = [
    "https://randomuser.me/api/portraits/women/44.jpg",
    "https://randomuser.me/api/portraits/men/32.jpg",
    "https://randomuser.me/api/portraits/women/68.jpg",
    "https://randomuser.me/api/portraits/men/75.jpg",
  ];

  return (
    <section className="bg-[#022150] py-20 px-6 font-montserrat">
      <div className="w-full max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-6"
        >
          <h3 className="text-orange-500 font-bold text-3xl md:text-5xl mb-16">
            Your pipeline targets aren't getting any smaller
          </h3>

          <p className="text-white text-xl md:text-2xl mb-4 max-w-6xl mx-auto">
            While you're juggling content calendars and chasing freelancers,
            your competitors are publishing consistently and capturing the
            prospects you should be closing.
          </p>

          <p className="text-white text-lg md:text-2xl leading-relaxed mb-8 max-w-3xl mx-auto">
            The SaaS companies scaling fastest are the ones with unlimited
            content engines.
          </p>

          <div className="flex flex-col items-center space-y-4">
            <div className="relative inline-block">
              <a
                href="https://calendly.com/asthaverma/build-your-personal-brand-with-me"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-14 py-3 bg-orange-500 cursor-pointer hover:bg-white text-white text-md hover:text-orange-500 font-semibold rounded-full transition-colors duration-700"
              >
                <span className="flex items-center">
                  Get unlimited
                  <div className="ml-3 flex -space-x-2">
                    {profileImages.slice(0, 3).map((img, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                        viewport={{ once: true }}
                        className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm border-2 border-white/30 overflow-hidden"
                        style={{ zIndex: 10 - index }}
                      >
                        <img
                          src={img}
                          alt="Happy customer"
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                    ))}
                  </div>
                </span>
              </a>
            </div>

            <p className="text-white text-lg md:text-xl italic">
              P.S. We only have the capacity for{" "}
              <span className="text-orange-500">2 new retainer projects.</span>{" "}
              We’ve warned you!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CMOCloser;
