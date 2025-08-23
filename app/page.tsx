"use client";

import React from "react";
import GSAPCoreShowcase from "./Components/GSAPCoreShowcase";

function page() {
  return (
    <div
      style={{
        maxWidth: 900,
        margin: "0 auto",
        padding: 24,
        fontFamily:
          "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif",
      }}
    >
      <GSAPCoreShowcase />
    </div>
  );
}

export default page;
