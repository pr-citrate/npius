'use client';

import { Parallax } from '@react-spring/parallax';

export default function ParallaxProvider({ children, ...props }) {
  return <Parallax {...props}>{children}</Parallax>;
}
