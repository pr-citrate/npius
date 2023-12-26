import Background from "@/components/common/spring/Background";
import Core from "@/components/common/spring/Core";

export default function Section6() {
  const offset = 6;
  return (
    <>
      <Background offset={offset} className="bg-indigo-950" />

      <Core offset={offset} className={"bg-gray-600"} />
    </>
  );
}
