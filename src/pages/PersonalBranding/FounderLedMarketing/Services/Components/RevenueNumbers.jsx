import TestimonialScroller from "./TestimonialScroller";

const RevenueNumbers = () => {
  return (
    <section className="bg-[#022150] py-24 px-4 font-montserrat">
      <div className="mx-auto">
        {/* Heading Section */}
        <div className="text-center mb-16">
          <span className="text-orange-500 font-medium text-md uppercase tracking-widest">
             Numbers you would only dream about
          </span>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight text-white mt-2 md:mt-3 mb-3 md:mb-4">
            The real returns  <span className="text-orange-500 ">on founder-led marketing</span>
          </h2>
        </div>

        {/* Add that TestimonialScroller here*/}
        <TestimonialScroller />



        {/* Footnote */}
        <div className="text-center text-white/70 mb-8 mt-10">
          <p>Calculated from typical SaaS and agency founder growth trajectories. </p>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button 
              onClick={() => window.open("https://calendly.com/asthaverma/build-your-personal-brand-with-me", "_blank")}
            draggable="false"
            onDragStart={(e) => e.preventDefault()}
            onContextMenu={(e) => e.preventDefault()}
className="inline-block px-12 py-4 bg-orange-500 cursor-pointer hover:bg-white text-white text-md  hover:text-orange-500 font-semibold rounded-full transition-colors duration-700">
            Get your leads
          </button>
        </div>
      </div>
    </section>
  );
};

export default RevenueNumbers;