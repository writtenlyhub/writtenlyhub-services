import { Search, LayoutTemplate, PenTool, RefreshCw, Share2 } from "lucide-react";

const steps = [
  {
    id: 1,
    name: "Discovery",
    description: "We analyze your business needs and content goals",
    icon: Search,
    color: "text-blue-400",
    bgColor: "bg-blue-400/20"
  },
  {
    id: 2,
    name: "Strategy",
    description: "Custom content plan tailored to your audience",
    icon: LayoutTemplate,
    color: "text-purple-400",
    bgColor: "bg-purple-400/20"
  },
  {
    id: 3,
    name: "Creation",
    description: "Our experts craft high-quality, engaging content",
    icon: PenTool,
    color: "text-orange-400",
    bgColor: "bg-orange-400/20"
  },
  {
    id: 4,
    name: "Refinement",
    description: "Collaborative review and revision process",
    icon: RefreshCw,
    color: "text-green-400",
    bgColor: "bg-green-400/20"
  },
  {
    id: 5,
    name: "Distribution",
    description: "Strategic publishing and promotion",
    icon: Share2,
    color: "text-pink-400",
    bgColor: "bg-pink-400/20"
  }
];

const OurProcess = () => {
  return (
    <div className="bg-[#022150] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-left md:text-center mb-16">
  <span className="inline-block bg-orange-500/20 border border-orange-500 text-white rounded-full px-4 py-1.5 text-xs md:text-sm font-medium tracking-wider mb-4">
    OUR PROCESS
  </span>
  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
    How We <span className="text-orange-400">Create Impact</span>
  </h2>
  <p className="mt-4 text-lg text-white/70 max-w-2xl md:mx-auto">
    A transparent, collaborative approach to content excellence
  </p>
</div>


        <div className="relative">
          {/* Horizontal line for desktop */}
          <div className="hidden lg:block absolute left-16 right-16 top-1/2 h-0.5 bg-white/20 -translate-y-1/2"></div>
          
          {/* Vertical line for mobile */}
          <div className="lg:hidden absolute left-1/2 top-8 bottom-8 w-0.5 bg-white/20 -translate-x-1/2"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4">
            {steps.map((step) => {
              const Icon = step.icon;
              
              return (
                <div key={step.id} className="relative">
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 group h-full">
                    <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                      <div className={`p-3 rounded-lg ${step.bgColor} ${step.color} group-hover:bg-white/10 transition-colors mb-4`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="flex flex-col lg:flex-row lg:items-center gap-2">
                          <span className="text-sm font-medium text-white/50">0{step.id}</span>
                          <h3 className="text-xl font-semibold text-white">{step.name}</h3>
                        </div>
                        <p className="mt-2 text-white/70">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProcess;
