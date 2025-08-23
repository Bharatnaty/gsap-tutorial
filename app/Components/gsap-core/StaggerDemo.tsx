// ----------------------------------------------
// 6) stagger – animate a group sequentially
// ----------------------------------------------

"use client";
import React, { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsapClient";
import Section from "../common/Section";
import BoxStyle from "../common/Box";
import useReplay from "../common/useReplay";

export default function StaggerDemo() {
  const containerRef = useRef<HTMLDivElement>(null);

  const animate = () => {
    if (containerRef?.current) {
      const boxes = Array.from(containerRef.current.children); // safer
      gsap.set(boxes, { y: 100, opacity: 0 }); // set initial state for each box
      gsap.to(boxes, {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "back.out(1.7)",
      });
    }
  };
  useGSAP(
    () => {
      animate();
    },
    { scope: containerRef }
  );

  useReplay("stagger", animate);
  return (
    <Section
      title="stagger"
      subtitle="stagger: 0.15 – items animate one after another"
    >
      <div
        ref={containerRef}
        style={{
          height: 200,
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        <BoxStyle color="#f59e0b" label="1" />
        <BoxStyle color="#10b981" label="2" />
        <BoxStyle color="#3b82f6" label="3" />
        <BoxStyle color="#ef4444" label="4" />
      </div>
    </Section>
  );
}
