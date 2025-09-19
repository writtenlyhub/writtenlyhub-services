import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react"; // Import the Check icon from Lucide

const altCards = [
  {
    title: "Content Agencies",
    points: [
      "Extra cost for legal review",
      "Generic writers",
      "Limited by project scope",
      "$8K-15K per project",
      "1-2 weeks typical",
      "Generic medical voice",
      "Extra charges apply",
      "Multiple account managers",
    ],
  },
  {
    title: "Freelancers",
    points: [
      "Hit or miss knowledge",
      "Varies by freelancer",
      "Pay per piece/project",
      "$200-1K per piece",
      "Depends on freelancer",
      "Changes with each writer",
      "Separate negotiations",
      "You manage everything",
    ],
  },
  {
    title: "AI Content Tools",
    points: [
      "Zero compliance awareness",
      "Dangerous medical errors",
      "Token/credit limits",
      "$1,500 subscription minimum + Overhead",
      "Instant (but incorrect)",
      "No voice consistency",
      "Do it all over again",
      "Self-serve nightmare",
    ],
  },
  {
    title: "In-House Medical Writers",
    points: [
      "Requires training/oversight",
      "Depends on the hiring quality",
      "Limited by staff bandwidth",
      "$150K+ annually",
      "Competing with patient care",
      "Depends on their skills",
      "Included but time-consuming",
      "Full-time supervision",
    ],
  },
];

const writtenlyCard = {
  title: "WH’s Healthcare Content Engine",
  points: [
    { text: "Built-in compliance checks", highlight: true },
    { text: "Healthcare industry writers" },
    { text: "Unlimited blogs, social, emails" },
    { text: "$3K-5K monthly costs + unlimited requests" },
    { text: "2-3 days guaranteed" },
    { text: "Adapted to the practice style" },
    { text: "Unlimited until perfect" },
    { text: "One point of contact" },
  ],
};

const cardRotations = [-3, 2, -2, 3]; // For stacked cards

