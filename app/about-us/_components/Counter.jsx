"use client";
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const CounterData = [
  {
    count: 200,
    suffix: "+",
    title: "Tours and Activities",
  },
  {
    count: 50,
    suffix: "+",
    title: "Destinations",
  },
  {
    count: 95,
    suffix: "%",
    title: "Client Satisfaction",
  },
  {
    count: 24,
    suffix: "/7",
    title: "Customer Support",
  },
];

const easeOutExpo = (t) =>
  t === 1 ? 1 : 1 - Math.pow(2, -10 * t); // Exponential ease for smooth counting

const Counter = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [counts, setCounts] = useState(
    CounterData.map(() => 0) // Initial count set to 0 for all items
  );

  useEffect(() => {
    if (inView) {
      CounterData.forEach((item, index) => {
        const startTime = performance.now();
        const duration = 2000; // Longer duration for smoother counting (2s)

        const updateCount = (currentTime) => {
          const elapsedTime = currentTime - startTime;
          const progress = Math.min(elapsedTime / duration, 1); // Clamp progress between 0 and 1
          const easedProgress = easeOutExpo(progress);
          const currentCount = Math.floor(easedProgress * item.count);

          setCounts((prev) => {
            const updatedCounts = [...prev];
            updatedCounts[index] = currentCount;
            return updatedCounts;
          });

          if (progress < 1) {
            requestAnimationFrame(updateCount);
          }
        };

        requestAnimationFrame(updateCount);
      });
    }
  }, [inView]);

  return (
    <section
      ref={ref}
      className="padding-x mt-[15rem] sm:max-lg:mt-[5rem] max-sm:mt-[2rem] flex justify-center items-center"
    >
      <div className="grid w-full grid-cols-4 sm:max-lg:grid-cols-2 max-sm:grid-cols-2 max-sm:gap-4 gap-8">
        {CounterData?.map((item, index) => (
          <motion.div
            key={index}
            className="bg-[#EFF2F5] py-10 flex items-center justify-center flex-col rounded-lg shadow-md"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 20,
              duration: 0.6,
              delay: index * 0.2, // Slight delay between items for staggered effect
              ease: "easeInOut",
            }}
          >
            <p className="text-[#0E150EBF] text-[2.5rem] max-sm:text-3xl font-semibold">
              {counts[index]}
              {item.suffix}
            </p>
            <p className="text-[#0E150E]">{item?.title}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Counter;
