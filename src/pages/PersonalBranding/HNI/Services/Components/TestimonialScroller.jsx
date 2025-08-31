"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import Lenis from "@studio-freight/lenis"

const TestimonialScroller = () => {
  const containerRef = useRef(null)
  const scroller1Ref = useRef(null)
  const scroller2Ref = useRef(null)
  const scroller3Ref = useRef(null)
  const lenisRef = useRef(null)

  // Debounce helper function
  const debounce = (func, delay) => {
    let timeout
    return () => {
      clearTimeout(timeout)
      timeout = setTimeout(func, delay)
    }
  }

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
      syncTouch: true,
      touchMultiplier: 1.5,
    })

    lenisRef.current = lenis

    // GSAP ticker integration
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    return () => {
      gsap.ticker.remove(lenis.raf)
      lenis.destroy()
    }
  }, [])

  // Sample data for each scroller
  const scroller1Items = [
    { type: "text", content: "2x more", subtext: "inbound demos", description: "$25K+ additional MRR" },
    {
      type: "text",
      content: "30% higher",
      subtext: "conversion rates",
      description: "Stronger content strategy for warm leads",
    },
    { type: "image", content: "https://i.ibb.co/yByVX299/1.png", alt: "Corporate handshake" },
    { type: "image", content: "https://i.ibb.co/zVFxSjHM/4.png", alt: "Team collaboration" },
  ]

  const scroller2Items = [
    { type: "text", content: "12+", subtext: "qualified calls monthly", description: "$100K+ pipeline consistently" },
    {
      type: "text",
      content: "40% better",
      subtext: "engagement",
      description: "Authority positioning that reduces price objections",
    },
    { type: "image", content: "https://i.ibb.co/jt0CCgb/8.png", alt: "Content creator" },
    { type: "image", content: "https://i.ibb.co/fVTVSL7L/9.png", alt: "Remote meeting" },
    { type: "text", content: "12+", subtext: "qualified calls monthly", description: "$100K+ pipeline consistently" },
    {
      type: "text",
      content: "40% better",
      subtext: "engagement",
      description: "Authority positioning that reduces price objections",
    },
    { type: "image", content: "https://i.ibb.co/jt0CCgb/8.png", alt: "Content creator workflow" },
    { type: "image", content: "https://i.ibb.co/fVTVSL7L/9.png", alt: "Virtual collaboration" },
    { type: "text", content: "12+", subtext: "qualified calls monthly", description: "$100K+ pipeline consistently" },
    {
      type: "text",
      content: "40% better",
      subtext: "engagement",
      description: "Authority positioning that reduces price objections",
    },
    { type: "image", content: "https://i.ibb.co/jt0CCgb/8.png", alt: "Digital content creation" },
    { type: "image", content: "https://i.ibb.co/fVTVSL7L/9.png", alt: "Team video call" },
  ]

  const scroller3Items = [
    { type: "image", content: "https://i.ibb.co/q32fqvFf/2.png", alt: "Business option" },
    { type: "image", content: "https://i.ibb.co/mdjFvfb/3.png", alt: "Office team" },
    { type: "image", content: "https://i.ibb.co/bgW0X4B5/10.png", alt: "Happy employees" },
    { type: "text", content: "2x more", subtext: "inbound demos", description: "$25K+ additional MRR" },
  ]

  // Duplicate items for seamless loop
  // Duplicate items with unique IDs so React + GSAP treat them as unique
  const duplicateItems = (items, times = 3) => {
    let cloned = []
    for (let i = 0; i < times; i++) {
      cloned = [
        ...cloned,
        ...items.map((item, idx) => ({
          ...item,
          uid: `${item.type}-${idx}-clone${i}`, // unique identifier
        })),
      ]
    }
    return cloned
  }


  // Responsive GSAP animations (only continuous movement)
  useEffect(() => {
    const setupAnimations = () => {
      // Skip if prefers reduced motion
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

      const isMobile = window.innerWidth < 768

      const scrollers = [
        { ref: scroller1Ref, direction: -1, items: scroller1Items },
        { ref: scroller2Ref, direction: -1, items: scroller2Items },
        { ref: scroller3Ref, direction: -1, items: scroller3Items },
      ]

      scrollers.forEach((scroller, index) => {
        const element = scroller.ref.current
        if (!element) return

        // Kill any existing animations on this element
        gsap.killTweensOf(element)

        // Get the width of one complete set (original items, not duplicated)
        const itemCount = scroller.items.length
        const totalChildren = element.children.length
        const oneSetWidth = (element.scrollWidth / totalChildren) * itemCount

        const continuousDirection = scroller.direction
        const autoScrollDuration = isMobile ? 40 : 60 // Slower, smoother movement

        // Set initial position to 0
        gsap.set(element, { x: 0 })

        // Create the seamless loop
        gsap.to(element, {
          x: `${continuousDirection * oneSetWidth}px`,
          duration: autoScrollDuration,
          ease: "none",
          repeat: -1,
          modifiers: {
            x: gsap.utils.unitize((x) => {
              const value = Number.parseFloat(x)
              return value % oneSetWidth
            }),
          },
        })
      })
    }

    // Initial setup
    setupAnimations()

    // Debounced resize handler
    const debouncedSetup = debounce(setupAnimations, 200)
    window.addEventListener("resize", debouncedSetup)

    return () => {
      // Clean up any GSAP animations on unmount
      gsap.killTweensOf([scroller1Ref.current, scroller2Ref.current, scroller3Ref.current])
      window.removeEventListener("resize", debouncedSetup)
    }
  }, [])

  return (
    <div ref={containerRef} className="w-full overflow-hidden bg-[#022150] pb-4 relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-1/4 -left-20 w-64 h-64 rounded-full bg-orange-400/10 blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-20 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl"></div>
      </div>

      <div className="relative z-10 h-full flex flex-col justify-center space-y-4 md:space-y-6 w-full px-0">
        {/* Scroller 1 */}
        <div className="overflow-hidden">
          <div ref={scroller1Ref} className="flex w-max mx-auto transform-gpu will-change-transform">
            {duplicateItems(scroller1Items).map((item, index) => (
              <ScrollerItem key={item.uid} item={item} index={index} />
            ))}
          </div>
        </div>

        {/* Scroller 2 */}
        <div className="overflow-hidden -ml-[20%]">
          <div ref={scroller2Ref} className="flex w-max mx-auto transform-gpu will-change-transform">
            {duplicateItems(scroller2Items).map((item, index) => (
              <ScrollerItem key={item.uid} item={item} index={index} />
            ))}
          </div>
        </div>

        {/* Scroller 3 */}
        <div className="overflow-hidden">
          <div ref={scroller3Ref} className="flex w-max mx-auto transform-gpu will-change-transform">
            {duplicateItems(scroller3Items).map((item, index) => (
              <ScrollerItem key={item.uid} item={item} index={index} />
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

const ScrollerItem = ({ item, index }) => {
  return (
    <div
      className={`flex-shrink-0 px-1 sm:px-2 md:px-3 lg:px-4 ${
        item.type === "image"
          ? "w-[120px] h-[48px] sm:w-[150px] sm:h-[60px] md:w-[250px] md:h-[100px] lg:w-[350px] lg:h-[140px] xl:w-[400px] xl:h-[160px]"
          : "w-[100px] h-[48px] sm:w-[120px] sm:h-[60px] md:w-[200px] md:h-[100px] lg:w-[250px] lg:h-[120px] xl:w-[300px] xl:h-[160px]"
      }`}
    >
      {item.type === "image" ? (
        <div className="relative w-full h-full rounded-lg overflow-hidden border border-white/10 hover:border-orange-500 transition-all duration-300">
          <img
            src={item.content || "/placeholder.svg"}
            alt={item.alt}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        </div>
      ) : (
        <div className="h-full flex flex-col items-center justify-center bg-white/5 rounded-lg p-1 sm:p-2 md:p-3 lg:p-4 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
          <span className="text-base sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl font-bold text-orange-500 text-center">
            {item.content}
          </span>
          {item.subtext && (
            <span className="text-[7px] sm:text-[9px] md:text-xs lg:text-sm xl:text-base text-white mt-0.5 sm:mt-1 md:mt-2 text-center">
              {item.subtext}
            </span>
          )}
          {item.description && (
            <span className="text-[6px] sm:text-[7px] md:text-[10px] lg:text-xs xl:text-sm text-white/80 mt-1 sm:mt-1.5 md:mt-2 text-center">
              {item.description}
            </span>
          )}
        </div>
      )}
    </div>
  )
}

export default TestimonialScroller