import Layer from "@/components/common/spring/Layer";
import Image from "next/image";
import ImageContainer from "@/components/common/ImageContainer";

import ground from "@public/images/island/ground.png";
import waves from "@public/images/island/waves.png";
import shade from "@public/images/island/shade.png";
import coconut from "@public/images/island/coconut.png";
import log from "@public/images/island/log.png";
import leaves from "@public/images/island/leaves.png";
import core from "@public/images/island/core.png";

export default function Daehando({
  speed = 0,
  width,
  height,
  className,
  ...props
}) {
  const images = [
    { img: core, spd: speed, alt: "core" },
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
            className={`flex flex-col h-screen items-center justify-center z-10 ${className}`}
            {...props}
          >
            <Image src={img} alt={alt} width={width} height={height} priority />
          </Layer>
        );
      })}
    </>
  );
}
