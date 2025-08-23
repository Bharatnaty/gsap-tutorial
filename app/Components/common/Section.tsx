"use client";
import React from "react";

const Section: React.FC<{
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}> = ({ title, subtitle, children }) => (
  <div
    style={{
      border: "1px solid #e5e7eb",
      borderRadius: 16,
      padding: 16,
      margin: "24px 0",
      boxShadow: "0 4px 14px rgba(0,0,0,0.06)",
      background: "#fff",
    }}
  >
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 12,
      }}
    >
      <h2 style={{ margin: 0, fontSize: 20 }}>⚡ {title}</h2>
      <button
        aria-label="Replay"
        onClick={() => {
          const evt = new CustomEvent("gsap-demo-replay", {
            detail: { title },
          });
          window.dispatchEvent(evt);
        }}
        style={{
          border: "1px solid #e5e7eb",
          background: "white",
          padding: "8px 12px",
          borderRadius: 12,
          cursor: "pointer",
        }}
      >
        ▶ Play
      </button>
    </div>
    {subtitle ? (
      <p style={{ marginTop: 0, color: "#6b7280" }}>{subtitle}</p>
    ) : null}
    {children}
  </div>
);

export default Section;
