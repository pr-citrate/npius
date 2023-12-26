import Background from "@/components/common/spring/Background";
import Core from "@/components/common/spring/Core";

export default function Section9() {
  const offset = 9;
  return (
    <>
      <Background offset={offset} className="bg-slate-950" />

      <Core offset={offset} className={"bg-gray-800"} />
    </>
  );
}
