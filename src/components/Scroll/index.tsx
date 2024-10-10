"use client";
import { ReactLenis } from "@studio-freight/react-lenis";

function SmoothScrolling({ children }: {
  children: React.ReactNode
}) {
  return (
    <ReactLenis root options={{
      lerp: 0.07,
      duration: 1.2,
      smoothWheel: true,
      easing: (t: number) => 1 - Math.pow(1 - t, 4),
      syncTouch: true,
      syncTouchLerp: 0.07
    }}>
      {children}
    </ReactLenis>
  );
}

export default SmoothScrolling;
