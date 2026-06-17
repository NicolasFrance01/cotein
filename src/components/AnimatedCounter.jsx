"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";

export default function AnimatedCounter({ value, suffix = "", delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [started, setStarted] = useState(false);

  const spring = useSpring(0, {
    stiffness: 50,
    damping: 20,
    duration: 2000,
  });
  
  const displayValue = useTransform(spring, (current) => Math.floor(current));

  useEffect(() => {
    if (isInView && !started) {
      setTimeout(() => {
        spring.set(value);
        setStarted(true);
      }, delay * 1000);
    }
  }, [isInView, spring, value, delay, started]);

  return (
    <span ref={ref}>
      <motion.span>{displayValue}</motion.span>
      {suffix}
    </span>
  );
}
