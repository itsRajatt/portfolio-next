"use client";

import React from "react";
import { motion } from "framer-motion";

type Props = { scaleX: number | any };

const ProgressBar: React.FC<Props> = ({ scaleX }) => {
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 origin-left z-50"
      style={{ scaleX }}
    />
  );
};

export default ProgressBar;
