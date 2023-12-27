import Layer from "@/components/common/spring/Layer";

export default function StationName({ children, className, ...props }) {
  return (
    <Layer className={`pt-24 pl-4 sm:pl-24 ${className}`} {...props}>
      <h3 className="inline-flex p-4 text-xl text-white uppercase border-b border-white sm:text-4xl">
        {children}
      </h3>
    </Layer>
  );
}
