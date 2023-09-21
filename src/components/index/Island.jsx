import Layer from '@wrappers/Layer';
import Image from 'next/image';

import ground from '@images/island/ground.png';
import waves from '@images/island/waves.png';
import shade from '@images/island/shade.png';
import coconut from '@images/island/coconut.png';
import log from '@images/island/log.png';
import leaves from '@images/island/leaves.png';

export default function Island({ speed = 0, width, height, ...props }) {
  const images = [
    { img: ground, spd: speed, alt: 'ground' },
    { img: waves, spd: speed + 0.01, alt: 'waves' },
    { img: shade, spd: speed - 0.04, alt: 'shade' },
    { img: coconut, spd: speed - 0.1, alt: 'coconut' },
    { img: log, spd: speed - 0.03, alt: 'log' },
    { img: leaves, spd: speed - 0.04, alt: 'leaves' },
  ];

  return (
    <>
      {images.map(({ img, spd, alt }) => {
        return (
          <Layer
            key={alt}
            speed={spd}
            {...props}
            className='flex flex-col items-center justify-end'
          >
            <Image src={img} alt={alt} width={width} height={height} priority />
          </Layer>
        );
      })}
      {/* <Layer
        speed={speed}
        {...props}
        className='flex flex-col items-center justify-end'
      >
        <Image src={ground} alt='ground' width={width} height={height} />
      </Layer>

      <Layer
        speed={speed + 0.01}
        {...props}
        className='flex flex-col items-center justify-end'
      >
        <Image src={waves} alt='waves' width={width} height={height} />
      </Layer>

      <Layer
        speed={speed - 0.04}
        {...props}
        className='flex flex-col items-center justify-end'
      >
        <Image src={shade} alt='shade' width={width} height={height} />
      </Layer>

      <Layer
        speed={speed - 0.05}
        {...props}
        className='flex flex-col items-center justify-end'
      >
        <Image src={coconut} alt='coconut' width={width} height={height} />
      </Layer>

      <Layer
        speed={speed - 0.03}
        {...props}
        className='flex flex-col items-center justify-end'
      >
        <Image src={log} alt='log' width={width} height={height} />
      </Layer>

      <Layer
        speed={speed - 0.04}
        {...props}
        className='flex flex-col items-center justify-end'
      >
        <Image src={leaves} alt='leaves' width={width} height={height} />
      </Layer> */}
    </>
  );
}
