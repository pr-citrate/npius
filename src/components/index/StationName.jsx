import Layer from "@/components/common/spring/Layer";

export default function StationName({ children, className, ...props }) {
  return (
    <Layer className={`p-24 ${className}`} {...props}>
      <h3 className="inline-flex p-4 text-4xl text-white uppercase border-b border-white">
        {children}
      </h3>
    </Layer>
  );
}
