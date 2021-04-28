import { useState, useEffect } from "react";

const useWidth = (containerRef: { current: any }): number => {
  const ref = containerRef?.current;
  let elementWidth: number;

  if (window.innerWidth > 900) {
    elementWidth = 900;
  } else {
    elementWidth = window.innerWidth;
  }
  const [width, setWidth] = useState(ref?.offsetWidth || elementWidth);

  useEffect(() => {
    const resize = () => setWidth(ref?.offsetWidth || elementWidth);
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  });
  return width;
};

export { useWidth };
