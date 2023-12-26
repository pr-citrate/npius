import Layer from "@/components/common/spring/Layer";
import station1 from "@public/images/stations/Station1.png";
import Image from "next/image";

export default function Station1({ className, ...props }) {
  return (
    <>
      <Layer
        className={`flex flex-col h-screen items-center justify-center z-10 ${className}`}
        {...props}
      >
        <Image
          src={station1}
          alt={"station 1"}
          width={1440}
          height={1024}
          priority
        />
      </Layer>
    </>
  );
}
