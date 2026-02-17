"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type Props = { children: React.ReactNode; offset?: number };

const ParallaxSection: React.FC<Props> = ({ children, offset = 50 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);

  return (
    <motion.div ref={ref} style={{ y }}>
      {children}
    </motion.div>
  );
};

export default ParallaxSection;
