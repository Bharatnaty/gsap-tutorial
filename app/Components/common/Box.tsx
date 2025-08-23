"use client";
import React from "react";


const Box = ({ color = "#4ade80", label = "Box" }) => {
return (
<div
style={{
width: 80,
height: 80,
backgroundColor: color,
display: "flex",
alignItems: "center",
justifyContent: "center",
borderRadius: 12,
margin: 10,
color: "white",
fontWeight: "bold",
}}
>
{label}
</div>
);
};

export default Box;