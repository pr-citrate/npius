import Layer from "@/components/common/spring/Layer";
import Image from "next/image";

export default function Station({
  className,
  alt,
  src,
  discription,
  ...props
}) {
  return (
    <>
      <Layer
        className={`flex flex-col h-screen items-center justify-center z-10 ${className}`}
        {...props}
      >
        <Image src={src} alt={alt} width={1440} height={1024} priority />
      </Layer>
    </>
  );
}
