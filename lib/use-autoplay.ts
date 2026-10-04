"use client";

import { useEffect, useRef, useState } from "react";

// Steps through `count` items every `ms`. Stops while the element is off screen, while a
// keyboard user is moving through it, when paused, and for people who prefer reduced
// motion. Hovering doesn't stop it: a resting mouse pointer would freeze it as soon as
// the visitor stops scrolling. Returns props to spread on the element it belongs to.
export function useAutoplay(count: number, ms: number) {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [reduced, setReduced] = useState(false);
  const [visible, setVisible] = useState(false);
  const [held, setHeld] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduced(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const running = playing && !reduced && visible && !held;

  useEffect(() => {
    if (!running) return;
    const t = setTimeout(() => setIndex((i) => (i + 1) % count), ms);
    return () => clearTimeout(t);
  }, [running, index, count, ms]);

  const hold = {
    ref,
    // Only keyboard focus holds it; clicking a step focuses it too, and should keep playing.
    onFocus: (e: React.FocusEvent<HTMLElement>) => setHeld(e.target.matches(":focus-visible")),
    onBlur: (e: React.FocusEvent<HTMLElement>) => {
      if (!e.currentTarget.contains(e.relatedTarget as Node)) setHeld(false);
    },
  };

  return { index, setIndex, playing, setPlaying, reduced, running, hold };
}