const OldNewWay = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const stickyRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !stickyRef.current) return;

      const container = containerRef.current;
      const sticky = stickyRef.current;
      const containerRect = container.getBoundingClientRect();
      const scrollProgress = Math.max(
        0,
        Math.min(
          1,
          -containerRect.top / (containerRect.height - window.innerHeight)
        )
      );

      // Pin/unpin logic
      if (
        containerRect.top <= 0 &&
        containerRect.bottom >= window.innerHeight
      ) {
        sticky.style.position = "fixed";
        sticky.style.top = "0";
        sticky.style.left = "0";
        sticky.style.right = "0";
      } else if (containerRect.top > 0) {
        sticky.style.position = "absolute";
        sticky.style.top = "0";
        sticky.style.left = "0";
        sticky.style.right = "0";
      } else {
        sticky.style.position = "absolute";
        sticky.style.top = "auto";
        sticky.style.bottom = "160px"; // Space for CTA
        sticky.style.left = "0";
        sticky.style.right = "0";
      }

      // Get the left card (WH card)
      const leftCard = document.querySelector(".left-card");

      // Animate cards
      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        const cardProgress = Math.max(
          0,
          Math.min(1, scrollProgress * altCards.length - index)
        );
        const isActive = cardProgress > 0;

        if (isActive) {
          const scale = 0.95 + cardProgress * 0.05;
          const opacity = Math.min(1, cardProgress * 2);
          const yOffset = (1 - cardProgress) * 60;
          const rotation = cardRotations[index % cardRotations.length];

          card.style.transform = `translateY(${yOffset}px) scale(${scale}) rotate(${rotation}deg)`;
          card.style.opacity = opacity;
          card.style.zIndex = 100 + index;

          // Animate left card simultaneously with first right card
          if (index === 0 && leftCard) {
            leftCard.style.opacity = opacity;
            leftCard.style.transform = `translateY(${yOffset}px) scale(${scale})`;
          }

          // Stack previous cards
          for (let i = 0; i < index; i++) {
            const prevCard = cardsRef.current[i];
            if (prevCard) {
              const stackOffset = (index - i) * 12;
              const stackRotation = cardRotations[i % cardRotations.length];
              prevCard.style.transform = `translateY(${-stackOffset}px) scale(0.92) rotate(${stackRotation}deg)`;
              prevCard.style.opacity = Math.max(0.4, 1 - (index - i) * 0.2);
              prevCard.style.zIndex = 100 - (index - i);
            }
          }
        } else {
          const rotation = cardRotations[index % cardRotations.length];
          card.style.transform = `translateY(100px) scale(0.9) rotate(${rotation}deg)`;
          card.style.opacity = "0";
          card.style.zIndex = 100 - index;

          // Hide left card when no right cards are active
          if (index === 0 && leftCard) {
            leftCard.style.opacity = "0";
            leftCard.style.transform = "translateY(100px) scale(0.9)";
          }
        }
      });
    };

    // Initial setup
    cardsRef.current.forEach((card, index) => {
      if (card) {
        const rotation = cardRotations[index % cardRotations.length];
        card.style.transform = `translateY(100px) scale(0.9) rotate(${rotation}deg)`;
        card.style.opacity = "0";
        card.style.transition = "all 0.3s cubic-bezier(.4,1,.4,1)";
        card.style.zIndex = 100 - index;
      }
    });

    // Initialize left card
    const leftCard = document.querySelector(".left-card");
    if (leftCard) {
      leftCard.style.opacity = "0";
      leftCard.style.transform = "translateY(100px) scale(0.9)";
      leftCard.style.transition = "all 0.3s cubic-bezier(.4,1,.4,1)";
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const addToRefs = el => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#022150] py-12 sm:py-20"
      style={{ height: `${window.innerHeight * (altCards.length + 1.5)}px` }}
    >
      {/* Header - Fixed at top */}
      <div className="w-[90%] sm:w-[80%] mx-auto mb-24 sm:mb-32 text-center relative z-50">
        <span className="text-orange-500 font-medium text-sm sm:text-md uppercase tracking-widest">
          Service comparison
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mt-3 mb-4 leading-tight">
          The healthcare content diagnosis:{" "}
          <span className="text-orange-500 block">We're the treatment</span>
        </h2>
        <p className="text-gray-300 max-w-3xl mx-auto text-lg sm:text-xl">
          Feature-by-feature comparison so you can pick the winner.
        </p>
      </div>

      {/* Cards container - not absolutely positioned */}
      <div
        ref={stickyRef}
        className="flex items-start justify-center z-50 mt-12 sm:mt-34"
      >
        <div className="w-[90%] sm:w-[80%] mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16 items-start justify-center">
          {/* WH Healthcare Card (left) */}
          <div
            className="left-card bg-orange-500 p-6 sm:p-7 rounded-2xl shadow-2xl border-4 border-orange-500 w-full sm:min-w-[320px] sm:max-w-xs flex-shrink-0 lg:ml-8"
            style={{
              opacity: 0,
              transform: "translateY(100px) scale(0.9)",
              transition: "all 0.3s cubic-bezier(.4,1,.4,1)",
            }}
          >
            <h4 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-5">
              {writtenlyCard.title}
            </h4>
            <div className="flex flex-col gap-3">
              {writtenlyCard.points.map((point, idx) => (
                <div
                  key={idx}
                  className={`text-sm sm:text-base rounded-md px-3 py-2 ${
                    point.highlight
                      ? "bg-white text-orange-500 font-bold"
                      : "bg-white/10 text-white"
                  } flex items-start gap-2`}
                >
                  <Check className="w-4 h-4 mt-1 flex-shrink-0" />
                  <span>{point.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Alternatives (right, stacked scroll animation) */}
          <div className="relative flex-1 w-full sm:max-w-lg lg:max-w-xl min-h-[450px] sm:min-h-[580px]">
            {altCards.map((card, i) => (
              <div
                key={card.title}
                ref={addToRefs}
                className="absolute inset-0 w-full p-6 sm:p-7 rounded-xl border border-[#1a3f77] shadow-2xl bg-[#022150] flex flex-col justify-between min-h-[380px] sm:min-h-[420px] will-change-transform"
                style={{
                  transformOrigin: "center center",
                }}
              >
                <div>
                  <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-orange-500 mb-4 sm:mb-5">
                    {card.title}
                  </h4>
                  <div className="flex flex-col gap-2 sm:gap-3 flex-1">
                    {card.points.map((point, idx) => (
                      <div
                        key={idx}
                        className="text-sm sm:text-base rounded-md px-3 sm:px-4 py-2 sm:py-3 bg-[#173a6d] text-white"
                      >
                        {point}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA - Fixed at bottom */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-center z-50">
        <motion.a
          href="https://calendly.com/asthaverma/build-your-personal-brand-with-me"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-16 py-4 bg-orange-500 cursor-pointer hover:bg-white text-white text-lg hover:text-orange-500 font-semibold rounded-full transition-colors duration-700"
        >
          Pick the winner
        </motion.a>
      </div>
    </section>
  );
};

export default OldNewWay;
