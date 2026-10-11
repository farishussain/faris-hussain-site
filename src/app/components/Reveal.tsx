"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { domAnimation, LazyMotion, useAnimationControls, useInView, useMotionValue, useReducedMotion } from "motion/react";
import * as m from "motion/react-m";

// Adapted from Motion Primitives InView; see motion-primitives-LICENSE.txt.

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "h1" | "p";
};

export default function Reveal({ children, className = "", delay = 0, as = "div" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });
  const reducedMotion = useReducedMotion();
  const controls = useAnimationControls();
  const opacity = useMotionValue(1);
  const y = useMotionValue(0);
  const entered = useRef(false);
  const preparedOffscreen = useRef(false);
  const Element = m[as];

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (reducedMotion !== false) {
      controls.stop();
      controls.set({ opacity: 1, y: 0 });
      return;
    }
    if (entered.current) return;

    const bounds = node.getBoundingClientRect();
    const onScreen = bounds.top < window.innerHeight && bounds.bottom > 0;
    // Never hide content already painted in the viewport during hydration.
    if (!onScreen && !preparedOffscreen.current) {
      controls.set({ opacity: 0, y: 12 });
      preparedOffscreen.current = true;
    }
    if (!isInView && !onScreen) return;

    entered.current = true;
    void controls.start({
      opacity: preparedOffscreen.current ? [0, 1] : 1,
      y: preparedOffscreen.current ? [12, 0] : [6, 0],
      transition: {
        duration: 0.45,
        delay: Math.min(Math.max(delay, 0), 200) / 1000,
        ease: [0.22, 1, 0.36, 1],
      },
    });
  }, [controls, delay, isInView, reducedMotion]);

  return (
    <LazyMotion features={domAnimation} strict>
      <Element
        ref={ref}
        className={`reveal ${className}`}
        initial={false}
        style={{ opacity, y }}
        animate={controls}
      >
        {children}
      </Element>
    </LazyMotion>
  );
}
