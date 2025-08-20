import { useRef, useState, useEffect } from "react";

const transformationSteps = [
  {
    month: "Month 1:",
    desc: "LinkedIn audit + strategy overhaul",
  },
  {
    month: "Month 2:",
    desc: "Content system launched, first inquiries",
  },
  {
    month: "Month 3:",
    desc: "12 qualified leads, $17K in new contracts",
  },
  {
    month: "Month 6:",
    desc: "18+ monthly leads, doubled her agency rates",
  },
];

const WinsLookLike = () => {
  return (
    <section className="bg-[#022150] py-24 font-sans overflow-hidden relative">
      <div className="w-[80%] mx-auto max-w-6xl">
        {/* Heading Section */}
        <div className="text-center mb-16">
          <span className="text-orange-500 font-medium text-md uppercase tracking-widest">
            How the wins look like
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight text-white mt-2 md:mt-3 mb-3 md:mb-4">
            How Megha went from 0 leads to{" "}
            <span className="text-orange-500 block">
              18 qualified calls monthly
            </span>
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-12 text-white mb-12 items-start">
          {/* Left: Transformation + Results */}
          <div
            className="flex-1 flex flex-col justify-between"
            id="transformation-content"
          >
            {/* Transformation */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <svg
                  width="40"
                  className="flex-shrink-0"
                  viewBox="0 0 103 114"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M68.3001 114L59.6 105.6C57.7 107 55.4001 106.7 53.9001 105.9C54.8001 105.7 55.8001 104.4 55.9001 104.4C53.5001 106 49.6 105.7 49.6 105.7C53.1 104.8 54.8001 103.4 54.9001 103.3L50 104.9L53.4001 102.7C49.6001 104.5 45.1001 103.8 43.7001 101.7C46.9001 102.9 49.2001 100.8 49.2001 100.8C43.8001 102.6 42.4 97.3 38.3 98C40.3 96.1 42.9001 96.7 42.9001 96.7C41.8001 95.4 40.4 93.5 39.1 91.1C38.2 88.5 38.3 83.9 40.1 79.6C43.8 73.5 53.0001 71 58.4001 71C56.0001 72.4 52.8 75.1 52.1 77.2C54 74.6 58.9001 72.3 58.9001 72.3C58.9001 72.3 59.6001 76.1 60.8001 78.6C62.4001 81.8 62.7001 83.5 61.4001 85.1C60.2001 86.7 58.3 88.5 57.1 92.4C58.8 88.4 62.2 86 64.6 85.7C61.8 87.6 59.3 91.7 59.1 92.1C61.5 88.9 64.9001 88.2 64.9001 88.2C61.4001 90.7 59.1 96 59 96.2C61.4 91.7 65.4001 90.7 65.4001 90.7C63.9001 91.6 62.4 93.9 61.7 96.9C62.4 94.8 65.3001 94.2 65.3001 94.2C62.7001 97.1 66 101 62.5 103.3C60.3 101.9 51.2 90.6 46.1 84.7C50.9 92.6 68.1001 113.7 68.3001 114Z"
                    fill="url(#paint0_linear_15_41)"
                  />
                  <path
                    d="M66.3 38.1C74.6 32.2 85.4 31.7 85.4 31.7C79.5 42.3 70.7999 49.5 61.5999 52.5C69.0999 52.3 76.4 46.3 76.4 46.3C73.8 56.9 63.6999 61 55.0999 62.5C62.8999 63.4 68.0999 60.9 68.0999 60.9C66.1999 64.9 60.9999 67.8 56.2999 69.1C51.5999 70.5 43.3 72.1 40.2 79.5C38.3 83.8 38.3 88.4 39.2 91C37 87 35.3 81.7 36.2 75.6C37.9 65 46.3999 51.8 53.2999 44.6C41.9999 52.6 35.2 67.8 35.2 67.8C37.8 52.2 44.8 31.1 60.5 23.2C76.2 15.3 90.8999 19.9 102.1 11.4C97.8999 28.5 75.5 28.6 66.3 38.1Z"
                    fill="url(#paint1_linear_15_41)"
                  />
                  <path
                    d="M33.2001 67.9C33.1001 52.7 41.4001 38.8 41.4001 38.8C41.4001 38.8 31.4 34.3 23.5 34.4C27.5 32.2 28.4 29.1 28.3 26.9C26.8 29.7 22.4 31 14.6 31.4C10.2 31.6 7.40005 34.7 7.90005 37.7C7.90005 37.7 3.30005 38.9 0.800049 45.1C7.20005 42.3 14.5 43.7 22.9 53.9C22.9 53.9 19.9 47.2 16.1 45C23.8 48.6 30.4001 56.6 33.2001 67.9Z"
                    fill="url(#paint2_linear_15_41)"
                  />
                  <path
                    d="M44.1001 34.5C50.7001 24.4 59.6001 19.9 70.1001 16.3C80.6001 12.7 80.2001 3.5 77.1001 0C75.4001 13.2 47.1001 15.8 44.1001 34.5Z"
                    fill="url(#paint3_linear_15_41)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_15_41"
                      x1="64.3292"
                      y1="122.668"
                      x2="46.3689"
                      y2="79.6915"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#F45400" />
                      <stop offset="1" stopColor="#E27921" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_15_41"
                      x1="91.3185"
                      y1="65.6111"
                      x2="42.7528"
                      y2="31.7489"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#E77C23" />
                      <stop offset="0.5653" stopColor="#F87C09" />
                      <stop offset="1" stopColor="#F75700" />
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear_15_41"
                      x1="8.45595"
                      y1="32.8872"
                      x2="41.8297"
                      y2="54.6125"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#F45400" />
                      <stop offset="1" stopColor="#E27921" />
                    </linearGradient>
                    <linearGradient
                      id="paint3_linear_15_41"
                      x1="37.0418"
                      y1="38.9915"
                      x2="91.3072"
                      y2="-5.7293"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#F45400" />
                      <stop offset="1" stopColor="#E27921" />
                    </linearGradient>
                  </defs>
                </svg>
                <h4 className="text-orange-500 font-semibold text-2xl">
                  The transformation
                </h4>
              </div>
              <div className="space-y-4">
                {transformationSteps.map((step, idx) => (
                  <div className="flex items-start gap-3" key={idx}>
                    <div className="w-8 h-8 rounded-full bg-orange-500/10 border border-orange-500/30 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-4 h-4 text-orange-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div>
                      <span className="text-orange-500 font-bold">
                        {step.month}
                      </span>
                      <p className="text-gray-300">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Results Note */}
            <div className="mt-6">
              <h4 className="text-orange-500 font-semibold text-xl mb-1">
                Results like this require our full attention
              </h4>
              <p className="text-white text-lg m-0">
                That's why we only take{" "}
                <span className="text-orange-500 font-bold">
                  8 clients quarterly
                </span>
              </p>
            </div>
          </div>

          {/* Right: Single Static Image */}
          <div className="flex-1 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-md">
              <img
                src="https://i.ibb.co/zhPMG2cW/linkedin-data-1.png"
                alt="LinkedIn data visualization"
                className="w-full rounded-xl shadow-xl border border-orange-500"
                style={{
                  aspectRatio: "3/4",
                  maxHeight: "400px",
                  }}
              />
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="flex justify-center mt-10">
          <button 
                     onClick={() => {
              const element = document.getElementById("WhyItWorks");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            draggable="false"
            onDragStart={(e) => e.preventDefault()}
            onContextMenu={(e) => e.preventDefault()}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}

          className="inline-block px-12 py-4 bg-orange-500 cursor-pointer hover:bg-white text-white text-md  hover:text-orange-500 font-semibold rounded-full transition-colors duration-700">
            Get your transformation
          </button>
        </div>
      </div>
    </section>
  );
};

export default WinsLookLike;