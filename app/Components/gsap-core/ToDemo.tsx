// -----------------------------------
// 1) gsap.to() – move to new values
// -----------------------------------

"use client";
import React, { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsapClient";
import Section from "../common/Section";
import BoxStyle from "../common/Box";
import useReplay from "../common/useReplay";

export default function ToDemo() {
  const boxRef = useRef<HTMLDivElement>(null);

  const animate = () => {
    gsap.set(boxRef.current, { x: 0, y: 0, rotation: 0,opacity:0 });
    gsap.to(boxRef.current, { x: 200, rotation: 360, duration: 1,opacity:1 });
  };
  
  useGSAP(
    () => {
      animate();
    },
    { scope: boxRef }
  );

  useReplay("gsap.to()", animate);
  return (
    <Section
      title="gsap.to()"
      subtitle="Animate from current values to the ones you set (x: 220, duration: 1)"
    >
      <div style={{ height: 120, position: "relative", overflow: "hidden" }}>
        <div ref={boxRef}>
          <BoxStyle color="blue" label="TIME" />
        </div>
      </div>
    </Section>
  );
}
