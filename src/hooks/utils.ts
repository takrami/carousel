import React, { useState, useEffect, useCallback } from "react";

function useWidth<T extends HTMLElement = HTMLDivElement>(
  elementRef: React.RefObject<T>
): number {
  const [width, setWidth] = useState<number>(0);

  // Prevent too many rendering using useCallback
  const updateWidth = useCallback(() => {
    const node = elementRef?.current;
    if (node) {
      setWidth(node.offsetWidth || 0);
    }
  }, [elementRef]);

  // Initial size on mount
  useEffect(() => {
    updateWidth();
  }, [updateWidth]);

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  });

  return width;
}

export { useWidth };
