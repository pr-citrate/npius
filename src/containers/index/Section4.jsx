import Background from "@/components/common/spring/Background";
import Core from "@/components/common/spring/Core";

export default function Section4() {
  const offset = 4;
  return (
    <>
      <Background
        offset={offset}
        className="bg-gradient-to-b from-blue-700 to-blue-950"
      />
      <Core
        offset={offset}
        className={"bg-gradient-to-b from-gray-400 to-gray-500"}
      />
    </>
  );
}
