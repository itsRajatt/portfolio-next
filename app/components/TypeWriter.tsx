"use client";

import React, { useEffect, useRef, useState } from "react";

type Props = {
  text: string;
  speed?: number;
};

const TypeWriter: React.FC<Props> = ({ text, speed = 50 }) => {
  const [displayText, setDisplayText] = useState("");

  const indexRef = useRef(0);
  const lastTimeRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    setDisplayText("");
    indexRef.current = 0;
    lastTimeRef.current = performance.now();

    const animate = (time: number) => {
      if (time - lastTimeRef.current >= speed) {
        if (indexRef.current < text.length) {
          const char = text.charAt(indexRef.current);
          indexRef.current += 1;
          lastTimeRef.current = time;

          setDisplayText((prev) => prev + char);
        }
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [text, speed]);

  return (
    <span className="whitespace-pre">
      {displayText}
      {displayText.length < text.length && (
        <span className="animate-pulse">|</span>
      )}
    </span>
  );
};

export default TypeWriter;
