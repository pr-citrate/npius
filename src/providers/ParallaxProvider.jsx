"use client";

import { Parallax } from "@react-spring/parallax";

export default function ParallaxProvider({ children, ...props }) {
  return (
    <Parallax {...props} className={"scrollbar-hide"}>
      {children}
    </Parallax>
  );
}
