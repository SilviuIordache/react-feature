import { useState, useEffect, useRef } from 'react';

export default function useRenderIndicator(delay = 1000) {
  const [visible, setVisible] = useState(false);
  const firstRender = useRef(true);
  const renderCount = useRef(0);

  // 1) Track *every* render count
  useEffect(() => {
    // Skip the very first render
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    // Increment a counter instead of setting the visible state directly
    renderCount.current += 1;
  });

  // 2) Whenever renderCount changes, show the indicator briefly
  useEffect(() => {
    if (renderCount.current === 0) return;

    // Only set visible if it's currently not visible
    // to prevent re-triggering on our own state changes
    setVisible((prev) => {
      if (!prev) {
        const timer = setTimeout(() => setVisible(false), delay);
        return true;
      }
      return prev;
    });
  }, [delay, renderCount.current]); // watch the renderCount itself

  return visible;
}
