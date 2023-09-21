'use client';

import { Parallax } from '@react-spring/parallax';

export default function ParallaxWrapper({ children, ...props }) {
  return <Parallax {...props}>{children}</Parallax>;
}
