import Layer from "@/providers/Layer";

export default function Box({ className, children, ...props }) {
  return (
    <Layer className={"flex justify-center items-center"} {...props}>
      <div className={`flex flex-col ${className}`}>{children}</div>
    </Layer>
  );
}
