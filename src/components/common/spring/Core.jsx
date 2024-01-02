import Layer from "@/components/common/spring/Layer";
export default function Core({ className, offset, ...props }) {
  return (
    <Layer
      className={"flex justify-center items-center -z-10"}
      offset={offset}
      speed={0}
      {...props}
    >
      <div className={`w-[30vw] h-100v ${className}`} />
    </Layer>
  );
}
