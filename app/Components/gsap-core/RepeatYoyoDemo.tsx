// ----------------------------------------------
// 5) repeat / yoyo – looping back and forth
// ----------------------------------------------

"use client";
import React, { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsapClient";
import Section from "../common/Section";
import BoxStyle from "../common/Box";
import useReplay from "../common/useReplay";

export default function RepeatYoyoDemo() {
  const boxRef = useRef<HTMLDivElement>(null);

  const animate = () => {
    if (!boxRef.current) return;

    // Reset before replay
    gsap.set(boxRef.current, { x: 0 });

    // Animate with fromTo
    gsap.to(boxRef.current, {
      x: 200,
      repeat: 2,
      yoyo: true,
      duration: 1,
      ease: "power1.inOut",
    });
  };

  useGSAP(
    () => {
      animate();
    },
    { scope: boxRef }
  );

  useReplay("Repeat + Yoyo", animate);

  return (
    <Section
      title="Repeat + Yoyo"
      subtitle="Repeat the animation a set number of times, and reverse direction on every other iteration."
    >
      <div style={{ height: 120, position: "relative", overflow: "hidden" }}>
        <div ref={boxRef}>
          <BoxStyle color="red" label="YOYO" />
        </div>
      </div>
    </Section>
  );
}
