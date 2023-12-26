import Background from "@/components/common/spring/Background";
import Core from "@/components/common/spring/Core";
import StationName from "@/components/index/StationName";
import Station3 from "@/components/index/stations/Station3";

export default function Section5() {
  const offset = 5;
  return (
    <>
      <Background
        offset={offset}
        className="bg-gradient-to-b from-blue-950 to-indigo-950"
      />
      <StationName offset={offset}>station 3</StationName>
      <Station3 offset={offset} speed={2} />

      <Core
        offset={offset}
        className={"bg-gradient-to-b from-gray-500 to-gray-600"}
      />
    </>
  );
}
