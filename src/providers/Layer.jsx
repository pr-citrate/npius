'use client';

import { ParallaxLayer } from '@react-spring/parallax';

export default function Layer({ children, ...props }) {
  return <ParallaxLayer {...props}>{children}</ParallaxLayer>;
}
