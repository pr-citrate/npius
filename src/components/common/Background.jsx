import Layer from "@providers/Layer";

export default function Background({ children, className, ...props }) {
  return (
    <Layer className={`overflow-visible-z-10 h-100v ${className}`} {...props}>
      {children}
    </Layer>
  );
}
