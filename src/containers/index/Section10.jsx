import Background from "@/components/common/spring/Background";
import Core from "@/components/common/spring/Core";

export default function Section10() {
  const offset = 10;
  return (
    <>
      <Background offset={offset} className="bg-slate-950" />
      <Core
        offset={offset}
        className={"bg-gradient-to-b from-gray-800 to-gray-900"}
      />
    </>
  );
}
