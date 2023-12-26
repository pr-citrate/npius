import Background from "@/components/common/spring/Background";
import Core from "@/components/common/spring/Core";

export default function Section7() {
  const offset = 7;
  return (
    <>
      <Background
        offset={offset}
        className="bg-gradient-to-b from-indigo-950 to-slate-950"
      />

      <Core
        offset={offset}
        className={"bg-gradient-to-b from-gray-600 to-gray-700"}
      />
    </>
  );
}
