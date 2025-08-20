import { motion } from "framer-motion";

const TestimonialSection = () => {
  const testimonials = [
    {
      quote: "Astha, Saksham, and the team felt like in-house partners. They understood our brand, delivered results without the back-and-forth, and gave strategic input that truly mattered.",
      name: "Megha Satish",
      role: "Founder, Kreatr",
      logo: "https://www.thekreatr.com/assets/images/kreatrLogo.svg"
    },
    {
      quote: "Writtenlyhub became our go-to for high-quality long-form content. Their consistency, speed, and strategic edge helped us scale content without sacrificing quality.",
      name: "Shweta Arora",
      role: "Sr. Project Manager, upGrad",
      logo: "https://ik.imagekit.io/upgrad1/abroad-images/logo/upGrad_logo_web.svg?tr=w-118,q-70"
    },
    {
      quote: "From brand positioning to website build, the team nailed it. They made our profile look sharp and delivered a smooth, on-point digital experience end-to-end.",
      name: "Nidhi Saraogi",
      role: "IT Project Manager, Basofa",
      logo: "https://www.basofa.com/wp-content/uploads/2024/01/BSF-Logo-Dimensions-Fit-1.png"
    },
    {
      quote: "Writtenlyhub shaped our website with clarity and purpose. They crafted user-friendly, accurate content that improved both search visibility and experience.",
      name: "Ankur",
      role: "Content Lead, Apollo 24/7",
      logo: "https://images.apollo247.in/images/icons/apollo247.svg"
    }
  ];

  // Duplicate the testimonials to create a seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="font-montserrat relative w-full bg-[#022150] py-12 md:py-20 overflow-hidden">
      {/* Header */}
      <div className="w-[90%] max-w-6xl mx-auto mb-12 md:mb-16 relative z-30 text-center px-4">
        <span className="text-orange-500 font-medium text-sm md:text-base uppercase tracking-widest">
          Founder’s thoughts
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-4">
         Straight talk from <span className="text-orange-500">fautomotive executives</span>
        </h2>
      </div>

      {/* Testimonial Cards Container with Fade Edges */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Fade effect on left and right */}
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#022150] to-transparent z-20"></div>
        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[#022150] to-transparent z-20"></div>
        
        {/* Infinite Scrolling Cards */}
        <motion.div
          className="flex gap-6 md:gap-8 w-max"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="w-[300px] md:w-[350px] flex-shrink-0 bg-white/5 rounded-xl p-6 md:p-8 hover:bg-white/10 transition-colors duration-300 flex flex-col"
            >
              {/* Quote */}
              <div className="mb-6 flex-grow">
                <svg 
                  className="w-8 h-8 text-orange-500 mb-4" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
                </svg>
                <p className="text-white text-sm md:text-base leading-relaxed">
                  {testimonial.quote}
                </p>
              </div>

              {/* Profile */}
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.logo} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-contain bg-white p-1 border-2 border-orange-500"
                  />
                  <div>
                    <h4 className="text-white font-bold">{testimonial.name}</h4>
                    <p className="text-white/80 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                {/* <div className="text-xs text-orange-500 font-medium">
                  Verified
                </div> */}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* CTA */}
      <div className="w-full mt-12 md:mt-16 text-center px-4">

<motion.a
  href="https://outlook.office.com/book/G7dffb8790bab4b95b7e8fd20179d2514@writtenlyhub.com/"
  target="_blank"
  rel="noopener noreferrer"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.6, delay: 0.2 }}
  viewport={{ once: true }}
  className="inline-block px-12 py-4 bg-orange-500 cursor-pointer hover:bg-white text-white text-md hover:text-orange-500 font-semibold rounded-full transition-colors duration-700"
>
  Join them
</motion.a>

      </div>
    </section>
  );
};

export default TestimonialSection;