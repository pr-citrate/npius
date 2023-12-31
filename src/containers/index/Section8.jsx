import Background from "@/components/common/spring/Background";
import Core from "@/components/common/spring/Core";
import StationName from "@/components/index/StationName";
import Station4 from "@/components/index/stations/Station4";

export default function Section8() {
  const offset = 8;
  return (
    <>
      <Background offset={offset} className="bg-slate-950" />
      <StationName offset={offset}>station 4</StationName>
      <Station4 offset={offset} speed={2} />

      <Core
        offset={offset}
        className={"bg-gradient-to-b from-gray-700 to-gray-800"}
      />
    </>
  );
}
