import Layer from "@/providers/Layer";
import Image from "next/image";

import ground from "@public/images/island/ground.png";
import waves from "@public/images/island/waves.png";
import shade from "@public/images/island/shade.png";
import coconut from "@public/images/island/coconut.png";
import log from "@public/images/island/log.png";
import leaves from "@public/images/island/leaves.png";

export default function Island({
  speed = 0,
  width,
  height,
  className,
  ...props
}) {
  const images = [
    { img: ground, spd: speed, alt: "ground" },
    { img: waves, spd: speed + 0.01, alt: "waves" },
    { img: shade, spd: speed - 0.04, alt: "shade" },
    { img: coconut, spd: speed - 0.1, alt: "coconut" },
    { img: log, spd: speed - 0.03, alt: "log" },
    { img: leaves, spd: speed - 0.04, alt: "leaves" },
  ];

  return (
    <>
      {images.map(({ img, spd, alt }) => {
        return (
          <Layer
            key={alt}
            speed={spd}
            className={`flex flex-col items-center justify-end ${className}`}
            {...props}
          >
            <Image src={img} alt={alt} width={width} height={height} priority />
          </Layer>
        );
      })}
    </>
  );
}
