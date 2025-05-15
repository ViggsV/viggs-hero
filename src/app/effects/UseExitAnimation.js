// hooks/useExitAnimation.js
import { useState, useEffect } from 'react';

/**
 * Toggles visibility on after `delayMs`, then off after `delayMs + durationMs`
 */
export function UseExitAnimation(delayMs = 0, durationMs = 2000) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const show = setTimeout(() => setIsVisible(true), delayMs);
    const hide = setTimeout(() => setIsVisible(false), delayMs + durationMs);

    return () => {
      clearTimeout(show);
      clearTimeout(hide);
    };
  }, [delayMs, durationMs]);

  return isVisible;
}
