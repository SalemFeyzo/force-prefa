"use client";

import { useEffect, useState } from "react";

export const Typewriter = ({
  text,
  delay,
  loop,
  dir,
}: {
  text: string;
  delay: number;
  loop: boolean;
  dir: "rtl" | "ltr";
}) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (currentIndex <= text.length - 1) {
      timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);
    } else if (loop) {
      // ADD THIS CHECK
      setCurrentIndex(0);
      setCurrentText("");
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, delay, loop, text]);

  return <span dir={dir}>{currentText}</span>;
};

export default Typewriter;
