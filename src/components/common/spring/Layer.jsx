"use client";

import { ParallaxLayer } from "@react-spring/parallax";

export default function Layer({ children, className, ...props }) {
  return (
    <ParallaxLayer className={`pointer-events-none ${className}`} {...props}>
      {children}
    </ParallaxLayer>
  );
}
