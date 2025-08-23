// -----------------------------------
// 2) gsap.from() – animate from values
// -----------------------------------

"use client";
import React, { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsapClient";
import Section from "../common/Section";
import BoxStyle from "../common/Box";
import useReplay from "../common/useReplay";

export default function FromDemo() {
  const boxRef = useRef<HTMLDivElement>(null);

  const animate = () => {
    if (!boxRef.current) return;
    gsap.set(boxRef.current, { x: 0, opacity: 1 }); // reset before replay
    gsap.from(boxRef.current, { x: 200, opacity: 0, duration: 1 });
  };

  // ✅ run once when mounted
  useGSAP(
    () => {
      animate();
    },
    { scope: boxRef }
  );

  // ✅ replay support
  useReplay("gsap.from()", animate);

  return (
    <Section
      title="gsap.from()"
      subtitle="Animate starting from given values to the element's current state (x: -200, opacity: 0)"
    >
      <div style={{ height: 120, position: "relative", overflow: "hidden" }}>
        <div ref={boxRef}>
          <BoxStyle color="orange" label="FROM" />
        </div>
      </div>
    </Section>
  );
}
