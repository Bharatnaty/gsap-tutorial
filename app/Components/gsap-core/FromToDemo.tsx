// -----------------------------------
// 3) gsap.fromTo() – full control
// -----------------------------------

"use client";
import React, { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsapClient";
import Section from "../common/Section";
import BoxStyle from "../common/Box";
import useReplay from "../common/useReplay";

export default function FromToDemo() {
  const boxRef = useRef<HTMLDivElement>(null);

  const animate = () => {
    if (!boxRef.current) return;

    // Reset before replay
    gsap.set(boxRef.current, { x: 0, opacity: 1 });

    // Animate with fromTo
    gsap.fromTo(
      boxRef.current,
      { x: -150, opacity: 0 },
      { x: 150, opacity: 1, duration: 1.5 }
    );
  };

  useGSAP(
    () => {
      animate();
    },
    { scope: boxRef }
  );

  // Hook into replay button
  useReplay("gsap.fromTo()", animate);
  return (
    <Section
      title="gsap.fromTo()"
      subtitle="Define both start and end values explicitly"
    >
      <div style={{ height: 120, position: "relative", overflow: "hidden" }}>
        <div ref={boxRef}>
          <BoxStyle color="purple" label="FROMTO" />
        </div>
      </div>
    </Section>
  );
}
