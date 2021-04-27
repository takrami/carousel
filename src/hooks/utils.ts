import { useState, useEffect } from "react";

const useWidth = (containerRef: { current: any }) => {
  const ref = containerRef?.current;
  const [width, setWidth] = useState(ref?.offsetWidth || window.innerWidth);

  useEffect(() => {
    const resize = () => setWidth(ref?.offsetWidth || window.innerWidth);
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  });
  return width;
};

export { useWidth };
