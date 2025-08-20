import { motion } from "framer-motion";
// Use react-icons for better icons
import { FaLinkedin, FaInstagram, FaQuoteLeft } from "react-icons/fa";

const Founders = () => {
  return (
    <section className="bg-[#022150] py-24 px-4 font-montserrat">
      <div className="w-[80%] max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-orange-500 font-medium text-md uppercase tracking-widest">
            Introducing the person behind it
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight text-white mt-2 md:mt-3 mb-3 md:mb-4">
            Meet the strategist <span className="text-orange-500 block">behind your LinkedIn success</span>
          </h2>
        </motion.div>

   {/*bottom section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col md:flex-row items-start gap-6"
        >
          {/* Left Side - Image */}
          <div className="w-full md:w-1/2 flex-shrink-0 flex relative">
            <div className="absolute -top-6 -left-6 bg-orange-500 p-8 rounded-full z-10">
              <FaQuoteLeft className="text-white text-6xl" />
            </div>
            <img
              src="https://i.ibb.co/d4LzLyfg/Untitled-design-34.png"
              alt="Astha Verma"
              className="w-[94%] h-full object-cover rounded-2xl shadow-lg md:max-h-none md:h-full relative"
              style={{ minHeight: "420px" }}
            />
          </div>

          {/* Right Side - Content */}
          <div className="w-full md:w-1/2 text-white space-y-4 flex flex-col h-full">
            <div>
              <h3 className="text-orange-500 font-bold text-2xl md:text-4xl leading-snug">
                Astha Verma
              </h3>
              <h3 className="text-orange-500 font-semobild text-2xl md:text-3xl leading-snug mb-4">
                The Founder Who Gets Founders
              </h3>

              <p className="text-base md:text-lg font-medium leading-relaxed  mb-2">
                I've worked with industry-shifting founders and life-changing coaches whose brilliance never made it past the algorithm. The work is always solid but the way it's showing up online? Not doing it justice.
              </p>
              <p className="text-base md:text-lg font-medium leading-relaxed italic mb-2">
                Here's what I know: Your expertise isn't the problem. It's how you're talking about it.
              </p>
              <p className="text-base md:text-lg font-medium leading-relaxed  mb-2">
                I live in the messy middle between what you do and how the world needs to hear it. From cutting the fluff from jargon-filled bios to figuring out why no one's engaging with your posts, I'm in it with you.
              </p>
              <p className="text-base md:text-lg font-medium leading-relaxed  mb-2">
                I've built my own brand from scratch. I know the late nights, the awkward pivots, the panic when leads go silent.
              </p>
              <p className="text-base md:text-lg font-medium leading-relaxed italic mb-2">
                And I know how to turn your LinkedIn into a magnet for "Let's work together" instead of "Send me your lowest price."
              </p>
            </div>

            <div className="mt-auto">
              <p className="text-base md:text-lg font-semibold text-orange-500 mb-4">
                Your story matters. Let's make sure it's heard.
              </p>
              
              <div className="flex items-center gap-4 mb-6">
                <a href="https://in.linkedin.com/in/astha-verma-av" target="_blank" className="text-white hover:text-orange-500 transition-colors">
                  <FaLinkedin size={28} />
                </a>
                <a href="https://www.instagram.com/wholelottaastha/" target="_blank" className="text-white hover:text-orange-500 transition-colors">
                  <FaInstagram size={28} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      {/* CTA */}
      <div className="w-[80%] mx-auto mt-8 text-center">
        <a 
        href="https://calendly.com/asthaverma/build-your-personal-brand-with-me"
        target="_blank"
        rel="noopener noreferrer"
className="inline-block px-12 py-4 bg-orange-500 cursor-pointer hover:bg-white text-white text-md  hover:text-orange-500 font-semibold rounded-full transition-colors duration-700"        >
          Work with Astha
        </a>
      </div>
    </section>
  );
};

export default Founders;