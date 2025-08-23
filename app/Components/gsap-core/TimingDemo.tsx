// -------------------------------------------------
// 4) Timing: duration, delay, easing (bounce demo)
// -------------------------------------------------

"use client";
import React, { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsapClient";
import Section from "../common/Section";
import BoxStyle from "../common/Box";
import useReplay from "../common/useReplay";

export default function TimingDemo() {
  const boxRef = useRef<HTMLDivElement>(null);

  const animate = () => {
    gsap.set(boxRef.current, { x: 0 });
    gsap.to(boxRef.current, {
      x: 200,
      duration: 2,
      delay: 0.5,
      ease: "bounce.out",
    });
  };
  useGSAP(
    () => {
      animate();
    },
    { scope: boxRef }
  );

  useReplay("Timing (duration, delay, ease)", animate);
  return (
    <Section
      title="Timing (duration, delay, ease)"
      subtitle="duration: 2s, delay: 0.4s, ease: 'bounce'"
    >
      <div style={{ height: 120, position: "relative", overflow: "hidden" }}>
        <div ref={boxRef}>
          <BoxStyle color="blue" label="TIME" />
        </div>
      </div>
    </Section>
  );
}
