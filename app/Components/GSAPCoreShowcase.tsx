"use client";

import React from "react";
import ToDemo from "./gsap-core/ToDemo";
import FromDemo from "./gsap-core/FromDemo";
import FromToDemo from "./gsap-core/FromToDemo";
import TimingDemo from "./gsap-core/TimingDemo";
import RepeatYoyoDemo from "./gsap-core/RepeatYoyoDemo";
import StaggerDemo from "./gsap-core/StaggerDemo";

export default function GSAPCoreShowcase() {
  return (
    <div style={{ padding: 40 }}>
      <h2>GSAP Core Animation Methods Showcase</h2>
      <ToDemo />
      <FromDemo />
      <FromToDemo />
      <TimingDemo />
      <RepeatYoyoDemo />
      <StaggerDemo />
    </div>
  );
}
