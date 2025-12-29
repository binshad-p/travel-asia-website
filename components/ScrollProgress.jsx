"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

const ScrollProgress = () => {
  const pathTrailRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

    // Get the path length
    const pathLength = pathTrailRef.current.getTotalLength();

    // Set initial state for path and circle
    gsap.set(pathTrailRef.current, {
      strokeDasharray: pathLength,
      strokeDashoffset: pathLength,
      strokeWidth: 30,
    });

    // Set initial position of the moving circle at the start of the path
    const startPoint = pathTrailRef.current.getPointAtLength(0);
    gsap.set(".moving-circle", {
      attr: { startPoint }, // Set to the starting coordinates of the path
    });

    // Create timeline for synchronized animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        end: "bottom center",
        scrub: 0.5,
        // pin: containerRef.current, // Uncomment if you want to pin the container
        // markers: true, // Uncomment for debugging scroll position
      },
    });

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "top bottom",
        scrub: true,
        // pin: containerRef.current, // Uncomment if you want to pin the container
        // markers: true, // Uncomment for debugging scroll position
      },
    });

    // Adding Motion path animations to timeline

    tl2.to(".moving-circle", {
      duration: 0.1,
      ease: "none",
      motionPath: {
        path: "#path",
        align: "#path",
        autoRotate: true,
        alignOrigin: [0.5, 0.5],
      },
    })
    // .to(
    //   pathTrailRef.current,
    //   {
    //     strokeDashoffset: 0,
    //   },
    //   0
    // );


    tl.to(".moving-circle", {
      motionPath: {
        path: "#path",
        align: "#path",
        autoRotate: true,
        alignOrigin: [0.5, 0.5],
      },
    })
    .to(
      pathTrailRef.current,
      {
        strokeDashoffset: 0,
      },
      0
    );

    // Cleanup
    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="relative py-28 flex justify-center items-center max-md:hidden max-2xl:py-5">
      <svg
        width="100%"
        height="100%"
        viewBox="-20 0 542 2000"
        className="overflow-visible"
        ref={containerRef}
      >
        {/* Base path */}
        <path
          id="path"
          d="M293.695 13.8584C293.695 207.528 245.695 207.528 245.695 401.198C245.695 594.868 293.695 594.858 293.695 788.528C293.695 982.198 245.695 982.198 245.695 1175.87C245.695 1369.54 293.695 1369.54 293.695 1563.21C293.695 1756.88 245.695 1756.88 245.695 1950.55"
          className="fill-none stroke-gray-300 !stroke-[2]"
        />

        {/* Trail path */}
        <path
          ref={pathTrailRef}
          d="M293.695 13.8584C293.695 207.528 245.695 207.528 245.695 401.198C245.695 594.868 293.695 594.858 293.695 788.528C293.695 982.198 245.695 982.198 245.695 1175.87C245.695 1369.54 293.695 1369.54 293.695 1563.21C293.695 1756.88 245.695 1756.88 245.695 1950.55"
          className="fill-none stroke-[#EB1D22] !stroke-[2] rounded-full"
          strokeLinecap="round"
        />

        {/* Moving circle */}
        <g className="moving-circle" transform="scale(3)" >
        <path fill="currentColor" d="m21.061 11.077l-17.32-6.92a.994.994 0 0 0-1.17.32a1 1 0 0 0-.01 1.22l4.49 6a.525.525 0 0 1-.01.62L2.511 18.3a1.02 1.02 0 0 0 0 1.22a1 1 0 0 0 .8.4a1 1 0 0 0 .38-.07l17.36-6.9a1.006 1.006 0 0 0 .01-1.87Zm-17.69-5.99l16.06 6.42H8.061a1.3 1.3 0 0 0-.21-.41Zm-.06 13.82l4.53-5.98a1.2 1.2 0 0 0 .22-.42h11.38Z" strokeWidth="0.5" stroke="currentColor"/>
          {/* <path
            fill="currentColor"
            fillRule="evenodd"
            d="M12 2a1 1 0 0 1 .932.638l7 18a1 1 0 0 1-1.326 1.281L13 19.517V13a1 1 0 1 0-2 0v6.517l-5.606 2.402a1 1 0 0 1-1.326-1.281l7-18A1 1 0 0 1 12 2"
            clipRule="evenodd"
            strokeWidth="0.5"
            stroke="currentColor"
          /> */}
        </g>
        {/* <g className="moving-circle" transform="scale(2.5)">
  <path
    fill="currentColor"
    d="M2.01 21.9L23 12 2.01 2.1v7.9l15 2-15 2v7.9z"
  />
</g> */}
      </svg>
    </div>
  );
};

export default ScrollProgress;
