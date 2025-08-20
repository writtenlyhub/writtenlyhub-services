import { motion } from "framer-motion";

const TestimonialSlider = () => {
  const testimonials = [
    {
      quote: "It's hard to find a team that gets medical content right, but WrittenlyHub really delivered. Their work on our lab test and category pages was accurate, easy to read, and thoughtfully written. You could tell they paid close attention to the details, and it made a real difference in the way our content connects with users.",
      name: "Apollo 24/7",
      role: "",
      logo: "https://images.apollo247.in/images/icons/apollo247.svg"
    },
    {
      quote: "For nearly two years, WrittenlyHub has supported us with well-written study abroad content and student essays. Their strategic support, consistent quality, and deep understanding of academic tone helped us scale high-conversion pages and improve student outcomes across regions.",
      name: "Upgrad Abroad",
      role: "",
      logo: "https://ik.imagekit.io/upgrad1/abroad-images/logo/upGrad_logo_web.svg?tr=w-118,q-70"
    },
    {
      quote: "We sought WrittenlyHub for our content writing requirements. Their team worked with patience and care, clearly understanding our Giver-seeker programming and thoughtfully capturing the essence of our work through well-crafted content. We value them as important partners in our growth journey.",
      name: "Look Forward Foundation",
      role: "",
      logo: "https://www.basofa.com/wp-content/uploads/2024/01/BSF-Logo-Dimensions-Fit-1.png"
    }
  ];

  // Duplicate testimonials for infinite scroll effect
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="font-montserrat relative w-full bg-[#022150] py-12 md:py-20 overflow-hidden">
      {/* Header */}
      <div className="w-[90%] max-w-6xl mx-auto mb-12 md:mb-16 relative z-30 text-center px-4">
        <span className="text-orange-500 font-medium text-sm md:text-base uppercase tracking-widest">
          Client Testimonials
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-4">
          Leaders <span className="text-orange-500">who scaled through our content</span>
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
                    {testimonial.role && (
                      <p className="text-white/80 text-sm">{testimonial.role}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* CTA Button */}
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
          The proof is in the results
        </motion.a>
      </div>
    </section>
  );
};

export default TestimonialSlider;