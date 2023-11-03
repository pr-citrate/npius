import Layer from "@/providers/Layer";

export default function Station2({ ...props }) {
  return (
    <>
      <Layer className="flex items-center justify-center" {...props}>
        <div className="bg-white rounded-lg w-36 h-36">station 2</div>
      </Layer>
    </>
  );
}
